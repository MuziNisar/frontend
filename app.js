/* Cyber Shield — offline app logic.
   No server, no network. Everything lives in localStorage on this phone. */

const $ = (id) => document.getElementById(id);
const el = (t, c, x) => { const n = document.createElement(t); if (c) n.className = c; if (x !== undefined) n.textContent = x; return n; };

const K = {
  account: "cs_account_v1",   // {username, salt, pass_hash, recovery_hash, callsign}
  session: "cs_session_v1",   // {username, at}
  progress: "cs_progress_v1", // {done: {code:true}, drill: [{id, correct}], checks: [{score, band, findings, at}]}
  lang: "cs_lang",
};

const S = {
  lang: localStorage.getItem(K.lang) || "en",
  account: JSON.parse(localStorage.getItem(K.account) || "null"),
  session: JSON.parse(localStorage.getItem(K.session) || "null"),
  drillOrder: [],
  drillIdx: 0,
};

function loadProgress() {
  return JSON.parse(localStorage.getItem(K.progress) || '{"done":{},"drill":[],"checks":[]}');
}
function saveProgress(p) { localStorage.setItem(K.progress, JSON.stringify(p)); }

/* ---------------- crypto ---------------- */
function toHex(buf) {
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function sha256Hex(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return toHex(buf);
}
function randomHex(bytes) {
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  return toHex(arr);
}
function generateRecoveryCode() {
  // 12 chars in 3 blocks of 4, e.g. K7QP-2XV3-N9AB
  const alphabet = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";
  const arr = new Uint8Array(12);
  crypto.getRandomValues(arr);
  let out = "";
  for (let i = 0; i < 12; i++) {
    out += alphabet[arr[i] % alphabet.length];
    if (i === 3 || i === 7) out += "-";
  }
  return out;
}
async function hashSecret(secret, salt) {
  return sha256Hex(salt + "|" + secret);
}

/* ---------------- toast + language ---------------- */
function toast(msg) {
  document.querySelectorAll(".toast").forEach((t) => t.remove());
  const t = el("div", "toast", msg);
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3800);
}

function applyLang() {
  document.querySelectorAll("[data-en]").forEach((n) => {
    const v = n.dataset[S.lang];
    if (v) { n.textContent = v; n.classList.toggle("ur", S.lang === "ur"); }
  });
  $("langBtn").textContent = S.lang === "en" ? "اردو" : "English";
  localStorage.setItem(K.lang, S.lang);
}
$("langBtn").onclick = () => {
  S.lang = S.lang === "en" ? "ur" : "en";
  applyLang();
  const open = document.querySelector(".screen.on")?.id;
  if (open === "s-learn") loadLearn();
  if (open === "s-drill") loadDrill();
  if (open === "s-check") loadChecklist();
  if (open === "s-home") loadHome();
  if (open === "s-module" && currentModule) openModule(currentModule);
};

/* ---------------- navigation ---------------- */
function show(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.toggle("on", s.id === id));
  document.querySelectorAll("#tabs button").forEach((b) => b.classList.toggle("on", b.dataset.tab === id));
  window.scrollTo(0, 0);
  if (id === "s-home") loadHome();
  if (id === "s-learn") loadLearn();
  if (id === "s-drill") loadDrill();
  if (id === "s-check") loadChecklist();
  if (id === "s-settings") loadSettings();
}
document.querySelectorAll("#tabs button").forEach((b) => (b.onclick = () => show(b.dataset.tab)));
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-goto]");
  if (t) show(t.dataset.goto);
});

/* ---------------- auth screen switching ---------------- */
$("btn-goto-signup").onclick = () => show("s-signup");
$("btn-goto-recover").onclick = () => show("s-recover");
$("btn-back-signin-1").onclick = () => show("s-signin");
$("btn-back-signin-2").onclick = () => show("s-signin");

/* ---------------- sign up ---------------- */
$("btn-signup").onclick = async () => {
  const username = $("su-user").value.trim();
  const callsign = $("su-callsign").value.trim();
  const pass = $("su-pass").value;
  const pass2 = $("su-pass2").value;
  if (username.length < 3) return toast("Choose a username of at least 3 characters.");
  if (pass.length < 8) return toast("Password must be at least 8 characters.");
  if (pass !== pass2) return toast("Passwords do not match.");
  if (S.account && S.account.username === username) return toast("An account with that username already exists on this phone.");

  const salt = randomHex(16);
  const pass_hash = await hashSecret(pass, salt);
  const recovery = generateRecoveryCode();
  const recovery_hash = await hashSecret(recovery, salt);

  S.account = { username, salt, pass_hash, recovery_hash, callsign };
  localStorage.setItem(K.account, JSON.stringify(S.account));
  // reset progress for the new account
  saveProgress({ done: {}, drill: [], checks: [] });

  $("rc-code").textContent = recovery;
  $("rc-ack").checked = false;
  $("btn-rc-continue").disabled = true;
  show("s-recovery-show");
};

$("rc-ack").onchange = (e) => { $("btn-rc-continue").disabled = !e.target.checked; };
$("btn-rc-continue").onclick = () => {
  // auto sign-in the freshly created account
  S.session = { username: S.account.username, at: Date.now() };
  localStorage.setItem(K.session, JSON.stringify(S.session));
  enterApp();
};

/* ---------------- sign in ---------------- */
$("btn-signin").onclick = async () => {
  const username = $("si-user").value.trim();
  const pass = $("si-pass").value;
  if (!S.account) return toast("No account on this phone. Tap 'Create account' first.");
  if (S.account.username !== username) return toast("Username or password is wrong.");
  const h = await hashSecret(pass, S.account.salt);
  if (h !== S.account.pass_hash) return toast("Username or password is wrong.");
  S.session = { username, at: Date.now() };
  localStorage.setItem(K.session, JSON.stringify(S.session));
  enterApp();
};

/* ---------------- recovery ---------------- */
$("btn-recover").onclick = async () => {
  const username = $("rec-user").value.trim();
  const code = $("rec-code").value.trim().toUpperCase();
  const newPass = $("rec-pass").value;
  if (!S.account) return toast("No account on this phone.");
  if (S.account.username !== username) return toast("Username does not match.");
  if (newPass.length < 8) return toast("New password must be at least 8 characters.");
  const h = await hashSecret(code, S.account.salt);
  if (h !== S.account.recovery_hash) return toast("Recovery code is wrong.");
  // reset password, keep salt (recovery code becomes single-use effectively)
  S.account.pass_hash = await hashSecret(newPass, S.account.salt);
  // rotate the recovery code
  const newRec = generateRecoveryCode();
  S.account.recovery_hash = await hashSecret(newRec, S.account.salt);
  localStorage.setItem(K.account, JSON.stringify(S.account));

  $("rc-code").textContent = newRec;
  $("rc-ack").checked = false;
  $("btn-rc-continue").disabled = true;
  toast("Password reset. Save the new recovery code below.");
  show("s-recovery-show");
};

/* ---------------- sign out + wipe ---------------- */
function signOut() {
  S.session = null;
  localStorage.removeItem(K.session);
  $("tabs").style.display = "none";
  $("unitLabel").textContent = S.lang === "ur" ? "سائن ان نہیں ہیں" : "Not signed in";
  $("si-user").value = ""; $("si-pass").value = "";
  show("s-signin");
}

function wipeApp() {
  const ok = confirm(S.lang === "ur"
    ? "پورا ایپ ڈیٹا حذف کر دیا جائے؟ اکاؤنٹ، پیش رفت، اور ریکوری کوڈ سب چلے جائیں گے۔ یہ عمل واپس نہیں ہو سکتا۔"
    : "Wipe all app data? Account, progress, and recovery code will all be deleted. This cannot be undone.");
  if (!ok) return;
  localStorage.removeItem(K.account);
  localStorage.removeItem(K.session);
  localStorage.removeItem(K.progress);
  S.account = null; S.session = null;
  toast(S.lang === "ur" ? "ایپ ڈیٹا مٹا دیا گیا۔" : "App data wiped.");
  location.reload();
}

/* ---------------- enter app after auth ---------------- */
function enterApp() {
  const cs = S.account.callsign || S.account.username;
  $("unitLabel").textContent = S.lang === "ur" ? `${cs} · سائن ان` : `${cs} · signed in`;
  $("tabs").style.display = "grid";
  show("s-home");
}

/* ---------------- HOME (score computed locally) ---------------- */
function computeHome() {
  const p = loadProgress();
  const modulesDone = Object.keys(p.done).length;
  const modulesTotal = MODULES.length;

  const attempts = p.drill.length;
  const correct = p.drill.filter((a) => a.correct).length;
  const drillPct = attempts ? Math.round((correct / attempts) * 100) : 0;

  const latestCheck = p.checks.length ? p.checks[p.checks.length - 1] : null;
  const devicePart = latestCheck ? latestCheck.score : 0;
  const daysSince = latestCheck ? Math.floor((Date.now() - latestCheck.at) / (1000 * 60 * 60 * 24)) : null;

  const modulePct = modulesTotal ? (modulesDone / modulesTotal) * 100 : 0;
  const learningPart = 0.5 * modulePct + 0.5 * drillPct;
  const score = Math.round(0.6 * devicePart + 0.4 * learningPart);

  let band = "Re-test in 30 days";
  if (score >= 85) band = "Ready";
  else if (score >= 70) band = "Fit";
  else if (score >= 50) band = "Needs work";

  return { score, band, modulesDone, modulesTotal, drillPct, attempts, daysSince };
}

function loadHome() {
  const d = computeHome();
  $("h-score").innerHTML = `${d.score}<span>/100</span>`;
  const band = $("h-band");
  band.textContent = d.band;
  band.className = "band " + (d.score >= 85 ? "high" : d.score >= 70 ? "" : d.score >= 50 ? "mid" : "low");
  $("h-mods").textContent = `${d.modulesDone}/${d.modulesTotal}`;
  $("h-drill").textContent = d.attempts ? d.drillPct + "%" : (S.lang === "ur" ? "—" : "—");
  $("h-check").textContent = d.daysSince === null ? (S.lang === "ur" ? "کبھی نہیں" : "never") : d.daysSince + "d";
  $("h-call").textContent = S.account?.callsign || S.account?.username || "—";
  const cs = S.account?.callsign || S.account?.username || "";
  $("unitLabel").textContent = S.lang === "ur" ? `${cs} · سائن ان` : `${cs} · signed in`;
}

$("btn-panic").onclick = () => {
  show("s-report");
  toast(S.lang === "ur"
    ? "رقم نہ دیں۔ کچھ حذف نہ کریں۔ اسکرین شاٹ لیں۔"
    : "Do not pay. Do not delete anything. Screenshot everything.");
};

/* ---------------- LEARN ---------------- */
function loadLearn() {
  const list = $("learn-list"); list.innerHTML = "";
  const p = loadProgress();
  MODULES.forEach((m, i) => {
    const done = !!p.done[m.code];
    const c = el("div", "card tap" + (done ? " done" : ""));
    c.tabIndex = 0;
    const eb = el("span", "eyebrow", (S.lang === "ur" ? "سبق " : "Lesson ") + String(i + 1).padStart(2, "0"));
    c.appendChild(eb);
    c.appendChild(el("h3", S.lang === "ur" ? "ur" : "", S.lang === "ur" && m.title_ur ? m.title_ur : m.title_en));
    c.appendChild(el("p", S.lang === "ur" ? "ur" : "", S.lang === "ur" && m.summary_ur ? m.summary_ur : m.summary_en));
    const open = () => openModule(m.code);
    c.onclick = open;
    c.onkeydown = (e) => { if (e.key === "Enter") open(); };
    list.appendChild(c);
  });
}

let currentModule = null;
function openModule(code) {
  const m = MODULES.find((x) => x.code === code);
  if (!m) return;
  currentModule = code;
  const ur = S.lang === "ur";
  $("m-title").textContent = ur && m.title_ur ? m.title_ur : m.title_en;
  $("m-title").className = "title" + (ur ? " ur" : "");
  $("m-body").textContent = ur && m.body_ur ? m.body_ur : m.body_en;
  $("m-body").className = "body-text" + (ur ? " ur" : "");
  const p = loadProgress();
  const done = !!p.done[code];
  const btn = $("btn-complete");
  btn.textContent = done
    ? (ur ? "دوبارہ نامکمل کریں" : "Mark not done")
    : (ur ? "مکمل نشان زد کریں" : "Mark as done");
  btn.className = done ? "ghost" : "";
  btn.onclick = () => {
    const pp = loadProgress();
    if (pp.done[code]) delete pp.done[code]; else pp.done[code] = Date.now();
    saveProgress(pp);
    toast(pp.done[code]
      ? (ur ? "سبق مکمل کر لیا۔" : "Lesson marked done.")
      : (ur ? "نشان ہٹا دیا گیا۔" : "Marked as not done."));
    show("s-learn");
  };
  show("s-module");
}

/* ---------------- DRILL ---------------- */
function loadDrill() {
  // Continue where the user left off within this session, but reshuffle when finished.
  if (!S.drillOrder.length || S.drillIdx >= S.drillOrder.length) {
    S.drillOrder = SCENARIOS.map((_, i) => i);
    for (let i = S.drillOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [S.drillOrder[i], S.drillOrder[j]] = [S.drillOrder[j], S.drillOrder[i]];
    }
    S.drillIdx = 0;
  }
  renderDrillCard();
  updateDrillProgress();
}

function updateDrillProgress() {
  const p = loadProgress();
  const correct = p.drill.filter((a) => a.correct).length;
  const pct = p.drill.length ? Math.round((correct / p.drill.length) * 100) : 0;
  $("drill-count").textContent = (S.lang === "ur" ? "کارڈ " : "Card ") + (Math.min(S.drillIdx + 1, S.drillOrder.length)) + "/" + S.drillOrder.length;
  $("drill-score").textContent = p.drill.length ? pct + "%" : (S.lang === "ur" ? "نئی" : "new");
  $("drill-bar").style.width = ((S.drillIdx / S.drillOrder.length) * 100) + "%";
}

function renderDrillCard() {
  const area = $("drill-area"); area.innerHTML = "";
  if (S.drillIdx >= S.drillOrder.length) return;
  const c = SCENARIOS[S.drillOrder[S.drillIdx]];
  const ur = S.lang === "ur";
  const wrap = el("div", "drill");
  wrap.appendChild(el("span", "kind", c.kind));
  wrap.appendChild(el("div", "from", c.sender || c.kind));
  wrap.appendChild(el("div", "bubble" + (ur ? " ur" : ""), ur && c.content_ur ? c.content_ur : c.content_en));
  area.appendChild(wrap);
  const pair = el("div", "pair");
  const good = el("button", "ghost", ur ? "اصلی" : "Genuine");
  const bad = el("button", "danger", ur ? "مشکوک" : "Suspicious");
  good.onclick = () => answerDrill(c, true);
  bad.onclick = () => answerDrill(c, false);
  pair.append(good, bad);
  area.appendChild(pair);
}

function answerDrill(card, saidGenuine) {
  const correct = card.is_genuine === saidGenuine;
  const p = loadProgress();
  p.drill.push({ id: card.id, correct, at: Date.now() });
  saveProgress(p);

  const ur = S.lang === "ur";
  const area = $("drill-area");
  area.querySelectorAll(".pair button").forEach((b) => (b.disabled = true));
  const v = el("div", "verdict " + (correct ? "right" : "wrong"));
  v.appendChild(el("b", "", correct ? (ur ? "درست" : "Correct") : (ur ? "غلط" : "Not quite")));
  v.appendChild(el("div", ur ? "ur" : "", ur && card.explanation_ur ? card.explanation_ur : card.explanation_en));
  area.appendChild(v);
  const next = el("button", "", ur ? "اگلا کارڈ" : "Next card");
  next.onclick = () => { S.drillIdx += 1; loadDrill(); };
  area.appendChild(next);
  v.scrollIntoView({ behavior: "smooth", block: "center" });
  updateDrillProgress();
}

/* ---------------- CHECK ---------------- */
function loadChecklist() {
  const list = $("check-list"); list.innerHTML = ""; $("check-result").innerHTML = "";
  const ur = S.lang === "ur";
  CHECKS.forEach((c) => {
    const row = el("div", "check");
    const box = el("input"); box.type = "checkbox"; box.id = "chk_" + c.id;
    const lab = document.createElement("label");
    lab.htmlFor = box.id;
    const t = el("div", "title" + (ur ? " ur" : ""), ur ? c.title_ur : c.title_en);
    const sev = el("span", "sev " + c.severity, c.severity);
    t.appendChild(sev);
    const how = el("div", "how" + (ur ? " ur" : ""), ur ? c.how_ur : c.how_en);
    lab.append(t, how);
    row.append(box, lab);
    list.appendChild(row);
  });
}

$("btn-check-submit").onclick = () => {
  const ur = S.lang === "ur";
  let score = 100;
  const findings = [];
  CHECKS.forEach((c) => {
    const box = $("chk_" + c.id);
    if (box && box.checked) {
      score -= c.weight;
      findings.push({ id: c.id, title: ur ? c.title_ur : c.title_en, severity: c.severity, advice: ur ? c.how_ur : c.how_en });
    }
  });
  score = Math.max(0, score);
  let band = "green";
  if (findings.some((f) => f.severity === "critical")) band = "red";
  else if (score < 70 || findings.length) band = "amber";

  const p = loadProgress();
  p.checks.push({ score, band, at: Date.now(), findings: findings.map((f) => f.id) });
  saveProgress(p);

  const out = $("check-result"); out.innerHTML = "";
  const head = el("div", "result " + (band === "green" ? "" : band));
  head.appendChild(el("span", "eyebrow", ur ? "فون کی حالت" : "Device posture"));
  head.appendChild(el("div", "big", score + "/100"));
  head.appendChild(el("div", "", band === "red"
    ? (ur ? "یہ فون یونٹ سائبر سیل کے حوالے کریں۔ پہلے فیکٹری ری سیٹ نہ کریں۔" : "Take this phone to the unit Cyber Cell. Do not factory reset first.")
    : band === "amber" ? (ur ? "نیچے دی گئی چیزیں درست کریں اور جانچ دوبارہ چلائیں۔" : "Fix the items below, then run the check again.")
    : (ur ? "کوئی عام علامت نہیں ملی۔" : "No common indicators found.")));
  out.appendChild(head);

  findings.forEach((f) => {
    const c = el("div", "finding" + (f.severity === "critical" ? " critical" : ""));
    c.appendChild(el("span", "sev", f.severity));
    c.appendChild(el("h3" + (ur ? " ur" : ""), "", f.title));
    c.appendChild(el("p" + (ur ? " ur" : ""), "", f.advice));
    out.appendChild(c);
  });

  const dis = el("div", "card note");
  dis.appendChild(el("span", "eyebrow", ur ? "یہ ضرور پڑھیں" : "Read this"));
  dis.appendChild(el("p" + (ur ? " ur" : ""), "", ur ? DISCLAIMER_UR : DISCLAIMER_EN));
  out.appendChild(dis);

  head.scrollIntoView({ behavior: "smooth", block: "start" });
  toast(ur ? "جانچ محفوظ ہو گئی۔ آپ کا ریڈی نیس اسکور اپڈیٹ ہو گیا۔" : "Check saved. Your readiness score has been updated.");
};

/* ---------------- SETTINGS ---------------- */
$("btn-settings").onclick = () => show("s-settings");
$("btn-logout").onclick = signOut;
$("btn-wipe").onclick = wipeApp;

function loadSettings() {
  $("set-callsign").value = S.account?.callsign || "";
}

$("btn-save-callsign").onclick = () => {
  if (!S.account) return;
  S.account.callsign = $("set-callsign").value.trim();
  localStorage.setItem(K.account, JSON.stringify(S.account));
  toast(S.lang === "ur" ? "کال سائن محفوظ کر لیا۔" : "Callsign saved.");
  const cs = S.account.callsign || S.account.username;
  $("unitLabel").textContent = S.lang === "ur" ? `${cs} · سائن ان` : `${cs} · signed in`;
};

/* ---------------- boot ---------------- */
applyLang();
if (S.account && S.session) {
  enterApp();
} else {
  $("tabs").style.display = "none";
  show(S.account ? "s-signin" : "s-signup");
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
