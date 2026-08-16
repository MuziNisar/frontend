/* Cyber Shield — offline app logic.
   No server, no network. Everything lives in localStorage on this phone. */

const $ = (id) => document.getElementById(id);
const el = (t, c, x) => { const n = document.createElement(t); if (c) n.className = c; if (x !== undefined) n.textContent = x; return n; };

const K = {
  account:  "cs_account_v1",   // {username, salt, pass_hash, recovery_hash, callsign}
  session:  "cs_session_v1",   // {username, at}
  progress: "cs_progress_v2",  // {done, drill, checks, activity}
  settings: "cs_settings_v1",  // {text_size, contacts}
  lang:     "cs_lang",
  brand:    "cs_brand",
  onboard:  "cs_onboard_done",
};

const DEFAULT_CONTACTS = {
  nco:    { label_en: "Unit Cyber NCO",         label_ur: "یونٹ سائبر این سی او",   num: "ext 2214" },
  family: { label_en: "Family Cyber Champion",  label_ur: "فیملی سائبر چیمپیئن",     num: "See your sub-unit list" },
  hotline:{ label_en: "FIA Cyber Crime Wing",   label_ur: "ایف آئی اے سائبر کرائم", num: "1991" },
};

const S = {
  lang:     localStorage.getItem(K.lang) || "en",
  brand:    localStorage.getItem(K.brand) || "samsung",
  account:  JSON.parse(localStorage.getItem(K.account) || "null"),
  session:  JSON.parse(localStorage.getItem(K.session) || "null"),
  drillOrder: [],
  drillIdx: 0,
  drillRoundSize: 5,
  drillRoundStart: 0,
  drillRoundCorrect: 0,
  quizModule: null,
  quizIdx: 0,
  quizScore: 0,
};

function loadProgress() {
  const raw = localStorage.getItem(K.progress);
  if (raw) return JSON.parse(raw);
  const old = localStorage.getItem("cs_progress_v1");
  if (old) {
    const p = JSON.parse(old);
    p.activity = p.activity || [];
    localStorage.setItem(K.progress, JSON.stringify(p));
    return p;
  }
  return { done: {}, drill: [], checks: [], activity: [] };
}
function saveProgress(p) { localStorage.setItem(K.progress, JSON.stringify(p)); }

function loadSettings() {
  const raw = JSON.parse(localStorage.getItem(K.settings) || "null");
  if (raw && raw.contacts) return raw;
  return { text_size: "normal", contacts: JSON.parse(JSON.stringify(DEFAULT_CONTACTS)) };
}
function saveSettings(s) { localStorage.setItem(K.settings, JSON.stringify(s)); }

function pushActivity(type, extra) {
  const p = loadProgress();
  p.activity = p.activity || [];
  p.activity.unshift(Object.assign({ type, at: Date.now() }, extra || {}));
  if (p.activity.length > 30) p.activity = p.activity.slice(0, 30);
  saveProgress(p);
}

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
async function hashSecret(secret, salt) { return sha256Hex(salt + "|" + secret); }

/* ---------------- toast + language + text size ---------------- */
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

function applyTextSize(size) {
  document.documentElement.classList.remove("txt-large", "txt-xlarge");
  if (size === "large")  document.documentElement.classList.add("txt-large");
  if (size === "xlarge") document.documentElement.classList.add("txt-xlarge");
}

$("langBtn").onclick = () => {
  S.lang = S.lang === "en" ? "ur" : "en";
  applyLang();
  const open = document.querySelector(".screen.on")?.id;
  refreshOpenScreen(open);
};

function refreshOpenScreen(id) {
  if (id === "s-learn") loadLearn();
  if (id === "s-drill") loadDrill();
  if (id === "s-check") loadChecklist();
  if (id === "s-home") loadHome();
  if (id === "s-glossary") loadGlossary();
  if (id === "s-settings") openSettings();
  if (id === "s-report") renderReportContacts();
  if (id === "s-module" && currentModule) openModule(currentModule);
  if (id === "s-quiz" && S.quizModule) renderQuizQ();
}

/* ---------------- navigation ---------------- */
function show(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.toggle("on", s.id === id));
  document.querySelectorAll("#tabs button").forEach((b) => b.classList.toggle("on", b.dataset.tab === id));
  window.scrollTo(0, 0);
  refreshOpenScreen(id);
}
document.querySelectorAll("#tabs button").forEach((b) => (b.onclick = () => show(b.dataset.tab)));
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-goto]");
  if (t) show(t.dataset.goto);
});

/* ---------------- onboarding ---------------- */
let onbSlide = 0;
function showSlide(i) {
  document.querySelectorAll("#s-onboarding .slide").forEach((s, k) => s.classList.toggle("on", k === i));
  document.querySelectorAll("#s-onboarding .dot").forEach((d, k) => d.classList.toggle("on", k === i));
  const isLast = i === 2;
  $("btn-onb-next").textContent = isLast
    ? (S.lang === "ur" ? "شروع کریں" : "Get started")
    : (S.lang === "ur" ? "اگلا" : "Next");
}
$("btn-onb-next").onclick = () => {
  if (onbSlide < 2) { onbSlide += 1; showSlide(onbSlide); }
  else finishOnboarding();
};
$("btn-onb-skip").onclick = () => finishOnboarding();

function finishOnboarding() {
  localStorage.setItem(K.onboard, "1");
  $("s-onboarding").style.display = "none";
  $("topbar").style.display = "";
  show(S.account ? "s-signin" : "s-signup");
}

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
  if (username.length < 3) return toast(S.lang === "ur" ? "کم از کم ۳ حروف کا یوزر نیم چنیں۔" : "Choose a username of at least 3 characters.");
  if (pass.length < 8) return toast(S.lang === "ur" ? "پاس ورڈ کم از کم ۸ حروف کا ہو۔" : "Password must be at least 8 characters.");
  if (pass !== pass2) return toast(S.lang === "ur" ? "پاس ورڈ ایک جیسے نہیں۔" : "Passwords do not match.");
  if (S.account && S.account.username === username) return toast(S.lang === "ur" ? "یہ یوزر نیم پہلے سے موجود ہے۔" : "An account with that username already exists on this phone.");

  const salt = randomHex(16);
  const pass_hash = await hashSecret(pass, salt);
  const recovery = generateRecoveryCode();
  const recovery_hash = await hashSecret(recovery, salt);

  S.account = { username, salt, pass_hash, recovery_hash, callsign };
  localStorage.setItem(K.account, JSON.stringify(S.account));
  saveProgress({ done: {}, drill: [], checks: [], activity: [] });

  $("rc-code").textContent = recovery;
  $("rc-ack").checked = false;
  $("btn-rc-continue").disabled = true;
  show("s-recovery-show");
};

$("rc-ack").onchange = (e) => { $("btn-rc-continue").disabled = !e.target.checked; };
$("btn-rc-continue").onclick = () => {
  S.session = { username: S.account.username, at: Date.now() };
  localStorage.setItem(K.session, JSON.stringify(S.session));
  enterApp();
};

/* ---------------- sign in ---------------- */
$("btn-signin").onclick = async () => {
  const username = $("si-user").value.trim();
  const pass = $("si-pass").value;
  const wrong = S.lang === "ur" ? "یوزر نیم یا پاس ورڈ غلط ہے۔" : "Username or password is wrong.";
  if (!S.account) return toast(S.lang === "ur" ? "اس فون پر کوئی اکاؤنٹ نہیں۔" : "No account on this phone. Tap 'Create account' first.");
  if (S.account.username !== username) return toast(wrong);
  const h = await hashSecret(pass, S.account.salt);
  if (h !== S.account.pass_hash) return toast(wrong);
  S.session = { username, at: Date.now() };
  localStorage.setItem(K.session, JSON.stringify(S.session));
  enterApp();
};

/* ---------------- recovery ---------------- */
$("btn-recover").onclick = async () => {
  const username = $("rec-user").value.trim();
  const code = $("rec-code").value.trim().toUpperCase();
  const newPass = $("rec-pass").value;
  if (!S.account) return toast(S.lang === "ur" ? "اس فون پر کوئی اکاؤنٹ نہیں۔" : "No account on this phone.");
  if (S.account.username !== username) return toast(S.lang === "ur" ? "یوزر نیم مماثل نہیں۔" : "Username does not match.");
  if (newPass.length < 8) return toast(S.lang === "ur" ? "نیا پاس ورڈ کم از کم ۸ حروف کا ہو۔" : "New password must be at least 8 characters.");
  const h = await hashSecret(code, S.account.salt);
  if (h !== S.account.recovery_hash) return toast(S.lang === "ur" ? "ریکوری کوڈ غلط ہے۔" : "Recovery code is wrong.");
  S.account.pass_hash = await hashSecret(newPass, S.account.salt);
  const newRec = generateRecoveryCode();
  S.account.recovery_hash = await hashSecret(newRec, S.account.salt);
  localStorage.setItem(K.account, JSON.stringify(S.account));

  $("rc-code").textContent = newRec;
  $("rc-ack").checked = false;
  $("btn-rc-continue").disabled = true;
  toast(S.lang === "ur" ? "پاس ورڈ ری سیٹ ہو گیا۔ نیا ریکوری کوڈ محفوظ کریں۔" : "Password reset. Save the new recovery code below.");
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
  [K.account, K.session, K.progress, K.settings, K.onboard].forEach((k) => localStorage.removeItem(k));
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

/* ---------------- HOME ---------------- */
function computeStreak(activity) {
  if (!activity || !activity.length) return 0;
  const days = new Set();
  activity.forEach((a) => {
    const d = new Date(a.at);
    days.add(d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate());
  });
  let streak = 0;
  const now = new Date();
  for (let i = 0; i < 365; i++) {
    const check = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
    const key = check.getFullYear() + "-" + check.getMonth() + "-" + check.getDate();
    if (days.has(key)) streak += 1;
    else if (i === 0) continue;
    else break;
  }
  return streak;
}

function computeHome() {
  const p = loadProgress();
  const modulesDone = Object.keys(p.done).length;
  const modulesTotal = MODULES.length;

  const attempts = (p.drill || []).length;
  const correct = (p.drill || []).filter((a) => a.correct).length;
  const drillPct = attempts ? Math.round((correct / attempts) * 100) : 0;

  const latestCheck = (p.checks || []).length ? p.checks[p.checks.length - 1] : null;
  const devicePart = latestCheck ? latestCheck.score : 0;
  const daysSince = latestCheck ? Math.floor((Date.now() - latestCheck.at) / 86400000) : null;

  const modulePct = modulesTotal ? (modulesDone / modulesTotal) * 100 : 0;
  const learningPart = 0.5 * modulePct + 0.5 * drillPct;
  const score = Math.round(0.6 * devicePart + 0.4 * learningPart);

  let band = "Re-test in 30 days", bandUr = "۳۰ دن میں دوبارہ جانچ";
  if (score >= 85)      { band = "Ready";       bandUr = "تیار"; }
  else if (score >= 70) { band = "Fit";         bandUr = "درست"; }
  else if (score >= 50) { band = "Needs work";  bandUr = "بہتری درکار"; }

  const streak = computeStreak(p.activity);
  const nextLesson = MODULES.find((m) => !p.done[m.code]);

  return { score, band, bandUr, modulesDone, modulesTotal, drillPct, attempts, daysSince, streak, nextLesson, activity: (p.activity || []).slice(0, 4) };
}

function timeAgo(ms) {
  const s = Math.floor((Date.now() - ms) / 1000);
  const ur = S.lang === "ur";
  if (s < 60)     return ur ? "ابھی" : "just now";
  if (s < 3600)   return Math.floor(s / 60) + (ur ? " منٹ" : "m");
  if (s < 86400)  return Math.floor(s / 3600) + (ur ? " گھنٹے" : "h");
  const d = Math.floor(s / 86400);
  if (d < 7)      return d + (ur ? " دن" : "d");
  return Math.floor(d / 7) + (ur ? " ہفتے" : "w");
}

function loadHome() {
  const d = computeHome();
  const ur = S.lang === "ur";
  $("h-score").innerHTML = `${d.score}<span>/100</span>`;
  const band = $("h-band");
  band.textContent = ur ? d.bandUr : d.band;
  band.className = "band " + (d.score >= 85 ? "high" : d.score >= 70 ? "" : d.score >= 50 ? "mid" : "low");
  $("h-mods").textContent = `${d.modulesDone}/${d.modulesTotal}`;
  $("h-drill").textContent = d.attempts ? d.drillPct + "%" : "—";
  $("h-check").textContent = d.daysSince === null ? (ur ? "کبھی نہیں" : "never") : d.daysSince + (ur ? " دن" : "d");
  $("h-call").textContent = S.account?.callsign || S.account?.username || "—";
  const cs = S.account?.callsign || S.account?.username || "";
  $("unitLabel").textContent = ur ? `${cs} · سائن ان` : `${cs} · signed in`;

  // streak tile
  $("h-streak").innerHTML = d.streak + `<small>${ur ? "دن" : "days"}</small>`;

  // next up
  $("h-next").textContent = d.nextLesson
    ? (ur && d.nextLesson.title_ur ? d.nextLesson.title_ur : d.nextLesson.title_en)
    : (ur ? "سب مکمل" : "All done");

  // this week's focus (rotate by ISO week)
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const week = Math.floor((now - start) / (7 * 86400000));
  const focus = WEEKLY_FOCUS[week % WEEKLY_FOCUS.length];
  $("focus-title").textContent = ur ? focus.title_ur : focus.title_en;
  $("focus-title").classList.toggle("ur", ur);
  $("focus-body").textContent = ur ? focus.body_ur : focus.body_en;
  $("focus-body").classList.toggle("ur", ur);

  // activity list
  const list = $("activity-list"); list.innerHTML = "";
  if (!d.activity.length) {
    list.appendChild(el("p", "muted", ur ? "کوئی سرگرمی نہیں۔ آج ایک سبق سے شروع کریں۔" : "No activity yet. Start with a lesson today."));
  } else {
    d.activity.forEach((a) => {
      const row = el("div", "activity-item");
      const badge = el("div", "badge " + a.type);
      badge.innerHTML = a.type === "lesson"
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5h7v15H4z"/><path d="M13 5h7v15h-7z"/></svg>'
        : a.type === "drill"
          ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>'
          : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M9 12l2 2 4-4"/></svg>';
      const middle = el("div"); middle.style.flex = "1";
      let label = "";
      if (a.type === "lesson") {
        const m = MODULES.find((m) => m.code === a.code);
        label = (ur ? "سبق: " : "Lesson: ") + (m ? (ur && m.title_ur ? m.title_ur : m.title_en) : a.code);
      } else if (a.type === "drill") {
        label = (ur ? "مشق راؤنڈ: " : "Drill round: ") + a.score + "/" + a.total;
      } else if (a.type === "check") {
        label = (ur ? "فون چیک: " : "Phone check: ") + a.score + "/100";
      }
      middle.appendChild(el("div", "label" + (ur ? " ur" : ""), label));
      const when = el("div", "when", timeAgo(a.at));
      row.append(badge, middle, when);
      list.appendChild(row);
    });
  }
}

$("btn-panic").onclick = () => {
  show("s-report");
  toast(S.lang === "ur"
    ? "رقم نہ دیں۔ کچھ حذف نہ کریں۔ اسکرین شاٹ لیں۔"
    : "Do not pay. Do not delete anything. Screenshot everything.");
};

/* ---------------- LEARN ---------------- */
/* Lesson categories inferred from module code for grouping chips. */
const CATEGORIES = [
  { id: "all",    en: "All",           ur: "سب" },
  { id: "opsec",  en: "OPSEC",         ur: "اوپ سیک",  codes: ["hia_targeting", "elicitation", "uniform_online", "documents"] },
  { id: "device", en: "Device",        ur: "ڈیوائس",   codes: ["usb_removable", "official_equipment", "phone_tapping"] },
  { id: "comms",  en: "Communications", ur: "مواصلات", codes: ["otp_shared", "whatsapp_lock", "honeytrap_military"] },
  { id: "family", en: "Family",        ur: "خاندان",   codes: ["family_rules_military", "sextortion_response"] },
];

let currentCategory = "all";

function loadLearn() {
  const chipRow = $("learn-chips"); chipRow.innerHTML = "";
  const ur = S.lang === "ur";
  CATEGORIES.forEach((c) => {
    const chip = el("button", "chip" + (c.id === currentCategory ? " on" : ""), ur ? c.ur : c.en);
    chip.type = "button";
    chip.onclick = () => { currentCategory = c.id; loadLearn(); };
    chipRow.appendChild(chip);
  });

  const list = $("learn-list"); list.innerHTML = "";
  const p = loadProgress();
  const cat = CATEGORIES.find((c) => c.id === currentCategory);
  const items = currentCategory === "all"
    ? MODULES
    : MODULES.filter((m) => cat.codes && cat.codes.includes(m.code));

  items.forEach((m, i) => {
    const done = !!p.done[m.code];
    const c = el("div", "card tap" + (done ? " done" : ""));
    c.tabIndex = 0;
    const idx = MODULES.indexOf(m);
    c.appendChild(el("span", "eyebrow", (ur ? "سبق " : "Lesson ") + String(idx + 1).padStart(2, "0")));
    c.appendChild(el("h3", ur ? "ur" : "", ur && m.title_ur ? m.title_ur : m.title_en));
    c.appendChild(el("p", ur ? "ur" : "", ur && m.summary_ur ? m.summary_ur : m.summary_en));
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
  const btn = $("btn-take-quiz");
  const hasQuiz = !!QUIZZES[code];
  if (done) {
    btn.textContent = ur ? "دوبارہ جانچ لیں" : "Retake quick check";
    btn.className = "ghost";
  } else if (!hasQuiz) {
    btn.textContent = ur ? "مکمل نشان زد کریں" : "Mark as done";
    btn.className = "";
  } else {
    btn.textContent = ur ? "مختصر جانچ لیں (۲ سوال)" : "Take the quick check (2 questions)";
    btn.className = "";
  }
  btn.onclick = () => {
    if (!hasQuiz) {
      const pp = loadProgress();
      pp.done[code] = Date.now();
      saveProgress(pp);
      pushActivity("lesson", { code });
      toast(ur ? "سبق مکمل۔" : "Lesson marked done.");
      show("s-learn");
      return;
    }
    startQuiz(code);
  };
  show("s-module");
}

/* ---------------- QUIZ ---------------- */
function startQuiz(code) {
  S.quizModule = code;
  S.quizIdx = 0;
  S.quizScore = 0;
  show("s-quiz");
}

$("btn-quiz-back").onclick = () => {
  if (currentModule) openModule(currentModule);
  else show("s-learn");
};

function renderQuizQ() {
  const questions = QUIZZES[S.quizModule];
  const ur = S.lang === "ur";
  const area = $("quiz-area"); area.innerHTML = "";
  $("quiz-count").textContent = (ur ? "سوال " : "Q ") + Math.min(S.quizIdx + 1, questions.length) + "/" + questions.length;
  $("quiz-bar").style.width = ((S.quizIdx / questions.length) * 100) + "%";
  $("quiz-score").textContent = S.quizScore + "/" + questions.length;

  if (S.quizIdx >= questions.length) return renderQuizResult();

  const q = questions[S.quizIdx];
  const wrap = el("div", "quiz-q");
  wrap.appendChild(el("div", "q" + (ur ? " ur" : ""), ur ? q.q_ur : q.q_en));
  const opts = ur ? q.options_ur : q.options_en;
  opts.forEach((opt, i) => {
    const b = el("button", "quiz-opt" + (ur ? " ur" : ""), opt);
    b.type = "button";
    b.onclick = () => answerQuiz(q, i, wrap);
    wrap.appendChild(b);
  });
  area.appendChild(wrap);
}

function answerQuiz(q, chosen, wrap) {
  const ur = S.lang === "ur";
  const buttons = wrap.querySelectorAll(".quiz-opt");
  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === q.correct_idx) b.classList.add("correct");
    if (i === chosen && i !== q.correct_idx) b.classList.add("wrong");
  });
  if (chosen === q.correct_idx) S.quizScore += 1;

  const exp = el("div", "muted" + (ur ? " ur" : ""), ur ? q.explain_ur : q.explain_en);
  exp.style.marginTop = "10px";
  wrap.appendChild(exp);

  const next = el("button", "", ur ? (S.quizIdx + 1 === QUIZZES[S.quizModule].length ? "نتیجہ دیکھیں" : "اگلا سوال") : (S.quizIdx + 1 === QUIZZES[S.quizModule].length ? "See result" : "Next question"));
  next.style.marginTop = "12px";
  next.onclick = () => { S.quizIdx += 1; renderQuizQ(); };
  wrap.appendChild(next);
  $("quiz-score").textContent = S.quizScore + "/" + QUIZZES[S.quizModule].length;
}

function renderQuizResult() {
  const ur = S.lang === "ur";
  const total = QUIZZES[S.quizModule].length;
  const passed = S.quizScore === total;
  const area = $("quiz-area"); area.innerHTML = "";
  $("quiz-bar").style.width = "100%";

  const r = el("div", "quiz-result " + (passed ? "pass" : "fail"));
  r.appendChild(el("span", "eyebrow", ur ? "نتیجہ" : "Result"));
  r.appendChild(el("div", "big", S.quizScore + "/" + total));
  r.appendChild(el("div", "msg" + (ur ? " ur" : ""), passed
    ? (ur ? "شاندار۔ سبق مکمل نشان زد ہو گیا۔" : "Excellent — lesson marked done.")
    : (ur ? "قریب — سبق دوبارہ دیکھیں اور دوبارہ جانچ لیں۔" : "Close — re-read the lesson and try again.")));
  area.appendChild(r);

  if (passed) {
    const p = loadProgress();
    if (!p.done[S.quizModule]) {
      p.done[S.quizModule] = Date.now();
      saveProgress(p);
      pushActivity("lesson", { code: S.quizModule, quiz_score: S.quizScore, quiz_total: total });
    }
  }

  const pair = el("div", "pair");
  pair.style.marginTop = "12px";
  const retry = el("button", "ghost", ur ? "دوبارہ کوشش" : "Try again");
  retry.onclick = () => { S.quizIdx = 0; S.quizScore = 0; renderQuizQ(); };
  const back = el("button", "", ur ? "اسباق پر واپس" : "Back to lessons");
  back.onclick = () => show("s-learn");
  pair.append(retry, back);
  area.appendChild(pair);
}

/* ---------------- DRILL (5-card rounds) ---------------- */
function loadDrill() {
  const ur = S.lang === "ur";
  const area = $("drill-area"); area.innerHTML = "";

  if (!S.drillOrder.length || S.drillIdx >= S.drillOrder.length) {
    S.drillOrder = SCENARIOS.map((_, i) => i);
    for (let i = S.drillOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [S.drillOrder[i], S.drillOrder[j]] = [S.drillOrder[j], S.drillOrder[i]];
    }
    S.drillIdx = 0;
    S.drillRoundStart = 0;
    S.drillRoundCorrect = 0;
  }

  const inRound = S.drillIdx - S.drillRoundStart;
  if (inRound >= S.drillRoundSize) return renderDrillScorecard();

  renderDrillCard();
  updateDrillProgress();
}

function updateDrillProgress() {
  const ur = S.lang === "ur";
  const inRound = S.drillIdx - S.drillRoundStart;
  $("drill-count").textContent = (ur ? "کارڈ " : "Card ") + Math.min(inRound + 1, S.drillRoundSize) + "/" + S.drillRoundSize;
  $("drill-score").textContent = S.drillRoundCorrect + "/" + S.drillRoundSize;
  $("drill-bar").style.width = ((inRound / S.drillRoundSize) * 100) + "%";
  $("drill-header").style.display = "flex";
}

function renderDrillCard() {
  const area = $("drill-area"); area.innerHTML = "";
  const c = SCENARIOS[S.drillOrder[S.drillIdx]];
  const ur = S.lang === "ur";
  const wrap = el("div", "drill");
  wrap.appendChild(el("span", "kind", c.kind));
  wrap.appendChild(el("div", "from", c.sender || c.kind));
  wrap.appendChild(el("div", "bubble" + (ur ? " ur" : ""), ur && c.content_ur ? c.content_ur : c.content_en));
  area.appendChild(wrap);
  const pair = el("div", "pair");
  const good = el("button", "ghost", ur ? "اصلی" : "Genuine");
  const bad  = el("button", "danger", ur ? "مشکوک" : "Suspicious");
  good.onclick = () => answerDrill(c, true);
  bad.onclick  = () => answerDrill(c, false);
  pair.append(good, bad);
  area.appendChild(pair);
}

function answerDrill(card, saidGenuine) {
  const correct = card.is_genuine === saidGenuine;
  const p = loadProgress();
  p.drill = p.drill || [];
  p.drill.push({ id: card.id, correct, at: Date.now() });
  saveProgress(p);
  if (correct) S.drillRoundCorrect += 1;

  const ur = S.lang === "ur";
  const area = $("drill-area");
  area.querySelectorAll(".pair button").forEach((b) => (b.disabled = true));
  const v = el("div", "verdict " + (correct ? "right" : "wrong"));
  v.appendChild(el("b", "", correct ? (ur ? "درست" : "Correct") : (ur ? "غلط" : "Not quite")));
  v.appendChild(el("div", ur ? "ur" : "", ur && card.explanation_ur ? card.explanation_ur : card.explanation_en));
  area.appendChild(v);
  const next = el("button", "", (S.drillIdx - S.drillRoundStart + 1 === S.drillRoundSize) ? (ur ? "راؤنڈ ختم" : "End of round") : (ur ? "اگلا کارڈ" : "Next card"));
  next.onclick = () => { S.drillIdx += 1; loadDrill(); };
  area.appendChild(next);
  v.scrollIntoView({ behavior: "smooth", block: "center" });
  updateDrillProgress();
}

function renderDrillScorecard() {
  const ur = S.lang === "ur";
  const area = $("drill-area"); area.innerHTML = "";
  $("drill-header").style.display = "none";

  const score = S.drillRoundCorrect;
  const p = loadProgress();
  pushActivity("drill", { score, total: S.drillRoundSize });

  const totalAttempts = (p.drill || []).length;
  const totalCorrect = (p.drill || []).filter((a) => a.correct).length;
  const overallPct = totalAttempts ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

  const card = el("div", "session-card");
  card.appendChild(el("span", "eyebrow", ur ? "راؤنڈ مکمل" : "Round complete"));
  card.appendChild(el("div", "big", score + "/" + S.drillRoundSize));
  card.appendChild(el("div", "msg" + (ur ? " ur" : ""), score >= 4
    ? (ur ? "بہت خوب — درست پہچان۔" : "Sharp eye — well done.")
    : score >= 2
      ? (ur ? "قابلِ بہتری — مشق جاری رکھیں۔" : "Keep going — practice sharpens judgement.")
      : (ur ? "پھر کوشش کریں۔ ہر کارڈ کی وضاحت پڑھیں۔" : "Try again. Read each card's explanation.")));
  const row = el("div", "row");
  const overall = el("div");
  overall.appendChild(el("div", "k", ur ? "کل درستگی" : "Overall"));
  overall.appendChild(el("div", "v", overallPct + "%"));
  const attempts = el("div");
  attempts.appendChild(el("div", "k", ur ? "کل مشقیں" : "Total"));
  attempts.appendChild(el("div", "v", String(totalAttempts)));
  row.append(overall, attempts);
  card.appendChild(row);
  area.appendChild(card);

  const pair = el("div", "pair");
  const again = el("button", "", ur ? "اگلا راؤنڈ" : "Next round");
  again.onclick = () => {
    S.drillRoundStart = S.drillIdx;
    S.drillRoundCorrect = 0;
    loadDrill();
  };
  const done = el("button", "ghost", ur ? "ہوم" : "Home");
  done.onclick = () => show("s-home");
  pair.append(again, done);
  area.appendChild(pair);
}

/* ---------------- CHECK ---------------- */
function howFor(c, ur) {
  const brandPath = c.paths && c.paths[S.brand];
  if (brandPath) return ur ? brandPath.ur : brandPath.en;
  return ur ? c.how_ur : c.how_en;
}

function populateBrands() {
  const sel = $("brand-select");
  if (!sel) return;
  if (!sel.dataset.filled) {
    BRANDS.forEach((b) => {
      const opt = document.createElement("option");
      opt.value = b.id;
      opt.dataset.en = b.label_en;
      opt.dataset.ur = b.label_ur;
      opt.textContent = S.lang === "ur" ? b.label_ur : b.label_en;
      sel.appendChild(opt);
    });
    sel.value = S.brand;
    sel.dataset.filled = "1";
    sel.onchange = () => {
      S.brand = sel.value;
      localStorage.setItem(K.brand, S.brand);
      loadChecklist();
    };
  } else {
    Array.from(sel.options).forEach((o) => {
      if (o.dataset.en) o.textContent = S.lang === "ur" ? o.dataset.ur : o.dataset.en;
    });
  }
}

function renderCheckHistory() {
  const box = $("check-history"); box.innerHTML = "";
  const p = loadProgress();
  const history = (p.checks || []).slice(-3).reverse();
  if (!history.length) return;
  const ur = S.lang === "ur";
  const card = el("div", "history-card");
  card.appendChild(el("span", "eyebrow", ur ? "حالیہ نتائج" : "Recent results"));
  history.forEach((h) => {
    const row = el("div", "history-row");
    row.appendChild(el("div", "dot " + (h.band === "green" ? "" : h.band)));
    const d = new Date(h.at);
    const dateStr = d.toISOString().slice(0, 10);
    row.appendChild(el("div", "date", dateStr));
    const score = el("div", "score", String(h.score));
    score.appendChild(el("small", "", "/100"));
    row.appendChild(score);
    card.appendChild(row);
  });
  box.appendChild(card);
}

function loadChecklist() {
  populateBrands();
  renderCheckHistory();
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
    const how = el("div", "how" + (ur ? " ur" : ""), howFor(c, ur));
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
      findings.push({ id: c.id, title: ur ? c.title_ur : c.title_en, severity: c.severity, advice: howFor(c, ur) });
    }
  });
  score = Math.max(0, score);
  let band = "green";
  if (findings.some((f) => f.severity === "critical")) band = "red";
  else if (score < 70 || findings.length) band = "amber";

  const p = loadProgress();
  p.checks = p.checks || [];
  p.checks.push({ score, band, at: Date.now(), findings: findings.map((f) => f.id) });
  saveProgress(p);
  pushActivity("check", { score, band });

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
  toast(ur ? "جانچ محفوظ ہو گئی۔" : "Check saved.");
  renderCheckHistory();
};

/* ---------------- GLOSSARY ---------------- */
function loadGlossary() {
  const list = $("glossary-list"); list.innerHTML = "";
  const ur = S.lang === "ur";
  GLOSSARY.slice().sort((a, b) => a.term_en.localeCompare(b.term_en)).forEach((g) => {
    const item = el("div", "glossary-item");
    const head = el("div");
    head.appendChild(el("span", "term", ur ? g.term_ur : g.term_en));
    head.appendChild(el("span", "term-ur", ur ? g.term_en : g.term_ur));
    item.appendChild(head);
    item.appendChild(el("div", "def" + (ur ? " ur" : ""), ur ? g.def_ur : g.def_en));
    list.appendChild(item);
  });
}

/* ---------------- REPORT screen contacts ---------------- */
function renderReportContacts() {
  const box = $("report-contacts"); box.innerHTML = "";
  const s = loadSettings();
  const ur = S.lang === "ur";
  ["nco", "family", "hotline"].forEach((k) => {
    const c = s.contacts[k];
    const card = el("div", "card");
    card.appendChild(el("span", "eyebrow", ur ? c.label_ur : c.label_en));
    card.appendChild(el("h3", "", c.num || "—"));
    box.appendChild(card);
  });
}

/* ---------------- SETTINGS ---------------- */
$("btn-settings").onclick = () => show("s-settings");
$("btn-logout").onclick = signOut;
$("btn-wipe").onclick = wipeApp;

function openSettings() {
  const s = loadSettings();
  $("set-callsign").value = S.account?.callsign || "";
  $("ct-nco-label").value = s.contacts.nco.label_en;
  $("ct-nco-num").value   = s.contacts.nco.num;
  $("ct-fam-label").value = s.contacts.family.label_en;
  $("ct-fam-num").value   = s.contacts.family.num;
  $("ct-hot-label").value = s.contacts.hotline.label_en;
  $("ct-hot-num").value   = s.contacts.hotline.num;
  document.querySelectorAll(".size-pair button").forEach((b) => {
    b.classList.toggle("on", b.dataset.size === s.text_size);
  });
}

document.querySelectorAll(".size-pair button").forEach((b) => {
  b.onclick = () => {
    const s = loadSettings();
    s.text_size = b.dataset.size;
    saveSettings(s);
    applyTextSize(s.text_size);
    openSettings();
    toast(S.lang === "ur" ? "متن کا سائز محفوظ ہو گیا۔" : "Text size saved.");
  };
});

$("btn-save-callsign").onclick = () => {
  if (!S.account) return;
  S.account.callsign = $("set-callsign").value.trim();
  localStorage.setItem(K.account, JSON.stringify(S.account));
  toast(S.lang === "ur" ? "کال سائن محفوظ کر لیا۔" : "Callsign saved.");
  const cs = S.account.callsign || S.account.username;
  $("unitLabel").textContent = S.lang === "ur" ? `${cs} · سائن ان` : `${cs} · signed in`;
};

$("btn-save-contacts").onclick = () => {
  const s = loadSettings();
  s.contacts.nco.label_en    = $("ct-nco-label").value.trim() || DEFAULT_CONTACTS.nco.label_en;
  s.contacts.nco.label_ur    = s.contacts.nco.label_en;
  s.contacts.nco.num         = $("ct-nco-num").value.trim();
  s.contacts.family.label_en = $("ct-fam-label").value.trim() || DEFAULT_CONTACTS.family.label_en;
  s.contacts.family.label_ur = s.contacts.family.label_en;
  s.contacts.family.num      = $("ct-fam-num").value.trim();
  s.contacts.hotline.label_en= $("ct-hot-label").value.trim() || DEFAULT_CONTACTS.hotline.label_en;
  s.contacts.hotline.label_ur= s.contacts.hotline.label_en;
  s.contacts.hotline.num     = $("ct-hot-num").value.trim();
  saveSettings(s);
  toast(S.lang === "ur" ? "رابطے محفوظ ہو گئے۔" : "Contacts saved.");
};

/* ---------------- boot ---------------- */
applyLang();
applyTextSize(loadSettings().text_size);

const onboardDone = localStorage.getItem(K.onboard);
if (!onboardDone) {
  $("s-onboarding").style.display = "flex";
  $("topbar").style.display = "none";
  $("tabs").style.display = "none";
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("on"));
  showSlide(0);
} else if (S.account && S.session) {
  enterApp();
} else {
  $("tabs").style.display = "none";
  show(S.account ? "s-signin" : "s-signup");
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
