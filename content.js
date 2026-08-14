/* Cyber Shield — bundled content for service members and their families.
   Lessons, drill scenarios, phone brands, and device checks.
   All English + Urdu. Edit here — nothing on the server. */

/* ---------------- LESSONS ---------------- */
const MODULES = [
  {
    code: "hia_targeting",
    title_en: "How HIA identifies and targets you",
    title_ur: "دشمن انٹیلی جنس آپ کو کیسے نشانہ بناتی ہے",
    summary_en: "Targeting is a system, not a coincidence. Understand the pipeline.",
    summary_ur: "نشانہ بنانا اتفاق نہیں، ایک منظم عمل ہے۔ اس کے مراحل سمجھیں۔",
    body_en:
      "Hostile intelligence agencies do not pick soldiers at random. There is a pipeline, and every part of it can be shut down at your end.\n\n" +
      "1. SPOTTING. Public profile photos in uniform, unit WhatsApp groups shared by mistake, tagged photos of parades, LinkedIn CVs listing a formation or a course, an old school-group where someone mentions your posting — this is where names get onto a list.\n\n" +
      "2. ASSESSING. Once on the list, they read every public post you and your family have made. What is your rank? Which sub-unit? Any hint of a grievance? A financial pressure? A recent divorce? A sick parent? A gambling habit? A child in Europe? Every human pressure point is a lever.\n\n" +
      "3. APPROACHING. A message, a friend request, a call, a job offer, a woman on Instagram, an old classmate suddenly back in touch. The approach fits what they learned about you in step 2. It is designed to feel plausible, not shocking.\n\n" +
      "4. DEVELOPING. Weeks of ordinary contact with no ask, so that when the ask comes it feels like a small favour between people who know each other.\n\n" +
      "5. TASKING. A specific request. Sometimes a photo, sometimes a document, sometimes just a piece of information you would normally give a colleague. Once you comply once, they own you.\n\n" +
      "WHAT THIS MEANS FOR YOU: assume that everything you and your family put online is read by a professional analyst on the other side. The single most effective counter is starving step 1 — no uniform in public photos, no formation on LinkedIn, no unit hashtags, no unit WhatsApp groups on public settings.",
    body_ur:
      "دشمن ایجنسیاں فوجیوں کو اتفاقاً نہیں چنتیں۔ ایک باقاعدہ سلسلہ ہوتا ہے، اور اس کا ہر حصہ آپ اپنی طرف سے روک سکتے ہیں۔\n\n" +
      "۱۔ نشاندہی: وردی والی پبلک پروفائل تصاویر، غلطی سے شیئر ہوئے یونٹ کے واٹس ایپ گروپ، پریڈ کی ٹیگ شدہ تصاویر، لنکڈ ان پر یونٹ یا کورس کی تفصیل، پرانا اسکول گروپ جہاں کوئی آپ کی تعیناتی بتا دے — نام یہاں سے فہرست پر آتے ہیں۔\n\n" +
      "۲۔ جائزہ: فہرست میں آنے کے بعد آپ اور آپ کے گھر والوں کی ہر پبلک پوسٹ پڑھی جاتی ہے۔ عہدہ کیا ہے؟ سب یونٹ کون سی؟ کوئی شکایت؟ مالی دباؤ؟ حالیہ طلاق؟ بیمار والدین؟ جوئے کی عادت؟ بچہ یورپ میں؟ ہر انسانی کمزوری ایک راستہ ہے۔\n\n" +
      "۳۔ رابطہ: پیغام، فرینڈ ریکویسٹ، کال، نوکری کی پیشکش، انسٹاگرام پر خاتون، اچانک واپس آنے والا پرانا کلاس فیلو۔ رابطہ اس معلومات کے مطابق ہوتا ہے جو دوسرے مرحلے میں جمع ہوئی۔ یہ حیران کن نہیں، قابلِ یقین دکھایا جاتا ہے۔\n\n" +
      "۴۔ تعلق سازی: کئی ہفتوں کا عام رابطہ بغیر کسی مطالبے کے، تاکہ جب مطالبہ آئے تو دو جاننے والوں کے درمیان چھوٹی سی مدد لگے۔\n\n" +
      "۵۔ ٹاسکنگ: ایک مخصوص درخواست — کبھی تصویر، کبھی دستاویز، کبھی وہ معلومات جو آپ عام طور پر ساتھی کو دے دیتے ہیں۔ ایک بار مان لیا تو وہ آپ کو اپنے قابو میں لے لیتے ہیں۔\n\n" +
      "آپ کے لیے مطلب: فرض کریں کہ آپ اور گھر والوں کی ہر آن لائن چیز دوسری طرف ایک پیشہ ور تجزیہ کار پڑھ رہا ہے۔ سب سے مؤثر جواب پہلے مرحلے کو ختم کرنا ہے — کوئی پبلک وردی تصویر نہیں، لنکڈ ان پر یونٹ کا ذکر نہیں، یونٹ کے ہیش ٹیگ نہیں، یونٹ کے پبلک واٹس ایپ گروپ نہیں۔",
  },

  {
    code: "elicitation",
    title_en: "Elicitation — how they extract information without asking",
    title_ur: "معلومات نکالنے کا فن — بغیر پوچھے سب کچھ حاصل کرنا",
    summary_en: "The best intelligence questions never sound like questions.",
    summary_ur: "بہترین انٹیلی جنس سوال کبھی سوال جیسا نہیں لگتا۔",
    body_en:
      "Elicitation is professional conversation designed to make you volunteer information you would refuse to give if it were asked directly. It works because it exploits normal human instincts: to correct someone, to help, to prove you know more, to complete a sentence someone else started.\n\n" +
      "COMMON TECHNIQUES YOU WILL MEET:\n" +
      "- The provocative wrong statement: 'I heard your unit is being moved to Quetta next month.' You correct them. You just confirmed a location.\n" +
      "- Flattery: 'Sir a man of your seniority must have handled exercises like this many times.' You explain. You just described capability.\n" +
      "- The naive question: 'These new radios are so complex, how does the encryption even work?' You explain to look knowledgeable. You just described a system.\n" +
      "- Assumed shared knowledge: 'Yeah those American manuals are always outdated, right?' You agree or correct. You just confirmed what you train on.\n" +
      "- The complaint: 'My cousin says his unit's rations are terrible. Yours must be the same.' You defend or agree. You just described logistics.\n\n" +
      "WHERE IT HAPPENS: weddings, wagons, taxi stands, hotel lobbies, gyms, LinkedIn DMs, WhatsApp introductions, casual chat with a foreign spouse at a family gathering. Anywhere that feels informal is the whole point.\n\n" +
      "THE RULE: outside of duty, there is no such thing as talking generally about your work. If a stranger — or a friend of a friend — steers a conversation toward your work, change the topic and leave the conversation. You do not owe anyone an explanation of your job.",
    body_ur:
      "معلومات نکالنے کا فن (Elicitation) وہ پیشہ ورانہ گفتگو ہے جو آپ سے وہ باتیں کہلوا لیتی ہے جو براہِ راست پوچھی جائیں تو آپ کبھی نہ بتائیں۔ یہ اس لیے کام کرتی ہے کہ انسانی فطرت کا فائدہ اٹھاتی ہے — کسی کی غلط بات درست کرنا، مدد کرنا، اپنی معلومات دکھانا، ادھوری بات مکمل کرنا۔\n\n" +
      "عام طریقے:\n" +
      "- اشتعال انگیز غلط جملہ: 'سنا ہے آپ کی یونٹ اگلے مہینے کوئٹہ جا رہی ہے۔' آپ درست کرتے ہیں — تعیناتی کی تصدیق ہو گئی۔\n" +
      "- تعریف: 'سر آپ جیسے سینئر افسر نے تو یہ مشقیں کئی بار کی ہوں گی۔' آپ سمجھاتے ہیں — صلاحیت بتا دی۔\n" +
      "- سادہ لوح سوال: 'یہ نئے ریڈیو بہت پیچیدہ ہیں، ان کی انکرپشن کیسے چلتی ہے؟' آپ علم دکھانے کو سمجھاتے ہیں — نظام بتا دیا۔\n" +
      "- فرض شدہ مشترکہ علم: 'وہ امریکی مینوئل تو ہمیشہ پرانے ہوتے ہیں، ہے نا؟' آپ اتفاق کرتے ہیں یا اصلاح — تربیت کا ذریعہ بتا دیا۔\n" +
      "- شکوہ: 'بھائی کہتے ہیں یونٹ کا کھانا بہت خراب ہے۔ آپ کے ہاں بھی ایسا ہو گا۔' آپ صفائی دیتے یا اتفاق کرتے ہیں — لاجسٹکس بتا دی۔\n\n" +
      "کہاں ہوتا ہے: شادیاں، ویگنیں، ٹیکسی اسٹینڈ، ہوٹل لابی، جم، لنکڈ ان کے پیغامات، واٹس ایپ پر تعارف، فیملی محفل میں کسی غیر ملکی مہمان سے گپ شپ۔ جو جگہ جتنی غیر رسمی لگے، مقصد اتنا ہی گہرا ہو سکتا ہے۔\n\n" +
      "اصول: ڈیوٹی سے باہر 'عمومی بات چیت' جیسی کوئی چیز نہیں ہوتی۔ اجنبی یا دوست کا دوست بات کو آپ کے کام کی طرف موڑے تو موضوع بدلیں اور اٹھ کر چلے جائیں۔ کسی کو اپنی نوکری کی وضاحت دینے کی ضرورت نہیں۔",
  },

  {
    code: "honeytrap_military",
    title_en: "Honey trap — a full intelligence operation on you",
    title_ur: "ہنی ٹریپ — آپ پر مکمل انٹیلی جنس آپریشن",
    summary_en: "It is never romance. It is a four-stage HIA operation with a budget and a case officer.",
    summary_ur: "یہ محبت نہیں۔ چار مراحل کا آپریشن ہے جس کا بجٹ اور کیس آفیسر مقرر ہوتا ہے۔",
    body_en:
      "A honey trap targeting a service member is not a chance meeting. It is a resourced operation with a case officer, an account team, and a target folder that has your name on it.\n\n" +
      "1. SPOTTING. Found via a public uniform photo, a unit hashtag, a tagged photo at a wedding, or a friend-of-a-friend request accepted without thought.\n\n" +
      "2. APPROACH. A new account, usually female, usually attractive, usually with few photos and a recently created profile. The opening is engineered to feel harmless — a wrong number, a shared interest, sudden admiration for the army, a comment on your parent's Facebook post about your success.\n\n" +
      "3. BONDING. Weeks of ordinary conversation. No questions about work. This stage is designed to make step 4 feel like a moment between people who know each other. They will move you off the public platform onto WhatsApp, then onto a video call.\n\n" +
      "4. HOOK. One compromising photo, one video call that is recorded, or one small piece of information — the location of your last exercise, the type of vehicle in your unit, the name of your CO. After that the tone changes completely, and the demands never stop at one.\n\n" +
      "THE TELLS (memorise these):\n" +
      "- Account created recently, very few tagged photos, few genuine mutual contacts.\n" +
      "- Photos that look professional or reverse-search to someone else on Google Lens.\n" +
      "- Pushes hard to move you to a private app.\n" +
      "- Avoids ordinary video calls early, but insists on one later.\n" +
      "- Asks what you do, where you are posted, when you are on duty.\n" +
      "- Displays sudden pride in the army, or a strong opinion about defence matters.\n\n" +
      "IF IT HAPPENS: stop replying. Do not delete the chat — it is evidence. Screenshot everything. Report it the same day to the unit cyber contact. Under the amnesty policy, reporting within 72 hours means support, not punishment. The people who get destroyed by this are the ones who stayed silent — not the ones who got approached.",
    body_ur:
      "کسی فوجی کو نشانہ بنانے والا ہنی ٹریپ اتفاقی ملاقات نہیں ہوتا۔ یہ ایک منظم آپریشن ہے جس کا کیس آفیسر، اکاؤنٹ ٹیم، اور ٹارگٹ فولڈر ہوتا ہے جس پر آپ کا نام ہوتا ہے۔\n\n" +
      "۱۔ نشاندہی: پبلک وردی تصویر، یونٹ کے ہیش ٹیگ، شادی کی ٹیگ شدہ تصویر، یا بغیر سوچے قبول کی گئی فرینڈ ریکویسٹ سے۔\n\n" +
      "۲۔ رابطہ: نیا اکاؤنٹ، اکثر خاتون کے نام سے، کم تصاویر، حال میں بنایا گیا۔ آغاز بے ضرر رکھا جاتا ہے — غلط نمبر، مشترکہ دلچسپی، فوج کی اچانک تعریف، یا آپ کے والد کی فیس بک پوسٹ پر تبصرہ۔\n\n" +
      "۳۔ تعلق سازی: کئی ہفتے عام گفتگو، کام کے بارے میں کوئی سوال نہیں۔ مقصد یہ ہے کہ چوتھا مرحلہ 'جاننے والوں کے درمیان چھوٹی سی بات' لگے۔ آپ کو پبلک ایپ سے واٹس ایپ اور پھر ویڈیو کال پر لایا جاتا ہے۔\n\n" +
      "۴۔ پھندا: ایک قابلِ اعتراض تصویر، ایک ریکارڈ شدہ ویڈیو کال، یا ایک چھوٹی سی معلومات — آپ کی آخری مشق کی جگہ، یونٹ کی گاڑی کا نمونہ، سی او کا نام۔ اس کے بعد لہجہ بدل جاتا ہے، اور مطالبات کبھی ایک پر نہیں رکتے۔\n\n" +
      "علامات (یاد کر لیں):\n" +
      "- نیا اکاؤنٹ، ٹیگ شدہ تصاویر بہت کم، مشترکہ اصلی رابطے کم۔\n" +
      "- پیشہ ورانہ لگتی تصاویر، یا گوگل لینز پر کسی اور کی نکل آئیں۔\n" +
      "- نجی ایپ پر آنے پر زور۔\n" +
      "- ابتدا میں عام ویڈیو کال سے گریز، بعد میں اصرار۔\n" +
      "- ڈیوٹی، تعیناتی، اور کام کے وقت کے سوالات۔\n" +
      "- فوج کے لیے اچانک محبت یا دفاعی معاملات پر مضبوط رائے۔\n\n" +
      "اگر ہو جائے: جواب دینا بند کریں۔ چیٹ حذف نہ کریں — یہ ثبوت ہے۔ اسکرین شاٹ لیں۔ اسی دن یونٹ کے سائبر رابطہ کار کو اطلاع دیں۔ ۷۲ گھنٹے کے اندر اطلاع دینے پر معافی کی پالیسی کے تحت مدد ملے گی، سزا نہیں۔ نقصان ان کا ہوتا ہے جو خاموش رہتے ہیں، نہ کہ ان کا جن سے رابطہ ہوا۔",
  },

  {
    code: "documents",
    title_en: "Photographing classified or restricted documents",
    title_ur: "خفیہ یا محدود دستاویزات کی تصویر کشی",
    summary_en: "The photo is the leak. There is no such thing as a photo for personal use only.",
    summary_ur: "تصویر ہی افشا ہے۔ 'صرف اپنے استعمال کے لیے' جیسی کوئی چیز نہیں ہوتی۔",
    body_en:
      "The single biggest cause of document leaks from serving personnel is not espionage. It is the personal camera roll. A soldier photographs a page 'to read later', that photo syncs to Google Photos or iCloud, the account is later compromised or the phone is lost, and the document is now on the open market.\n\n" +
      "THE RULES ARE ABSOLUTE:\n" +
      "1. Never photograph a classified, restricted, or 'for official use only' document with a personal phone. Never. There is no exception for study, revision, or convenience.\n" +
      "2. Never place an official document on a desk with anything else visible around it — badges, name tags, unit signage — even for a photo you intend to delete.\n" +
      "3. Never store a photograph of a document in your gallery, WhatsApp media folder, or notes app, even 'temporarily'.\n" +
      "4. Never send an official document by WhatsApp, email, or personal cloud. Not to yourself, not to a colleague, not to your senior.\n\n" +
      "WHY IT MATTERS: photos on your phone are backed up automatically to a cloud you may have forgotten you set up years ago. Deleting the photo from the phone does not delete it from the cloud. Anyone who later gets into that cloud account gets the document.\n\n" +
      "IF YOU HAVE PHOTOS OF OFFICIAL MATERIAL RIGHT NOW: hand the phone to the unit cyber cell today. Do not delete first — deletion often leaves a recoverable copy and also destroys the record of what was on the device. Under the amnesty policy, disclosing a past mistake is safer than being caught with it later.",
    body_ur:
      "حاضر سروس اہلکاروں سے سرکاری دستاویزات لیک ہونے کی سب سے بڑی وجہ جاسوسی نہیں، ذاتی گیلری ہے۔ ایک فوجی 'بعد میں پڑھنے کے لیے' صفحہ کی تصویر لیتا ہے، وہ گوگل فوٹوز یا آئی کلاؤڈ سے خودکار طور پر جڑ جاتی ہے، اکاؤنٹ ہیک ہوتا ہے یا فون گم ہوتا ہے، اور دستاویز مارکیٹ میں آ جاتی ہے۔\n\n" +
      "قواعد قطعی ہیں:\n" +
      "۱۔ ذاتی فون سے کسی خفیہ، محدود، یا 'برائے سرکاری استعمال' دستاویز کی تصویر ہرگز نہ لیں۔ کوئی استثنا نہیں — پڑھائی، دہرائی، یا سہولت کے لیے بھی نہیں۔\n" +
      "۲۔ سرکاری دستاویز کبھی ایسی میز پر نہ رکھیں جہاں گرد و نواح میں بیج، نام کی پٹی، یا یونٹ کی نشانی نظر آتی ہو — اس تصویر کے لیے بھی نہیں جسے آپ حذف کرنے کا ارادہ رکھتے ہیں۔\n" +
      "۳۔ دستاویز کی تصویر گیلری، واٹس ایپ میڈیا فولڈر، یا نوٹس ایپ میں 'عارضی طور پر' بھی نہ رکھیں۔\n" +
      "۴۔ کوئی سرکاری دستاویز کبھی واٹس ایپ، ای میل، یا ذاتی کلاؤڈ پر نہ بھیجیں۔ نہ اپنے آپ کو، نہ ساتھی کو، نہ سینئر کو۔\n\n" +
      "کیوں: فون کی تصاویر خودکار طور پر ایسے کلاؤڈ میں محفوظ ہوتی رہتی ہیں جو شاید آپ نے برسوں پہلے سیٹ کیا اور بھول گئے۔ فون سے حذف کرنے سے کلاؤڈ سے نہیں جاتی۔ بعد میں جو بھی اُس اکاؤنٹ تک پہنچے، دستاویز اس کے پاس ہوگی۔\n\n" +
      "اگر ابھی آپ کے فون میں ایسی تصاویر ہیں: آج ہی فون یونٹ کی سائبر سیل کو دیں۔ پہلے حذف نہ کریں — حذف کرنے سے قابلِ بازیافت کاپی رہ جاتی ہے اور فون کی سرگزشت بھی ختم ہو جاتی ہے۔ معافی کی پالیسی کے تحت پرانی غلطی بتا دینا بعد میں پکڑے جانے سے کہیں محفوظ ہے۔",
  },

  {
    code: "usb_removable",
    title_en: "USB drives, memory cards, and 'found' devices",
    title_ur: "یو ایس بی، میموری کارڈ، اور 'ملی ہوئی' ڈیوائسز",
    summary_en: "A dropped USB in the mess is not a lost item. It is bait.",
    summary_ur: "میس میں پڑی یو ایس بی کوئی گمشدہ چیز نہیں۔ یہ چارہ ہے۔",
    body_en:
      "The 'lost USB' attack is one of the oldest and most effective techniques in the HIA toolkit because it works on human decency. Someone drops a USB in a canteen, a mess, a hostel corridor, or a car park. A soldier picks it up to find the owner. They plug it into the first computer they can — often an official one — to see whose files are on it. The moment it plugs in, malware installs itself silently.\n\n" +
      "THE RULES:\n" +
      "1. Never plug a USB, memory card, or unknown cable you did not buy yourself into any device — personal or official. Not to check what is on it. Not to 'return it to the owner'. Not for a minute.\n" +
      "2. Hand any device you find to the unit cyber cell or your security officer. That is the whole procedure.\n" +
      "3. On an official machine, only use storage that has been issued by the unit and stays inside the unit. USB from home, USB from a shop, USB from a courier — none of these belong on an official machine, ever.\n" +
      "4. Never charge your personal phone from an official machine's USB port. Charging cables carry data. A cable someone lent you may be a data cable. Use a wall adapter you own.\n" +
      "5. If a device asks 'trust this computer?' the answer on an official machine is always no.\n\n" +
      "WHY IT ESCALATES: modern malware jumps from an infected USB onto every other USB stick, printer, and phone that touches the machine. One plug can compromise an entire section's computers by the end of the day.",
    body_ur:
      "'گمشدہ یو ایس بی' حملہ دشمن ایجنسیوں کا سب سے پرانا اور مؤثر طریقہ ہے کیونکہ یہ انسانی شرافت پر چلتا ہے۔ کوئی کینٹین، میس، ہاسٹل کی راہداری، یا گاڑی کے کھڑے ہونے کی جگہ پر یو ایس بی گراتا ہے۔ فوجی مالک ڈھونڈنے کے لیے اٹھا لیتا ہے۔ پہلے ملنے والے کمپیوٹر — اکثر سرکاری — میں لگا دیتا ہے کہ دیکھے کس کی فائلیں ہیں۔ لگتے ہی خاموشی سے مالویئر انسٹال ہو جاتا ہے۔\n\n" +
      "قواعد:\n" +
      "۱۔ کوئی یو ایس بی، میموری کارڈ، یا نامعلوم کیبل — چاہے آپ نے خود نہ خریدی ہو — کسی بھی ڈیوائس میں نہ لگائیں۔ نہ ذاتی، نہ سرکاری۔ نہ چیک کرنے کے لیے، نہ 'مالک کو واپس کرنے' کے لیے، ایک منٹ کے لیے بھی نہیں۔\n" +
      "۲۔ کوئی ملنے والی ڈیوائس یونٹ کی سائبر سیل یا سیکیورٹی افسر کو دیں۔ یہی مکمل طریقہ کار ہے۔\n" +
      "۳۔ سرکاری مشین پر صرف وہ اسٹوریج استعمال ہو جو یونٹ نے دی ہو اور یونٹ کے اندر ہی رہتی ہو۔ گھر کی، دکان کی، یا کورئیر سے آئی یو ایس بی کبھی سرکاری مشین پر نہیں لگتی۔\n" +
      "۴۔ ذاتی فون کبھی سرکاری مشین کی یو ایس بی پورٹ سے چارج نہ کریں۔ چارجنگ کیبل ڈیٹا بھی منتقل کر سکتی ہے۔ کسی کی دی ہوئی کیبل ڈیٹا کیبل ہو سکتی ہے۔ اپنا وال اڈاپٹر استعمال کریں۔\n" +
      "۵۔ ڈیوائس پوچھے 'اس کمپیوٹر پر اعتماد کریں؟' تو سرکاری مشین پر جواب ہمیشہ نہیں ہے۔\n\n" +
      "کیوں بڑھتا ہے: جدید مالویئر متاثرہ یو ایس بی سے مشین کے ساتھ لگی ہر دوسری یو ایس بی، پرنٹر، اور فون میں پھیل جاتا ہے۔ ایک ہی پلگ دن ختم ہونے تک پوری سیکشن کے کمپیوٹر متاثر کر سکتا ہے۔",
  },

  {
    code: "official_equipment",
    title_en: "Personal use of official laptops and phones",
    title_ur: "سرکاری لیپ ٹاپ اور فون کا ذاتی استعمال",
    summary_en: "Two lives on one machine is how leaks happen. Keep them completely separate.",
    summary_ur: "ایک مشین پر دو زندگیاں چلانے سے لیکس ہوتے ہیں۔ انہیں مکمل الگ رکھیں۔",
    body_en:
      "Every personal action on an official device is a bridge between your personal life and your official life. HIA exploits that bridge. Every official action on a personal device is the same bridge in the other direction. Both leak.\n\n" +
      "WHAT NOT TO DO WITH AN OFFICIAL LAPTOP OR PHONE:\n" +
      "- Log into personal WhatsApp, Facebook, Instagram, or Gmail.\n" +
      "- Watch YouTube, browse for entertainment, or shop online.\n" +
      "- Insert a personal USB stick.\n" +
      "- Charge a personal phone from it.\n" +
      "- Take it home unless the SOP explicitly allows it, and only for authorised work.\n" +
      "- Store personal photos, family videos, or anything not directly work.\n\n" +
      "WHAT NOT TO DO WITH A PERSONAL PHONE OR LAPTOP:\n" +
      "- Photograph anything official.\n" +
      "- Store any official document, spreadsheet, or presentation.\n" +
      "- Log into an official email or system 'just to check'.\n" +
      "- Use it on the same Wi-Fi as an official machine while an official session is active elsewhere.\n\n" +
      "PRACTICAL DISCIPLINE: keep a cheap second phone (or a rugged keypad phone) for family and general use if the SOP requires you to be reachable but you handle sensitive matters. Ask your unit cyber cell what the current authorised configuration is — do not decide alone.",
    body_ur:
      "سرکاری ڈیوائس پر ہر ذاتی کام آپ کی ذاتی اور سرکاری زندگی کے درمیان پُل بناتا ہے۔ دشمن ایجنسیاں اسی پُل کا فائدہ اٹھاتی ہیں۔ ذاتی ڈیوائس پر ہر سرکاری کام وہی پُل الٹی طرف بناتا ہے۔ دونوں سے رساؤ ہوتا ہے۔\n\n" +
      "سرکاری لیپ ٹاپ یا فون پر یہ ہرگز نہیں کرنا:\n" +
      "- ذاتی واٹس ایپ، فیس بک، انسٹاگرام، یا جی میل لاگ ان۔\n" +
      "- یوٹیوب، تفریحی براؤزنگ، یا آن لائن خریداری۔\n" +
      "- ذاتی یو ایس بی لگانا۔\n" +
      "- ذاتی فون اس سے چارج کرنا۔\n" +
      "- گھر لے جانا جب تک ایس او پی اجازت نہ دے، اور صرف مجاز کام کے لیے۔\n" +
      "- ذاتی تصاویر، فیملی ویڈیوز، یا غیر متعلقہ چیزیں محفوظ کرنا۔\n\n" +
      "ذاتی فون یا لیپ ٹاپ پر یہ ہرگز نہیں کرنا:\n" +
      "- کسی سرکاری چیز کی تصویر لینا۔\n" +
      "- کسی سرکاری دستاویز، شیٹ، یا پریزنٹیشن کو محفوظ کرنا۔\n" +
      "- 'صرف چیک کرنے' کے لیے سرکاری ای میل یا نظام میں لاگ ان ہونا۔\n" +
      "- سرکاری مشین کے فعال ہوتے ہوئے اسی وائی فائی پر ذاتی کام کرنا۔\n\n" +
      "عملی نظم: اگر ایس او پی کہتا ہے کہ آپ ہر وقت دستیاب ہوں مگر آپ حساس معاملات دیکھتے ہیں تو گھر والوں کے لیے ایک سستا دوسرا فون (یا کی پیڈ فون) رکھیں۔ موجودہ مجاز ترتیب کیا ہے، یہ یونٹ کی سائبر سیل سے پوچھیں — خود فیصلہ نہ کریں۔",
  },

  {
    code: "phone_tapping",
    title_en: "Phone tapping and surveillance — what to look for",
    title_ur: "فون ٹیپنگ اور نگرانی — کیا دیکھنا ہے",
    summary_en: "Signs your phone is being watched, and what does and does not prove it.",
    summary_ur: "فون کی نگرانی کی علامات، اور کون سی علامت واقعی ثبوت ہے۔",
    body_en:
      "Modern phone surveillance is done by software installed on the device, not by a wire on the telephone line. The signs are subtle and the professional-grade tools (Pegasus, Predator, and their equivalents) are designed to leave almost none.\n\n" +
      "SIGNS WORTH TAKING SERIOUSLY (any one of these):\n" +
      "- The battery drains dramatically faster than a week ago with no change in your use.\n" +
      "- The phone runs warm even when idle in your pocket.\n" +
      "- Unusually high mobile data usage in your billing app for apps you barely use.\n" +
      "- Outgoing calls or SMS in your log that you did not make.\n" +
      "- 'Call forwarding' or a strange icon in your status bar you did not enable.\n" +
      "- The phone reboots on its own or the screen briefly wakes up when you are not touching it.\n" +
      "- The camera or microphone indicator lights up when no app should be using it.\n\n" +
      "SIGNS THAT MEAN NOTHING BY THEMSELVES (people over-interpret these):\n" +
      "- Clicks or echoes on calls — that is normal cellular routing.\n" +
      "- Ads that seem to match a recent conversation — coincidence and profiling, not tapping.\n" +
      "- A random text with garbled characters — usually a delivery error.\n\n" +
      "IF YOU SUSPECT: do not factory reset first. That destroys the forensic record and often does not remove the intrusion. Turn the phone off, hand it to the unit cyber cell in person, and use a temporary phone for anything urgent. Assume everything typed or said near the phone in the last 90 days is compromised, and act accordingly with your unit and family.",
    body_ur:
      "جدید فون کی نگرانی ٹیلی فون لائن کی وائر سے نہیں، ڈیوائس پر لگے سافٹ ویئر سے ہوتی ہے۔ علامات معمولی ہوتی ہیں اور پیشہ ورانہ اوزار (پیگاسس، پریڈیٹر اور ان جیسے) اس طرح بنائے گئے ہیں کہ تقریباً کوئی نشان نہ چھوڑیں۔\n\n" +
      "قابلِ اعتنا علامات (کوئی بھی ایک):\n" +
      "- ایک ہفتے پہلے کے مقابلے میں بغیر استعمال بڑھائے بیٹری بہت جلد ختم ہو رہی ہو۔\n" +
      "- جیب میں بیکار پڑا فون بھی گرم رہے۔\n" +
      "- بلنگ ایپ میں ایسی ایپس کے لیے غیر معمولی موبائل ڈیٹا جو آپ استعمال ہی نہیں کرتے۔\n" +
      "- کال یا ایس ایم ایس لاگ میں ایسی اندراج جو آپ نے نہیں بھیجی۔\n" +
      "- اسٹیٹس بار میں 'کال فارورڈنگ' یا کوئی اجنبی آئیکن جو آپ نے آن نہیں کیا۔\n" +
      "- فون خود بخود ری اسٹارٹ ہو یا آپ کے چھوئے بغیر اسکرین جاگ جائے۔\n" +
      "- کیمرہ یا مائیکروفون کا اشارہ آن ہو جب کسی ایپ کو استعمال نہیں کرنا چاہیے۔\n\n" +
      "وہ علامات جو تنہا کچھ ثابت نہیں کرتیں (لوگ ان پر زیادہ غور کرتے ہیں):\n" +
      "- کال میں کلک یا گونج — یہ عام سیلولر روٹنگ ہے۔\n" +
      "- حالیہ گفتگو سے ملتی جلتی اشتہاری — یہ اتفاق اور پروفائلنگ ہے، نگرانی نہیں۔\n" +
      "- ادھورے حروف والا رینڈم پیغام — عام طور پر ڈلیوری ایرر۔\n\n" +
      "شک ہو تو: پہلے فیکٹری ری سیٹ ہرگز نہ کریں۔ اس سے فارنزک ریکارڈ ختم ہو جاتا ہے اور اکثر نگرانی بھی ختم نہیں ہوتی۔ فون بند کریں، ذاتی طور پر یونٹ کی سائبر سیل کو دیں، اور فوری کام کے لیے عارضی فون استعمال کریں۔ گزشتہ ۹۰ دن میں فون کے قریب لکھی یا کہی گئی ہر چیز کو متاثرہ سمجھیں اور یونٹ اور گھر والوں کے ساتھ اس کے مطابق عمل کریں۔",
  },

  {
    code: "uniform_online",
    title_en: "Uniform photos, backgrounds, and social media OPSEC",
    title_ur: "وردی کی تصاویر، پس منظر، اور سوشل میڈیا کی احتیاط",
    summary_en: "The photo you post today is the file HIA opens tomorrow.",
    summary_ur: "آج آپ جو تصویر لگاتے ہیں، کل دشمن ایجنسی وہی فولڈر کھولتی ہے۔",
    body_en:
      "A photo carries more than the picture. It can carry GPS coordinates, exact time, and the phone that took it. Beyond the file, the picture shows unit signage, vehicle numbers, weapon types, the shape of the building behind you, weather and light that fix the date, and who else is in frame.\n\n" +
      "WHAT NOT TO POST, EVER:\n" +
      "- Any photo of yourself in uniform on a public profile, even from years ago.\n" +
      "- Any photo where a unit sign, vehicle number plate, or weapon serial is legible.\n" +
      "- Course photographs, passing-out parades, promotion boards, staff college groups.\n" +
      "- Announcement of your posting, transfer, leave, or return date.\n" +
      "- 'Check-in' at a location while you are still there.\n" +
      "- Interior of any official building.\n\n" +
      "SETTINGS TO CHECK RIGHT NOW ON EVERY ACCOUNT (yours and your family's):\n" +
      "1. Camera app > turn off location tagging.\n" +
      "2. Facebook/Instagram/WhatsApp > profile photo visibility set to 'contacts' or 'friends of friends' at most.\n" +
      "3. Facebook > 'Who can see my future posts' > Friends only. Then run 'Limit past posts' from Privacy Shortcuts.\n" +
      "4. LinkedIn > remove any mention of unit, formation, course, or specific role. 'Officer, Pakistan Army' is enough. Nothing else.\n" +
      "5. Google account > Photos > turn off automatic backup, or make sure albums are not public.\n\n" +
      "FAMILY RULES:\n" +
      "- Do not let children post photos where a uniform, a unit sign, or a house number is visible.\n" +
      "- Assume that anything shared with a 'friends only' setting will eventually be seen by someone you did not choose.\n" +
      "- No wedding video with parade uniform on TikTok or YouTube. Ever.",
    body_ur:
      "تصویر صرف منظر نہیں دکھاتی۔ اس میں جی پی ایس، وقت اور فون کی معلومات بھی ہوتی ہیں۔ فائل سے آگے، تصویر میں یونٹ کے بورڈ، گاڑیوں کے نمبر، ہتھیار کی قسم، پس منظر کی عمارت کی شکل، موسم اور روشنی جو تاریخ طے کر دیں، اور ساتھ موجود افراد سب نظر آتے ہیں۔\n\n" +
      "یہ کبھی نہیں لگانا:\n" +
      "- پبلک پروفائل پر وردی والی اپنی کوئی تصویر، خواہ برسوں پرانی ہو۔\n" +
      "- ایسی کوئی تصویر جہاں یونٹ کا بورڈ، گاڑی کا نمبر، یا ہتھیار کا سیریل پڑھا جا سکے۔\n" +
      "- کورس تصاویر، پاسنگ آؤٹ پریڈ، پروموشن بورڈ، اسٹاف کالج گروپ۔\n" +
      "- تعیناتی، ٹرانسفر، چھٹی، یا واپسی کی تاریخ کا اعلان۔\n" +
      "- جگہ پر موجود ہوتے ہوئے 'چیک اِن' کرنا۔\n" +
      "- کسی سرکاری عمارت کا اندرونی منظر۔\n\n" +
      "ابھی ہر اکاؤنٹ (اپنا اور گھر والوں کا) پر یہ سیٹنگز چیک کریں:\n" +
      "۱۔ کیمرہ ایپ > لوکیشن ٹیگ بند کریں۔\n" +
      "۲۔ فیس بک/انسٹا/واٹس ایپ > پروفائل تصویر کی ویزیبلٹی زیادہ سے زیادہ 'دوست/رابطے' تک محدود۔\n" +
      "۳۔ فیس بک > 'مستقبل کی پوسٹس کون دیکھ سکتا ہے' > صرف دوست۔ پھر 'Limit past posts' چلائیں۔\n" +
      "۴۔ لنکڈ ان > یونٹ، فارمیشن، کورس، یا مخصوص کردار کا کوئی ذکر ہٹا دیں۔ 'افسر، پاک آرمی' کافی ہے۔ اس سے زیادہ کچھ نہیں۔\n" +
      "۵۔ گوگل اکاؤنٹ > فوٹوز > خودکار بیک اپ بند کریں یا البمز پبلک نہ ہوں۔\n\n" +
      "خاندانی اصول:\n" +
      "- بچوں کو ایسی تصاویر پوسٹ نہ کرنے دیں جہاں وردی، یونٹ کا بورڈ یا مکان نمبر نظر آئے۔\n" +
      "- فرض کریں کہ 'صرف دوستوں' والی چیز بھی بالآخر کسی اجنبی تک پہنچے گی۔\n" +
      "- پریڈ وردی والی شادی کی ویڈیو ٹک ٹاک یا یوٹیوب پر ہرگز نہیں۔",
  },

  {
    code: "otp_shared",
    title_en: "OTP and PIN discipline for service members",
    title_ur: "او ٹی پی اور پن کی حفاظت — فوجی اہلکاروں کے لیے",
    summary_en: "One rule, no exceptions, for every family member and for you.",
    summary_ur: "ایک اصول، کوئی استثنا نہیں، ہر گھر والے اور خود آپ کے لیے۔",
    body_en:
      "The rule: no bank, no telco, no army office, no Easypaisa or JazzCash agent, no courier, no relative will ever need a code sent to your phone.\n\n" +
      "How it goes wrong: a caller says he is from the bank, the CSD office, or 'unit HQ' and there is a problem. He already knows your name and maybe your CNIC — that information is cheap and does not prove anything. He creates urgency. He asks you to read out a code 'to verify identity'. That code is the last thing standing between him and your account.\n\n" +
      "SERVICE-SPECIFIC VARIATIONS TO EXPECT:\n" +
      "- 'Sir this is from Army Welfare, your allotment code needs verification.' Real allotments are never verified over the phone by a code.\n" +
      "- 'This is CSD helpline, your card is being blocked, share the last SMS.' CSD does not phone you.\n" +
      "- 'Havildar sahib from HQ signals, urgent — read out that number.' A real havildar in a real HQ does not need an OTP from a jawan.\n" +
      "- 'Bhai, my WhatsApp is locked, I sent a code to your number, forward it.' Your friend's account is stolen; the code registers his number to the attacker.\n\n" +
      "ALSO WATCH FOR:\n" +
      "- A call asking you to dial *21* or **21* followed by a number — that is call forwarding, and every future OTP will be delivered to the attacker.\n" +
      "- Any request from a family member for your ATM PIN 'for now'. Elderly family members are targeted most and lose the most — teach them this rule specifically.",
    body_ur:
      "اصول: کوئی بینک، کمپنی، فوجی دفتر، ایزی پیسہ یا جاز کیش ایجنٹ، کورئیر، یا رشتہ دار کبھی آپ کے فون پر آنے والا کوڈ نہیں مانگے گا۔\n\n" +
      "طریقہ واردات: کال کرنے والا خود کو بینک، سی ایس ڈی، یا 'یونٹ ایچ کیو' سے بتاتا ہے۔ اسے آپ کا نام اور شاید شناختی کارڈ بھی معلوم ہوتا ہے — یہ سستی معلومات ہیں اور کچھ ثابت نہیں کرتیں۔ وہ جلدی مچاتا ہے اور 'تصدیق' کے لیے کوڈ مانگتا ہے۔ وہی کوڈ آپ کے اکاؤنٹ اور اس کے درمیان آخری رکاوٹ ہے۔\n\n" +
      "فوجی ماحول میں ممکنہ صورتیں:\n" +
      "- 'سر آرمی ویلفیئر سے بات کر رہا ہوں، آپ کے الاٹمنٹ کوڈ کی تصدیق درکار ہے۔' الاٹمنٹ کبھی فون پر کوڈ سے تصدیق نہیں ہوتی۔\n" +
      "- 'سی ایس ڈی ہیلپ لائن، آپ کا کارڈ بند ہو رہا ہے، آخری ایس ایم ایس بتائیں۔' سی ایس ڈی کبھی فون نہیں کرتی۔\n" +
      "- 'ایچ کیو سگنلز سے حوالدار صاحب، فوری — وہ نمبر بتائیں۔' اصلی حوالدار جوان سے کبھی او ٹی پی نہیں مانگتا۔\n" +
      "- 'بھائی میرا واٹس ایپ بند ہو گیا، آپ کے نمبر پر کوڈ بھیجا ہے، آگے بھیج دو۔' آپ کے دوست کا اکاؤنٹ چوری ہو چکا ہے؛ وہ کوڈ حملہ آور کے پاس اس کا نمبر رجسٹر کر دے گا۔\n\n" +
      "یہ بھی خطرہ ہے:\n" +
      "- کوئی کال کہے *21* یا **21* کے بعد نمبر ڈائل کریں — یہ کال فارورڈنگ ہے، اور ہر آنے والا او ٹی پی حملہ آور کو ملے گا۔\n" +
      "- گھر کے کسی فرد سے 'ابھی کے لیے' اے ٹی ایم پن مانگا جانا۔ بزرگ رشتہ دار سب سے زیادہ نشانہ بنتے ہیں اور سب سے زیادہ کھوتے ہیں — یہ اصول انہیں خاص طور پر سکھائیں۔",
  },

  {
    code: "whatsapp_lock",
    title_en: "Locking down WhatsApp in five minutes",
    title_ur: "واٹس ایپ کو پانچ منٹ میں محفوظ بنائیں",
    summary_en: "Two-step verification, profile privacy, group control, and linked devices.",
    summary_ur: "ٹو سٹیپ ویریفکیشن، پروفائل پرائیویسی، گروپ کنٹرول، اور لنکڈ ڈیوائسز۔",
    body_en:
      "Do these now, with the phone in your hand.\n\n" +
      "1. Settings > Account > Two-step verification > Enable. Set a 6-digit code that is NOT your ATM PIN and NOT your date of birth. This single setting stops most account takeovers.\n" +
      "2. Settings > Privacy > Profile photo > My contacts. Same for Last seen, About, and Status.\n" +
      "3. Settings > Privacy > Groups > My contacts. This stops strangers adding you to groups you never joined.\n" +
      "4. Settings > Privacy > Read receipts > usually off for service members — silence about your habits is safer.\n" +
      "5. Settings > Privacy > Advanced > 'Protect IP address in calls' > ON. This stops a caller from working out roughly where you are from the call.\n" +
      "6. Settings > Linked devices. If you see a session you do not recognise, log it out immediately and change your two-step code.\n" +
      "7. Never post a profile photo in uniform on any account. Never use a family photo as a profile photo on a public setting.\n" +
      "8. Chats > select any sensitive chat > Chat lock. Adds a fingerprint before it opens.\n\n" +
      "IF YOUR ACCOUNT IS STOLEN: register the number again from the app — that immediately kicks the attacker off. Then warn your contacts, because the attacker will message them asking for money in your name.",
    body_ur:
      "یہ ابھی کریں، فون ہاتھ میں لے کر۔\n\n" +
      "۱۔ سیٹنگز > اکاؤنٹ > ٹو سٹیپ ویریفکیشن > آن کریں۔ چھ ہندسوں کا کوڈ رکھیں جو نہ اے ٹی ایم پن ہو نہ تاریخِ پیدائش۔\n" +
      "۲۔ سیٹنگز > پرائیویسی > پروفائل تصویر > مائی کانٹیکٹس۔ یہی لاسٹ سین، اباؤٹ اور اسٹیٹس کے لیے۔\n" +
      "۳۔ سیٹنگز > پرائیویسی > گروپس > مائی کانٹیکٹس۔ یہ اجنبیوں کو گروپ میں شامل کرنے سے روکتا ہے۔\n" +
      "۴۔ سیٹنگز > پرائیویسی > ریڈ ریسیپٹس > فوجی اہلکار کے لیے اکثر بند بہتر — عادات کے بارے میں خاموشی محفوظ ہے۔\n" +
      "۵۔ سیٹنگز > پرائیویسی > ایڈوانسڈ > 'کال میں آئی پی محفوظ رکھیں' > آن کریں۔ یہ کال سے آپ کی تقریباً جگہ معلوم کرنے سے روکتا ہے۔\n" +
      "۶۔ سیٹنگز > لنکڈ ڈیوائسز۔ کوئی نامعلوم سیشن ہو تو فوراً لاگ آؤٹ کریں اور ٹو سٹیپ کوڈ تبدیل کریں۔\n" +
      "۷۔ کسی بھی اکاؤنٹ پر وردی والی پروفائل تصویر ہرگز نہیں۔ پبلک سیٹنگ پر فیملی تصویر بھی پروفائل کے طور پر نہیں۔\n" +
      "۸۔ چیٹس > حساس چیٹ منتخب کریں > چیٹ لاک۔ فنگر پرنٹ کے بغیر نہیں کھلے گی۔\n\n" +
      "اکاؤنٹ چوری ہو جائے تو: ایپ سے نمبر دوبارہ رجسٹر کریں، حملہ آور فوراً باہر ہو جائے گا۔ پھر رابطوں کو خبردار کریں، کیونکہ حملہ آور آپ کے نام پر ان سے پیسے مانگے گا۔",
  },

  {
    code: "family_rules_military",
    title_en: "Family OPSEC rules that actually hold",
    title_ur: "گھر کے وہ اصول جو واقعی چلتے ہیں",
    summary_en: "Seven rules, agreed once, followed by everybody in the house.",
    summary_ur: "سات اصول، ایک بار طے کریں، پورا گھر ان پر عمل کرے۔",
    body_en:
      "Agree these as a household, out loud, once — then they are shared rules rather than one person nagging.\n\n" +
      "1. Nobody in this house says online where the serving member is posted, what he does, or when he will be back.\n" +
      "2. No uniform in any profile photo, on any account, ever. No PMA, staff college, or course photos on public profiles.\n" +
      "3. No OTP leaves this house for any reason, to anyone.\n" +
      "4. Nobody accepts a friend request from a person nobody has met, even if they say they are a cousin's cousin.\n" +
      "5. If someone reaches out because 'my brother served with your father', we assume it is elicitation until proven otherwise. Verify by asking a specific question only the real relationship would know.\n" +
      "6. We do not announce travel — leave dates, return dates, tours abroad, wedding trips — until we are home again.\n" +
      "7. If something feels wrong, we say it the same day. Nobody in this house gets in trouble for telling.\n\n" +
      "PARTICULAR TARGETS TO PROTECT:\n" +
      "- Spouses — the softest approach vector, often through female-only groups, catering pages, or school parent groups.\n" +
      "- Children — through games and social media.\n" +
      "- Retired parents — through 'inheritance', 'welfare', and 'pension update' scams.\n\n" +
      "Write the seven rules on a card and put it where the family can see it. Rules that live only in a lecture are forgotten in a week. Rules on the fridge survive.",
    body_ur:
      "یہ اصول گھر میں مل کر، ایک بار، بلند آواز میں طے کریں — پھر یہ سب کے مشترکہ اصول بن جاتے ہیں۔\n\n" +
      "۱۔ اس گھر کا کوئی فرد آن لائن یہ نہیں بتائے گا کہ سروسنگ ممبر کہاں تعینات ہے، کیا کام کرتا ہے، یا کب واپس آئے گا۔\n" +
      "۲۔ کسی بھی اکاؤنٹ پر وردی والی پروفائل تصویر ہرگز نہیں۔ پی ایم اے، اسٹاف کالج، یا کورس کی تصاویر پبلک پروفائل پر نہیں۔\n" +
      "۳۔ کوئی او ٹی پی، کسی بھی وجہ سے، گھر سے باہر نہیں جائے گا۔\n" +
      "۴۔ کوئی ایسی فرینڈ ریکویسٹ قبول نہیں ہو گی جس شخص سے کوئی ملا نہ ہو، خواہ وہ 'کزن کا کزن' کہے۔\n" +
      "۵۔ کوئی 'میرا بھائی آپ کے والد کے ساتھ تھا' کہہ کر رابطہ کرے تو جب تک ثابت نہ ہو، معلومات نکالنے کی کوشش سمجھی جائے گی۔ ایسا مخصوص سوال پوچھیں جو صرف اصلی تعلق کو معلوم ہو۔\n" +
      "۶۔ سفر کا اعلان — چھٹی، واپسی، بیرونِ ملک دورہ، شادی کا سفر — واپس آنے سے پہلے نہیں کریں گے۔\n" +
      "۷۔ کچھ غلط لگے تو اسی دن بتائیں گے۔ اس گھر میں بتانے پر کسی کو ڈانٹ نہیں پڑے گی۔\n\n" +
      "خصوصی نشانے:\n" +
      "- بیویاں — سب سے نرم راستہ، اکثر خواتین کے گروپس، کیٹرنگ پیجز، یا اسکول کے والدین گروپس سے۔\n" +
      "- بچے — گیمز اور سوشل میڈیا سے۔\n" +
      "- ریٹائرڈ والدین — 'وراثت'، 'ویلفیئر'، اور 'پنشن اپڈیٹ' کے فراڈ سے۔\n\n" +
      "سات اصول کارڈ پر لکھ کر گھر میں نمایاں جگہ لگائیں۔ صرف لیکچر میں رہنے والے اصول ہفتے میں بھول جاتے ہیں۔ فریج پر لگا کارڈ یاد رہتا ہے۔",
  },

  {
    code: "sextortion_response",
    title_en: "If someone has compromising material — what to do",
    title_ur: "اگر کسی کے پاس قابلِ اعتراض مواد ہو — کیا کرنا ہے",
    summary_en: "Do not pay. Do not delete. Report the same day.",
    summary_ur: "رقم نہ دیں۔ کچھ حذف نہ کریں۔ اسی دن اطلاع دیں۔",
    body_en:
      "This is the part nobody wants to read, so read it before you need it.\n\n" +
      "THE MOMENT A THREAT ARRIVES, THREE RULES:\n" +
      "1. DO NOT PAY. Payment proves you will pay and the demands escalate. Not one case in a hundred ends with a single payment.\n" +
      "2. DO NOT DELETE. The chat, the profile, the account name, the numbers — all of it is evidence. Screenshot everything, including the profile page.\n" +
      "3. REPORT THE SAME DAY. To the unit cyber contact, and to the FIA Cyber Crime Wing (1991).\n\n" +
      "THEN:\n" +
      "- Stop replying entirely. Do not block yet — blocking can hide evidence and can trigger immediate release.\n" +
      "- Set your profiles to private. Warn one trusted family member — not to fix it, just so you are not carrying it alone.\n" +
      "- Do not attempt to identify the attacker yourself. Do not send anyone to negotiate. That escalates.\n\n" +
      "WHY REPORTING FAST MATTERS: the amnesty policy exists for exactly this situation. The service loses officers and soldiers to blackmail because they stayed silent, not because they were targeted. Being targeted is not a failure. Staying silent is what the other side is counting on.\n\n" +
      "IF THE TARGET IS A FAMILY MEMBER (spouse, child, parent): the same three rules apply. Bring the family member to the unit cyber contact together. Do not delete the phone or 'clean it up' first.",
    body_ur:
      "یہ حصہ کوئی پڑھنا نہیں چاہتا، اس لیے ضرورت پڑنے سے پہلے پڑھ لیں۔\n\n" +
      "دھمکی آتے ہی تین اصول:\n" +
      "۱۔ رقم نہ دیں۔ ادائیگی ثابت کرتی ہے کہ آپ دیں گے، اور مطالبات بڑھتے جاتے ہیں۔ سو میں سے شاید ایک کیس ایک ادائیگی پر ختم ہوتا ہے۔\n" +
      "۲۔ کچھ حذف نہ کریں۔ چیٹ، پروفائل، اکاؤنٹ کا نام، نمبر — سب ثبوت ہیں۔ اسکرین شاٹ لیں، پروفائل پیج سمیت۔\n" +
      "۳۔ اسی دن اطلاع دیں — یونٹ کے سائبر رابطہ کار اور ایف آئی اے سائبر کرائم ونگ (۱۹۹۱) کو۔\n\n" +
      "پھر:\n" +
      "- جواب دینا مکمل بند کریں۔ ابھی بلاک نہ کریں — بلاک کرنے سے ثبوت چھپ سکتا ہے اور فوری اجرا ہو سکتا ہے۔\n" +
      "- پروفائل پرائیویٹ کریں۔ ایک قابلِ اعتماد گھر والے کو بتائیں — حل کے لیے نہیں، صرف اس لیے کہ بوجھ اکیلے نہ اٹھائیں۔\n" +
      "- حملہ آور کو خود شناخت کرنے کی کوشش نہ کریں۔ کسی کو مذاکرات کے لیے نہ بھیجیں۔ اس سے معاملہ بگڑتا ہے۔\n\n" +
      "جلد اطلاع کیوں ضروری: معافی کی پالیسی اسی صورتحال کے لیے ہے۔ فوج بلیک میل سے افسر اور جوان اس لیے کھوتی ہے کہ وہ خاموش رہے، نہ کہ اس لیے کہ نشانہ بنے۔ نشانہ بننا ناکامی نہیں۔ خاموشی وہی ہے جس پر دوسری طرف بھروسا کرتی ہے۔\n\n" +
      "اگر نشانہ کوئی گھر والا ہو (بیوی، بچہ، والدین): وہی تین اصول لاگو ہوتے ہیں۔ گھر والے کو یونٹ کے سائبر رابطہ کار تک ساتھ لے کر جائیں۔ فون کو 'صاف' یا حذف نہ کریں۔",
  },
];

/* ---------------- DRILL SCENARIOS ---------------- */
const SCENARIOS = [
  {
    id: "sc1", kind: "chat", sender: "+92 3xx xxxxxxx (not in contacts)",
    content_en: "Assalam o alaikum. Sorry, is this Bilal's number? My cousin gave it to me. " +
                "Anyway your DP is nice, are you in the army? I really respect army people.",
    content_ur: "السلام علیکم، معذرت، کیا یہ بلال کا نمبر ہے؟ خیر، آپ کی ڈی پی اچھی ہے، " +
                "کیا آپ فوج میں ہیں؟ مجھے فوجیوں سے بہت عزت ہے۔",
    is_genuine: false,
    explanation_en: "Classic wrong-number opener from the honey trap playbook. The 'mistake' " +
                    "is the excuse to start talking; the compliment plus the army question in " +
                    "the very first message is the tell. A real wrong number ends after your reply.",
    explanation_ur: "یہ ہنی ٹریپ کی کلاسک 'غلط نمبر' والی شروعات ہے۔ پہلے ہی پیغام میں تعریف اور فوج کا سوال " +
                    "نمایاں علامت ہے۔ اصل غلط نمبر آپ کے جواب کے بعد ختم ہو جاتا ہے۔",
  },
  {
    id: "sc2", kind: "chat", sender: "WhatsApp — 'Maj Asif, GHQ Signals'",
    content_en: "Havildar sahib, this is Major Asif from GHQ Signals. Urgent — we need to verify " +
                "your handset. There is an OTP being sent to your number now, please forward it " +
                "to me within two minutes. This is a lawful order.",
    content_ur: "حوالدار صاحب، میں میجر آصف بول رہا ہوں، جی ایچ کیو سگنلز سے۔ فوری کام ہے — " +
                "آپ کے ہینڈ سیٹ کی تصدیق کرنی ہے۔ ابھی آپ کے نمبر پر او ٹی پی آ رہا ہے، دو منٹ " +
                "میں مجھے آگے بھیج دیں۔ یہ ایک باقاعدہ حکم ہے۔",
    is_genuine: false,
    explanation_en: "No officer, real or fake, ever needs an OTP from you. The 'lawful order' " +
                    "language is chosen to switch off your judgement. The correct action is to " +
                    "not forward, and call the unit adjutant on a number you already know.",
    explanation_ur: "کوئی افسر — اصلی ہو یا جعلی — کبھی آپ سے او ٹی پی نہیں مانگتا۔ 'باقاعدہ حکم' " +
                    "کے الفاظ آپ کی سوچ روکنے کے لیے چنے جاتے ہیں۔ درست عمل: کوڈ نہ بھیجیں اور یونٹ " +
                    "کے ایڈجوٹنٹ کو پہلے سے معلوم نمبر پر کال کریں۔",
  },
  {
    id: "sc3", kind: "chat", sender: "LinkedIn — 'HR, Gulf Defence Consultancy'",
    content_en: "We are recruiting ex-service and serving technical officers for a well paid " +
                "consultancy role. Just share your CV with unit, posting history and current " +
                "assignment details, and we will confirm eligibility today.",
    content_ur: "ہم حاضر سروس اور ریٹائرڈ تکنیکی افسران کے لیے بھرتی کر رہے ہیں۔ اپنا سی وی " +
                "یونٹ، تعیناتی کی تاریخ اور موجودہ ذمہ داری کے ساتھ بھیجیں، ہم آج ہی اہلیت کی " +
                "تصدیق کر دیں گے۔",
    is_genuine: false,
    explanation_en: "Elicitation dressed as recruitment. No genuine employer needs your posting " +
                    "history or current assignment to check eligibility. The salary is the bait; " +
                    "your posting history is the product.",
    explanation_ur: "بھرتی کے روپ میں معلومات نکالنے کی کوشش۔ کسی اصلی ادارے کو اہلیت جانچنے کے " +
                    "لیے آپ کی تعیناتی کی تاریخ نہیں چاہیے۔ تنخواہ چارہ ہے، تعیناتی کی معلومات " +
                    "اصل مقصد۔",
  },
  {
    id: "sc4", kind: "chat", sender: "Instagram — 'Ayesha Khan' (new account)",
    content_en: "4 photos, all professional quality. 11 followers, 2,100 following. No tagged " +
                "photos. Bio: 'Simple girl. Coffee. Proud of our brave soldiers.' Sent you a " +
                "follow request and a DM within a minute of you accepting.",
    content_ur: "چار تصاویر، سب پیشہ ورانہ معیار کی۔ ۱۱ فالوورز، ۲۱۰۰ فالوونگ۔ کوئی ٹیگ شدہ تصویر " +
                "نہیں۔ تعارف: 'سادہ لڑکی۔ کافی۔ ہمارے بہادر سپاہیوں پر فخر۔' قبول کرتے ہی ایک منٹ " +
                "میں فالو ریکویسٹ اور پیغام۔",
    is_genuine: false,
    explanation_en: "Every number is wrong: new account, almost no followers but thousands " +
                    "followed, no tagged photos because no real friends exist. The army line in " +
                    "the bio is the targeting filter. Reverse-search the photos on Google Lens " +
                    "and you will usually find someone else.",
    explanation_ur: "ہر عدد غلط ہے: نیا اکاؤنٹ، فالوورز نہ ہونے کے برابر مگر ہزاروں کو فالو، " +
                    "کوئی ٹیگ شدہ تصویر نہیں۔ تعارف میں فوج کا ذکر نشانہ چننے کا طریقہ ہے۔ " +
                    "گوگل لینز پر تصاویر ریورس سرچ کریں، اکثر کوئی اور نکل آتی ہے۔",
  },
  {
    id: "sc5", kind: "chat", sender: "Chat continued after 6 weeks",
    content_en: "I feel so close to you now. Can we do a video call tonight? Just us, no need " +
                "to tell anyone. I want to see you properly, don't be shy.",
    content_ur: "اب میں آپ کے بہت قریب محسوس کرتی ہوں۔ آج رات ویڈیو کال کریں؟ صرف ہم دونوں، " +
                "کسی کو بتانے کی ضرورت نہیں۔ شرمائیں نہیں۔",
    is_genuine: false,
    explanation_en: "Six weeks of ordinary conversation was the investment; this is the " +
                    "collection. The push for secrecy is the marker. Recorded video calls are " +
                    "the most common source of blackmail material against service members. " +
                    "Stop here and report the same day.",
    explanation_ur: "چھ ہفتوں کی عام گفتگو سرمایہ کاری تھی؛ یہ وصولی ہے۔ راز رکھنے پر زور اصل " +
                    "علامت ہے۔ ریکارڈ شدہ ویڈیو کال فوجیوں کے خلاف بلیک میل کا سب سے عام ذریعہ " +
                    "ہے۔ یہاں رک جائیں اور اسی دن اطلاع دیں۔",
  },
  {
    id: "sc6", kind: "in_person", sender: "At a family wedding — man introduced as a cousin's friend",
    content_en: "Yaar you must be so bored — that Waziristan posting must have been rough. " +
                "My uncle was up there in the nineties, he still has stories. You are back in " +
                "the plains now, right? Which side, I have friends around there.",
    content_ur: "یار آپ تو بور ہو جاتے ہوں گے — وزیرستان کی پوسٹنگ سخت رہی ہوگی۔ میرا چچا نوّے " +
                "کی دہائی میں وہاں تھے، ابھی تک قصے سناتے ہیں۔ اب آپ میدانی علاقے میں ہیں نا؟ " +
                "کون سی طرف، وہاں میرے دوست ہیں۔",
    is_genuine: false,
    explanation_en: "Textbook elicitation. Shared story to build rapport, then two location " +
                    "questions in a row — past posting and current one. In social settings you " +
                    "owe nobody an answer about where you serve. Change the subject or excuse " +
                    "yourself politely.",
    explanation_ur: "کلاسک elicitation۔ ہمدردی جتانے کے لیے مشترکہ قصہ، پھر لگاتار دو مقامی " +
                    "سوال — پرانی اور موجودہ تعیناتی۔ سماجی محفلوں میں آپ کسی کو اپنی جگہ کا " +
                    "جواب دینے کے پابند نہیں۔ موضوع بدلیں یا معذرت کر کے اٹھ جائیں۔",
  },
  {
    id: "sc7", kind: "chat", sender: "Colleague — 'Capt Bilal' (senior in same mess)",
    content_en: "Bhai jaan, my printer is jammed and this needs to go to Brig sahib in 15 " +
                "minutes. Just take a photo of pages 3 and 4 of the file on my desk and " +
                "WhatsApp them to me. I owe you one.",
    content_ur: "بھائی جان، میرا پرنٹر جام ہو گیا ہے اور یہ ۱۵ منٹ میں بریگیڈیئر صاحب کو دینا " +
                "ہے۔ میری میز پر جو فائل ہے اس کے صفحہ ۳ اور ۴ کی تصویر لے کر مجھے واٹس ایپ کر " +
                "دو۔ احسان یاد رکھوں گا۔",
    is_genuine: false,
    explanation_en: "The rule is absolute — no photo of any official page on any personal phone, " +
                    "for any reason, from anybody, ever. Even if the request is genuine, " +
                    "photographing the page is what makes it unsafe. Say no, and offer to help " +
                    "by physically taking the file over instead.",
    explanation_ur: "اصول قطعی ہے — کسی سرکاری صفحہ کی تصویر کسی بھی ذاتی فون سے، کسی بھی وجہ " +
                    "سے، کسی کے کہنے پر بھی نہیں۔ درخواست اصلی بھی ہو تو تصویر ہی خطرہ ہے۔ " +
                    "انکار کریں اور فائل خود لے جانے کی پیشکش کریں۔",
  },
  {
    id: "sc8", kind: "in_person", sender: "USB drive found in the officers' mess",
    content_en: "A small USB drive on the floor next to the notice board. No label. You do not " +
                "know whose it is. It is 5:30 pm; the mess is quiet.",
    content_ur: "افسروں کے میس کے نوٹس بورڈ کے پاس ایک چھوٹی سی یو ایس بی۔ کوئی لیبل نہیں۔ " +
                "معلوم نہیں کس کی ہے۔ شام کے ساڑھے پانچ بجے ہیں؛ میس خالی ہے۔",
    is_genuine: false,
    explanation_en: "Textbook bait. Never plug an unknown USB into any device — personal, mess " +
                    "computer, or official machine. Do not check what is on it. Do not try to " +
                    "return it. Take it to the unit cyber cell (or security officer) and hand " +
                    "it in as-is.",
    explanation_ur: "کلاسک چارہ۔ نامعلوم یو ایس بی کسی بھی ڈیوائس میں نہ لگائیں — ذاتی، میس، " +
                    "یا سرکاری۔ چیک کرنے یا مالک تک پہنچانے کی کوشش نہ کریں۔ ویسے ہی یونٹ کی " +
                    "سائبر سیل (یا سیکیورٹی افسر) کے حوالے کر دیں۔",
  },
  {
    id: "sc9", kind: "call", sender: "Caller: 'Havildar clerk, unit HQ'",
    content_en: "Sahib, main clerk sahib bol raha hoon. Your CSD card is being reissued. " +
                "Please dial *21*0300xxxxxxx# from your handset to activate the new SIM binding. " +
                "Do it in the next five minutes or the card will be blocked.",
    content_ur: "صاحب، میں کلرک صاحب بول رہا ہوں۔ آپ کا سی ایس ڈی کارڈ دوبارہ جاری ہو رہا ہے۔ " +
                "برائے کرم اپنے ہینڈ سیٹ سے *21*0300xxxxxxx# ڈائل کریں تاکہ نئی سم بائنڈنگ " +
                "ایکٹیویٹ ہو۔ اگلے پانچ منٹ میں کریں ورنہ کارڈ بلاک ہو جائے گا۔",
    is_genuine: false,
    explanation_en: "*21* is the code that sets up unconditional call forwarding to a chosen " +
                    "number. Every future OTP call would go to the attacker. Neither CSD nor " +
                    "a clerk ever asks you to dial such a code. Hang up. Dial ##002# to clear " +
                    "any forwarding already set.",
    explanation_ur: "*21* وہ کوڈ ہے جو تمام کالیں چنیدہ نمبر پر منتقل کر دیتا ہے۔ ہر آنے والا " +
                    "او ٹی پی حملہ آور کو ملے گا۔ نہ سی ایس ڈی نہ کوئی کلرک ایسا کوڈ ڈائل " +
                    "کروانے کو کہتا ہے۔ فون بند کریں۔ فارورڈنگ ہٹانے کے لیے ##002# ڈائل کریں۔",
  },
  {
    id: "sc10", kind: "chat", sender: "WhatsApp — spouse's phone, from 'Sister of officer's wife club'",
    content_en: "Bhabi assalam o alaikum, we are updating the ladies club directory for the " +
                "farewell dinner. Please share your husband's rank, unit, and current posting " +
                "so we can print the invite properly. Reply by evening.",
    content_ur: "بھابی السلام علیکم، ہم لیڈیز کلب کی ڈائرکٹری فیئرویل ڈنر کے لیے اپڈیٹ کر رہے " +
                "ہیں۔ برائے کرم اپنے شوہر کا عہدہ، یونٹ، اور موجودہ تعیناتی بھیجیں تاکہ دعوت " +
                "نامہ ٹھیک چھپ سکے۔ شام تک جواب دیں۔",
    is_genuine: false,
    explanation_en: "Elicitation through the family. A real ladies club invite does not need " +
                    "the officer's unit and current posting. The safest reply is 'please check " +
                    "with him directly' and to verify the sender by calling a known member of " +
                    "the club — not by replying on that chat.",
    explanation_ur: "خاندان کے ذریعے معلومات نکالنا۔ اصلی لیڈیز کلب کی دعوت کے لیے افسر کی " +
                    "یونٹ اور موجودہ تعیناتی کی ضرورت نہیں ہوتی۔ محفوظ جواب: 'براہ کرم ان سے " +
                    "خود پوچھ لیں' اور کلب کے کسی معلوم رکن کو کال کر کے تصدیق کریں — اسی چیٹ " +
                    "پر جواب نہیں۔",
  },
  {
    id: "sc11", kind: "chat", sender: "Unit WhatsApp group — Adjutant",
    content_en: "Leave roster for next month has been uploaded to the notice board. Check with " +
                "the chief clerk during office hours if your dates are wrong.",
    content_ur: "اگلے مہینے کا چھٹی رجسٹر نوٹس بورڈ پر لگا دیا گیا ہے۔ تاریخوں میں غلطی ہو تو " +
                "دفتری اوقات میں چیف کلرک سے رابطہ کریں۔",
    is_genuine: true,
    explanation_en: "Genuine. It asks for nothing, contains no link, creates no urgency, and " +
                    "directs you to an in-person channel. Not everything unusual is an attack — " +
                    "the drill is to recognise the difference, not to distrust everything.",
    explanation_ur: "یہ اصلی ہے۔ نہ کچھ مانگا گیا، نہ لنک ہے، نہ جلدی۔ ہر غیر معمولی چیز حملہ " +
                    "نہیں ہوتی — مشق کا مقصد فرق پہچاننا ہے، ہر چیز پر شک نہیں۔",
  },
  {
    id: "sc12", kind: "sms", sender: "+92 3xx xxxxxxx",
    content_en: "Congratulations! You are selected for Army Welfare Housing Scheme Phase-II. " +
                "Confirm your plot by paying 2,500 processing fee to this account within 24 " +
                "hours. Send CNIC photo for registration.",
    content_ur: "مبارک ہو! آپ آرمی ویلفیئر ہاؤسنگ سکیم فیز ٹو کے لیے منتخب ہوئے ہیں۔ ۲۴ گھنٹے " +
                "میں ۲۵۰۰ پروسیسنگ فیس اس اکاؤنٹ میں جمع کروا کر پلاٹ کی تصدیق کریں۔ رجسٹریشن " +
                "کے لیے شناختی کارڈ کی تصویر بھیجیں۔",
    is_genuine: false,
    explanation_en: "Three tells in one message: a fee to receive a benefit, a 24-hour deadline, " +
                    "and a request for your CNIC. No official scheme is allotted by SMS. Verify " +
                    "at the unit office, never through the number that messaged you.",
    explanation_ur: "ایک ہی پیغام میں تین علامات: فائدہ لینے کے لیے فیس، ۲۴ گھنٹے کی مہلت، اور " +
                    "شناختی کارڈ کی درخواست۔ کوئی سرکاری سکیم ایس ایم ایس سے الاٹ نہیں ہوتی۔",
  },
  {
    id: "sc13", kind: "chat", sender: "Contact saved as 'Tariq bhai'",
    content_en: "Bhai I am stuck, my wallet is blocked and I need to send 15,000 urgently. " +
                "Send it to this number and I will return tomorrow. Please don't call, I am in " +
                "a meeting, just transfer.",
    content_ur: "بھائی میں پھنس گیا ہوں، میرا والٹ بند ہے اور مجھے فوری ۱۵،۰۰۰ بھیجنے ہیں۔ اس " +
                "نمبر پر بھیج دیں، کل واپس کر دوں گا۔ کال نہ کریں، میٹنگ میں ہوں، بس ٹرانسفر " +
                "کر دیں۔",
    is_genuine: false,
    explanation_en: "A known contact does not make a message safe — his account may be stolen. " +
                    "The refusal to take a call is the whole trick, because a thirty-second " +
                    "voice call would end it. Always call before sending money.",
    explanation_ur: "جانا پہچانا رابطہ ہونے سے پیغام محفوظ نہیں ہو جاتا — اس کا اکاؤنٹ چوری ہو " +
                    "سکتا ہے۔ کال سے انکار ہی اصل چال ہے۔ پیسے بھیجنے سے پہلے ہمیشہ کال کریں۔",
  },
  {
    id: "sc14", kind: "email", sender: "Email — 'defence.researcher@protonmail.com'",
    content_en: "Salaam. I am a PhD student writing on the modernisation of infantry doctrine in " +
                "South Asia. Would you spare 20 minutes for an off-the-record interview about " +
                "your unit's exercises? I can send the questions in advance.",
    content_ur: "سلام۔ میں پی ایچ ڈی کا طالب علم ہوں اور جنوبی ایشیا میں انفنٹری نظریے کی " +
                "جدیدیت پر لکھ رہا ہوں۔ کیا آپ اپنی یونٹ کی مشقوں پر ۲۰ منٹ کا 'آف دی ریکارڈ' " +
                "انٹرویو دے سکیں گے؟ سوالات پیشگی بھیج دوں گا۔",
    is_genuine: false,
    explanation_en: "Nothing about your unit is discussed with anyone outside official channels " +
                    "— not a student, not a journalist, not off the record. Media/academic " +
                    "requests must go through the unit press liaison. Do not reply directly.",
    explanation_ur: "اپنی یونٹ کے بارے میں کسی سے بھی سرکاری چینل کے باہر بات نہیں ہوتی — " +
                    "طالب علم، صحافی، یا 'آف دی ریکارڈ' سے بھی نہیں۔ میڈیا یا تعلیمی درخواستیں " +
                    "یونٹ کے پریس رابطہ کار کے ذریعے آتی ہیں۔ براہِ راست جواب نہ دیں۔",
  },
  {
    id: "sc15", kind: "chat", sender: "In-game chat — player 'DangerZone11'",
    content_en: "you're really good at this! im 13 too. i can gift you the battle pass, i have " +
                "extra. add me on this other app so we can talk properly, its easier there. " +
                "don't tell your parents they'll just say no.",
    content_ur: "تم بہت اچھا کھیلتے ہو! میں بھی ۱۳ سال کا ہوں۔ میں تمہیں بیٹل پاس تحفے میں دے " +
                "سکتا ہوں، میرے پاس اضافی ہے۔ مجھے اس دوسری ایپ پر ایڈ کرو، وہاں بات آسان ہے۔ " +
                "والدین کو مت بتانا، وہ منع کر دیں گے۔",
    is_genuine: false,
    explanation_en: "Every element of grooming in four lines: claimed same age, a gift, a move " +
                    "to a private platform, and secrecy from parents. Show this one to your " +
                    "children and ask them what is wrong with it.",
    explanation_ur: "چار سطروں میں گرومنگ کے تمام عناصر: ہم عمر ہونے کا دعویٰ، تحفہ، نجی ایپ " +
                    "پر منتقلی، اور والدین سے راز۔ یہ اپنے بچوں کو دکھائیں اور ان سے پوچھیں " +
                    "کہ اس میں کیا غلط ہے۔",
  },
  {
    id: "sc16", kind: "call", sender: "Caller: 'Bank helpline'",
    content_en: "Sir, I am calling from your bank's fraud department. Someone is trying to " +
                "withdraw 85,000 from your account right now. To block it I need the six digit " +
                "code we just sent you. Please hurry, we have less than a minute.",
    content_ur: "سر، میں آپ کے بینک کے فراڈ ڈیپارٹمنٹ سے بات کر رہا ہوں۔ ابھی کوئی آپ کے " +
                "اکاؤنٹ سے ۸۵،۰۰۰ نکالنے کی کوشش کر رہا ہے۔ روکنے کے لیے مجھے وہ چھ ہندسوں کا " +
                "کوڈ چاہیے جو ابھی بھیجا ہے۔ جلدی کریں۔",
    is_genuine: false,
    explanation_en: "No bank ever asks for the code it sent you. The manufactured emergency " +
                    "exists to stop you thinking. Hang up and call the number printed on your " +
                    "own bank card.",
    explanation_ur: "کوئی بینک اپنا بھیجا ہوا کوڈ نہیں مانگتا۔ جلدی صرف اس لیے مچائی جاتی ہے " +
                    "کہ آپ سوچ نہ سکیں۔ فون بند کریں اور اپنے کارڈ پر لکھے نمبر پر کال کریں۔",
  },
  {
    id: "sc17", kind: "chat", sender: "Cousin, in family group",
    content_en: "Assalam o alaikum everyone. Ammi's operation went well alhamdulillah, she is " +
                "in room 214. Visiting hours are 4 to 7.",
    content_ur: "السلام علیکم۔ امی کا آپریشن اچھا رہا الحمدللہ، وہ کمرہ ۲۱۴ میں ہیں۔ ملاقات کا " +
                "وقت ۴ سے ۷ بجے ہے۔",
    is_genuine: true,
    explanation_en: "Genuine. No link, no payment, no urgency, nothing requested. Cards like " +
                    "this train judgement rather than paranoia — not everything unusual is an " +
                    "attack.",
    explanation_ur: "یہ اصلی ہے۔ نہ لنک، نہ ادائیگی، نہ جلدی، نہ کوئی مطالبہ۔ ایسی مشقیں " +
                    "احتیاط سکھاتی ہیں، وہم نہیں۔",
  },
  {
    id: "sc18", kind: "chat", sender: "Facebook DM — 'Retired Col. Anwar (32 Punjab)'",
    content_en: "Beta, I served under your father in the eighties. Saw your photo, mashallah you " +
                "look just like him. Which formation are you in now, I still have friends at " +
                "GHQ, might be able to help with your next posting. Which arm did you finally " +
                "choose?",
    content_ur: "بیٹا، میں تمہارے والد کے ماتحت اسّی کی دہائی میں تھا۔ تمہاری تصویر دیکھی، " +
                "ماشاءاللہ بالکل ان جیسے لگتے ہو۔ ابھی کس فارمیشن میں ہو؟ جی ایچ کیو میں " +
                "میرے دوست ابھی بھی ہیں، اگلی پوسٹنگ میں مدد ہو سکتی ہے۔ آخر میں کون سا آرم " +
                "چنا؟",
    is_genuine: false,
    explanation_en: "Every sentence is calibrated: false rapport (father's name), flattery, an " +
                    "unverifiable claim of influence, and three targeting questions. Even if " +
                    "there is a real ex-colonel, this is not how a real one would ask. Verify " +
                    "the person through the family before replying — and even then, no unit " +
                    "or posting information ever goes into a DM.",
    explanation_ur: "ہر جملہ سوچا سمجھا ہے: جھوٹی قربت (والد کا نام)، تعریف، غیر تصدیق شدہ " +
                    "دعویٰ اثر و رسوخ کا، اور تین ہدف والے سوالات۔ اگر اصلی ریٹائرڈ کرنل بھی " +
                    "ہو تو وہ اس طرح نہیں پوچھتا۔ گھر والوں سے تصدیق کریں — اور تب بھی یونٹ " +
                    "یا تعیناتی کی معلومات کبھی ڈی ایم میں نہیں جاتی۔",
  },
];

/* ---------------- PHONE BRANDS ---------------- */
const BRANDS = [
  { id: "samsung",  label_en: "Samsung",              label_ur: "سام سنگ" },
  { id: "xiaomi",   label_en: "Xiaomi / Redmi / POCO", label_ur: "شیاؤمی / ریڈمی / پوکو" },
  { id: "oppo",     label_en: "OPPO",                 label_ur: "اوپو" },
  { id: "vivo",     label_en: "Vivo",                 label_ur: "ویوو" },
  { id: "realme",   label_en: "Realme",               label_ur: "ریلمی" },
  { id: "pixel",    label_en: "Google Pixel",         label_ur: "گوگل پکسل" },
  { id: "oneplus",  label_en: "OnePlus",              label_ur: "ون پلس" },
  { id: "nothing",  label_en: "Nothing",              label_ur: "ناتھنگ" },
  { id: "infinix",  label_en: "Infinix",              label_ur: "انفنکس" },
  { id: "tecno",    label_en: "Tecno",                label_ur: "ٹیکنو" },
  { id: "motorola", label_en: "Motorola",             label_ur: "موٹرولا" },
  { id: "iphone",   label_en: "iPhone (iOS)",         label_ur: "آئی فون" },
  { id: "other",    label_en: "Other Android",        label_ur: "کوئی اور اینڈرائیڈ" },
];

/* ---------------- DEVICE CHECKS ----------------
   Each check has generic instructions (how_en / how_ur) that work on most Android.
   `paths` gives brand-specific settings paths where the wording differs enough to matter.
   iPhone uses the equivalent iOS setting where possible; some checks are Android-only. */
const CHECKS = [
  {
    id: "accessibility_unknown",
    severity: "critical", weight: 25,
    title_en: "An app you don't recognise has Accessibility Service switched on",
    title_ur: "کوئی نامعلوم ایپ ایکسیسیبیلیٹی سروس آن کیے ہوئے ہے",
    how_en: "Settings > Accessibility > Downloaded apps (or 'Installed services'). Turn off anything you did not install yourself. This is the single most common foothold for phone spying.",
    how_ur: "سیٹنگز > ایکسیسیبیلیٹی > ڈاؤن لوڈڈ ایپس۔ جو ایپ آپ نے خود انسٹال نہ کی ہو اسے بند کریں۔ فون جاسوسی کا سب سے عام راستہ یہی ہے۔",
    paths: {
      samsung:  { en: "Settings > Accessibility > Installed apps.", ur: "سیٹنگز > ایکسیسیبیلیٹی > انسٹالڈ ایپس۔" },
      xiaomi:   { en: "Settings > Additional settings > Accessibility > Downloaded apps.", ur: "سیٹنگز > اضافی سیٹنگز > ایکسیسیبیلیٹی > ڈاؤن لوڈڈ ایپس۔" },
      oppo:     { en: "Settings > Additional settings > Accessibility > Installed services.", ur: "سیٹنگز > اضافی سیٹنگز > ایکسیسیبیلیٹی > انسٹالڈ سروسز۔" },
      vivo:     { en: "Settings > Shortcut & accessibility > Accessibility > Downloaded apps.", ur: "سیٹنگز > شارٹ کٹ اینڈ ایکسیسیبیلیٹی > ڈاؤن لوڈڈ ایپس۔" },
      realme:   { en: "Settings > Additional settings > Accessibility > Installed services.", ur: "سیٹنگز > اضافی سیٹنگز > ایکسیسیبیلیٹی > انسٹالڈ سروسز۔" },
      pixel:    { en: "Settings > Accessibility > Installed apps.", ur: "سیٹنگز > ایکسیسیبیلیٹی > انسٹالڈ ایپس۔" },
      oneplus:  { en: "Settings > Additional settings > Accessibility > Installed services.", ur: "سیٹنگز > اضافی سیٹنگز > ایکسیسیبیلیٹی > انسٹالڈ سروسز۔" },
      infinix:  { en: "Settings > Additional settings > Accessibility > Downloaded services.", ur: "سیٹنگز > اضافی سیٹنگز > ایکسیسیبیلیٹی > ڈاؤن لوڈڈ سروسز۔" },
      tecno:    { en: "Settings > System > Accessibility > Downloaded services.", ur: "سیٹنگز > سسٹم > ایکسیسیبیلیٹی > ڈاؤن لوڈڈ سروسز۔" },
      motorola: { en: "Settings > Accessibility > Downloaded services.", ur: "سیٹنگز > ایکسیسیبیلیٹی > ڈاؤن لوڈڈ سروسز۔" },
      iphone:   { en: "Not applicable on iOS in the same way. Instead check Settings > General > VPN & Device Management for unknown profiles.", ur: "آئی فون پر یہ الگ ہے۔ اس کے بجائے سیٹنگز > جنرل > وی پی این اینڈ ڈیوائس مینجمنٹ میں نامعلوم پروفائل چیک کریں۔" },
    },
  },
  {
    id: "device_admin_unknown",
    severity: "critical", weight: 22,
    title_en: "An unknown app is registered as a Device Admin",
    title_ur: "کوئی نامعلوم ایپ ڈیوائس ایڈمن کے طور پر رجسٹرڈ ہے",
    how_en: "Settings > Security > Device admin apps. Revoke anything unfamiliar, then uninstall the app.",
    how_ur: "سیٹنگز > سیکیورٹی > ڈیوائس ایڈمن ایپس۔ نامانوس ایپ کی اجازت ہٹائیں اور اسے ان انسٹال کریں۔",
    paths: {
      samsung:  { en: "Settings > Biometrics and security > Other security settings > Device admin apps.", ur: "سیٹنگز > بایومیٹرکس اینڈ سیکیورٹی > اَدر سیکیورٹی سیٹنگز > ڈیوائس ایڈمن ایپس۔" },
      xiaomi:   { en: "Settings > Passwords & security > Privacy > Special permissions > Device admin apps.", ur: "سیٹنگز > پاس ورڈز اینڈ سیکیورٹی > پرائیویسی > اسپیشل پرمیشنز > ڈیوائس ایڈمن ایپس۔" },
      oppo:     { en: "Settings > Additional settings > Device & privacy > Device admin apps.", ur: "سیٹنگز > اضافی سیٹنگز > ڈیوائس اینڈ پرائیویسی > ڈیوائس ایڈمن ایپس۔" },
      vivo:     { en: "Settings > More settings > Security > Other security settings > Device admin apps.", ur: "سیٹنگز > مزید سیٹنگز > سیکیورٹی > اَدر سیکیورٹی سیٹنگز > ڈیوائس ایڈمن ایپس۔" },
      realme:   { en: "Settings > Additional settings > Device & privacy > Device admin apps.", ur: "سیٹنگز > اضافی سیٹنگز > ڈیوائس اینڈ پرائیویسی > ڈیوائس ایڈمن ایپس۔" },
      pixel:    { en: "Settings > Security & privacy > More security & privacy > Device admin apps.", ur: "سیٹنگز > سیکیورٹی اینڈ پرائیویسی > مزید سیکیورٹی اینڈ پرائیویسی > ڈیوائس ایڈمن ایپس۔" },
      iphone:   { en: "iOS equivalent: Settings > General > VPN & Device Management. Remove any profile you did not install.", ur: "آئی فون پر متبادل: سیٹنگز > جنرل > وی پی این اینڈ ڈیوائس مینجمنٹ۔ خود نہ لگائی گئی پروفائلز ہٹا دیں۔" },
    },
  },
  {
    id: "user_ca_cert",
    severity: "critical", weight: 22,
    title_en: "A certificate has been added by hand to your phone",
    title_ur: "کوئی سرٹیفکیٹ ہاتھ سے فون میں شامل کیا گیا ہے",
    how_en: "Settings > Security > Encryption & credentials > User credentials. Remove entries you did not add. These let someone read your encrypted traffic.",
    how_ur: "سیٹنگز > سیکیورٹی > انکرپشن اینڈ کریڈینشلز > یوزر کریڈینشلز۔ خود نہ لگائی ہوئی چیزیں ہٹا دیں۔",
    paths: {
      samsung:  { en: "Settings > Biometrics and security > Other security settings > User certificates.", ur: "سیٹنگز > بایومیٹرکس اینڈ سیکیورٹی > اَدر سیکیورٹی سیٹنگز > یوزر سرٹیفکیٹس۔" },
      xiaomi:   { en: "Settings > Passwords & security > Privacy > Encryption & credentials > User credentials.", ur: "سیٹنگز > پاس ورڈز اینڈ سیکیورٹی > پرائیویسی > انکرپشن اینڈ کریڈینشلز > یوزر کریڈینشلز۔" },
      pixel:    { en: "Settings > Security & privacy > More security & privacy > Encryption & credentials > User credentials.", ur: "سیٹنگز > سیکیورٹی اینڈ پرائیویسی > مزید سیکیورٹی اینڈ پرائیویسی > انکرپشن اینڈ کریڈینشلز > یوزر کریڈینشلز۔" },
      iphone:   { en: "Settings > General > VPN & Device Management, and Settings > General > About > Certificate Trust Settings.", ur: "سیٹنگز > جنرل > وی پی این اینڈ ڈیوائس مینجمنٹ، اور سیٹنگز > جنرل > اباؤٹ > سرٹیفکیٹ ٹرسٹ سیٹنگز۔" },
    },
  },
  {
    id: "call_forwarding",
    severity: "critical", weight: 22,
    title_en: "Calls are being forwarded to another number",
    title_ur: "کالیں کسی اور نمبر پر منتقل ہو رہی ہیں",
    how_en: "Dial ##002# on the keypad to cancel ALL forwarding, then change your SIM PIN. Forwarding is how OTP codes get stolen. To check current status first, dial *#21#.",
    how_ur: "کی پیڈ سے ##002# ڈائل کریں — تمام فارورڈنگ ہٹ جائے گی۔ پھر اپنا سم پن تبدیل کریں۔ موجودہ حالت دیکھنے کے لیے *#21# ڈائل کریں۔",
  },
  {
    id: "notification_listener",
    severity: "high", weight: 14,
    title_en: "An unknown app can read your notifications",
    title_ur: "کوئی نامعلوم ایپ آپ کی نوٹیفکیشنز پڑھ سکتی ہے",
    how_en: "Settings > Notifications > Device & app notifications (or 'Notification access'). Revoke unknown apps. Notification access exposes every OTP you receive.",
    how_ur: "سیٹنگز > نوٹیفکیشنز > نوٹیفکیشن ایکسیس۔ نامانوس ایپس کی اجازت ہٹائیں۔",
    paths: {
      samsung:  { en: "Settings > Notifications > Advanced settings > Notification access.", ur: "سیٹنگز > نوٹیفکیشنز > ایڈوانسڈ سیٹنگز > نوٹیفکیشن ایکسیس۔" },
      xiaomi:   { en: "Settings > Notifications > Special app access > Notification access.", ur: "سیٹنگز > نوٹیفکیشنز > اسپیشل ایپ ایکسیس > نوٹیفکیشن ایکسیس۔" },
      oppo:     { en: "Settings > Notification & Status Bar > Notification access.", ur: "سیٹنگز > نوٹیفکیشن اینڈ اسٹیٹس بار > نوٹیفکیشن ایکسیس۔" },
      pixel:    { en: "Settings > Notifications > Device & app notifications.", ur: "سیٹنگز > نوٹیفکیشنز > ڈیوائس اینڈ ایپ نوٹیفکیشنز۔" },
      iphone:   { en: "iOS does not expose a notification listener API; not directly applicable.", ur: "آئی فون پر یہ اس طرح موجود نہیں۔" },
    },
  },
  {
    id: "sideloaded_apps",
    severity: "high", weight: 12,
    title_en: "Apps installed from outside the Play Store",
    title_ur: "پلے سٹور کے علاوہ سے انسٹال کی گئی ایپس",
    how_en: "Uninstall APKs sent to you on WhatsApp. Turn off 'Install unknown apps' for every app in Settings > Apps > Special access.",
    how_ur: "واٹس ایپ پر بھیجی گئی اے پی کے ایپس ان انسٹال کریں۔ ہر ایپ کے لیے 'انسٹال ان نون ایپس' بند کریں۔",
    paths: {
      samsung:  { en: "Settings > Apps > (menu) > Special access > Install unknown apps.", ur: "سیٹنگز > ایپس > (مینو) > اسپیشل ایکسیس > انسٹال ان نون ایپس۔" },
      xiaomi:   { en: "Settings > Apps > Permissions > Install unknown apps.", ur: "سیٹنگز > ایپس > پرمیشنز > انسٹال ان نون ایپس۔" },
      iphone:   { en: "Not applicable — iOS only installs from the App Store unless a developer profile is trusted (see certificate check).", ur: "آئی فون پر یہ ممکن نہیں سوائے جب کوئی ڈویلپر پروفائل ٹرسٹ کی گئی ہو۔" },
    },
  },
  {
    id: "overlay_permission",
    severity: "high", weight: 12,
    title_en: "An unknown app can draw over other apps",
    title_ur: "کوئی نامعلوم ایپ دوسری ایپس کے اوپر ڈرا کر سکتی ہے",
    how_en: "Settings > Apps > Special access > Display over other apps. This permission is used to fake login screens.",
    how_ur: "سیٹنگز > ایپس > اسپیشل ایکسیس > ڈسپلے اوور اَدر ایپس۔ یہ اجازت لاگ ان سکرین کی نقل بنانے کے لیے استعمال ہوتی ہے۔",
    paths: {
      samsung:  { en: "Settings > Apps > (menu) > Special access > Appear on top.", ur: "سیٹنگز > ایپس > (مینو) > اسپیشل ایکسیس > اپیئر آن ٹاپ۔" },
      xiaomi:   { en: "Settings > Apps > Permissions > Other permissions > Display pop-up windows.", ur: "سیٹنگز > ایپس > پرمیشنز > اَدر پرمیشنز > ڈسپلے پاپ اپ ونڈوز۔" },
      iphone:   { en: "Not applicable — iOS does not permit apps to draw over other apps.", ur: "آئی فون پر ممکن نہیں — iOS اس اجازت کی اجازت نہیں دیتا۔" },
    },
  },
  {
    id: "rooted",
    severity: "high", weight: 14,
    title_en: "Phone is rooted or the bootloader is unlocked (iPhone: jailbroken)",
    title_ur: "فون روٹڈ ہے، بوٹ لوڈر اَن لاکڈ ہے، یا آئی فون جیل بریک ہے",
    how_en: "A rooted phone cannot be trusted with official accounts. Use an unmodified device for anything service-related.",
    how_ur: "روٹڈ فون پر سرکاری اکاؤنٹس محفوظ نہیں۔ سروس کے کاموں کے لیے غیر ترمیم شدہ فون استعمال کریں۔",
  },
  {
    id: "play_protect_off",
    severity: "medium", weight: 8,
    title_en: "Play Protect scanning is switched off",
    title_ur: "پلے پروٹیکٹ اسکیننگ بند ہے",
    how_en: "Play Store > profile picture > Play Protect > Settings > turn 'Scan apps with Play Protect' back on.",
    how_ur: "پلے سٹور > پروفائل > پلے پروٹیکٹ > سیٹنگز > 'اسکین ایپس ود پلے پروٹیکٹ' آن کریں۔",
    paths: {
      iphone: { en: "Not applicable on iOS.", ur: "آئی فون پر لاگو نہیں۔" },
    },
  },
  {
    id: "unknown_vpn",
    severity: "medium", weight: 10,
    title_en: "A VPN or proxy you did not set up is configured",
    title_ur: "کوئی وی پی این یا پراکسی سیٹ ہے جو آپ نے نہیں لگائی",
    how_en: "Settings > Connections > VPN. Remove profiles you did not create.",
    how_ur: "سیٹنگز > کنیکشنز > وی پی این۔ خود نہ بنائی گئی پروفائلز ہٹا دیں۔",
    paths: {
      samsung: { en: "Settings > Connections > More connection settings > VPN.", ur: "سیٹنگز > کنیکشنز > مزید کنیکشن سیٹنگز > وی پی این۔" },
      xiaomi:  { en: "Settings > Connection & sharing > VPN.", ur: "سیٹنگز > کنیکشن اینڈ شیئرنگ > وی پی این۔" },
      pixel:   { en: "Settings > Network & internet > VPN.", ur: "سیٹنگز > نیٹ ورک اینڈ انٹرنیٹ > وی پی این۔" },
      iphone:  { en: "Settings > General > VPN & Device Management > VPN.", ur: "سیٹنگز > جنرل > وی پی این اینڈ ڈیوائس مینجمنٹ > وی پی این۔" },
    },
  },
  {
    id: "usb_debugging",
    severity: "medium", weight: 6,
    title_en: "Developer options and USB debugging are on",
    title_ur: "ڈویلپر آپشنز اور یو ایس بی ڈیبگنگ آن ہیں",
    how_en: "If Developer options is visible in Settings, turn USB debugging off and disable the toggle at the top. Only turn back on if you are actively developing.",
    how_ur: "اگر سیٹنگز میں ڈویلپر آپشنز نظر آ رہی ہو تو یو ایس بی ڈیبگنگ بند کریں اور اوپر کا ٹوگل آف کریں۔",
    paths: {
      iphone: { en: "Not applicable on iOS.", ur: "آئی فون پر لاگو نہیں۔" },
    },
  },
  {
    id: "no_screen_lock",
    severity: "medium", weight: 10,
    title_en: "No screen lock, or a lock someone else knows",
    title_ur: "اسکرین لاک نہیں، یا لاک کسی اور کو معلوم ہے",
    how_en: "Set a 6-digit PIN or longer. Do not share it with anyone, including within the family.",
    how_ur: "کم از کم چھ ہندسوں کا پن یا اس سے لمبا لاک رکھیں۔ گھر میں بھی کسی کو نہ بتائیں۔",
  },
  {
    id: "no_2fa",
    severity: "medium", weight: 10,
    title_en: "WhatsApp two-step verification is off",
    title_ur: "واٹس ایپ ٹو سٹیپ ویریفکیشن بند ہے",
    how_en: "WhatsApp > Settings > Account > Two-step verification. Use a 6-digit code that is NOT your ATM PIN.",
    how_ur: "واٹس ایپ > سیٹنگز > اکاؤنٹ > ٹو سٹیپ ویریفکیشن آن کریں۔ ایسا کوڈ رکھیں جو اے ٹی ایم پن نہ ہو۔",
  },
  {
    id: "location_in_photos",
    severity: "medium", weight: 8,
    title_en: "Camera is saving GPS location into photos",
    title_ur: "کیمرہ تصاویر میں جی پی ایس لوکیشن محفوظ کر رہا ہے",
    how_en: "Open the Camera app > Settings > turn off 'Location tags' (or 'Save location'). Photos with GPS attached are an intelligence gift.",
    how_ur: "کیمرہ ایپ > سیٹنگز > 'لوکیشن ٹیگز' بند کریں۔",
  },
  {
    id: "public_profile_photo",
    severity: "medium", weight: 8,
    title_en: "Profile photo in uniform, visible to everybody, on any account",
    title_ur: "کسی بھی اکاؤنٹ پر وردی والی پروفائل تصویر جو سب کو نظر آتی ہے",
    how_en: "Change every profile photo now. Restrict WhatsApp/Instagram/Facebook profile photo visibility to contacts only.",
    how_ur: "ہر پروفائل تصویر ابھی تبدیل کریں۔ پروفائل تصویر صرف اپنے رابطوں تک محدود کریں۔",
  },

  /* ---- Military-specific additions ---- */

  {
    id: "official_docs_on_phone",
    severity: "critical", weight: 25,
    title_en: "Photos of official documents, notes, or presentations in the gallery",
    title_ur: "گیلری میں سرکاری دستاویزات، نوٹس یا پریزنٹیشنز کی تصاویر",
    how_en: "Do not delete first — hand the phone to the unit cyber cell today. Deletion leaves a recoverable copy on the phone and often in cloud backup, and destroys the audit record.",
    how_ur: "پہلے حذف نہ کریں — آج ہی فون یونٹ کی سائبر سیل کو دیں۔ حذف کرنے سے فون میں اور کلاؤڈ بیک اپ میں قابلِ بازیافت کاپی رہ جاتی ہے۔",
  },
  {
    id: "cloud_photo_backup",
    severity: "high", weight: 15,
    title_en: "Automatic cloud backup of your gallery is switched on",
    title_ur: "گیلری کا خودکار کلاؤڈ بیک اپ آن ہے",
    how_en: "Google Photos > profile > Photos settings > Backup > OFF. Also open Samsung Cloud / Xiaomi Cloud / OPPO Cloud settings and confirm gallery sync is off. Every photo taken with backup on is copied to a server you do not control.",
    how_ur: "گوگل فوٹوز > پروفائل > سیٹنگز > بیک اپ > آف کریں۔ سام سنگ کلاؤڈ / شیاؤمی کلاؤڈ کی سیٹنگز میں بھی گیلری سنک بند کریں۔ ہر تصویر خود بخود ایسے سرور پر جاتی ہے جو آپ کے قابو میں نہیں۔",
    paths: {
      iphone: { en: "iPhone: Settings > (your name) > iCloud > Photos > turn 'Sync this iPhone' OFF.", ur: "آئی فون: سیٹنگز > (آپ کا نام) > آئی کلاؤڈ > فوٹوز > 'اس آئی فون کو سنک کریں' آف کریں۔" },
    },
  },
  {
    id: "whatsapp_web_active",
    severity: "high", weight: 12,
    title_en: "A WhatsApp Web / linked device session is active",
    title_ur: "واٹس ایپ ویب / لنکڈ ڈیوائس سیشن فعال ہے",
    how_en: "WhatsApp > Settings > Linked devices. Log out any device you do not currently recognise or need. Any active session sees every message on your phone.",
    how_ur: "واٹس ایپ > سیٹنگز > لنکڈ ڈیوائسز۔ جو ڈیوائس ابھی درکار نہ ہو اسے لاگ آؤٹ کریں۔ فعال سیشن آپ کے ہر پیغام تک رسائی رکھتا ہے۔",
  },
  {
    id: "media_auto_download",
    severity: "medium", weight: 8,
    title_en: "WhatsApp auto-downloads photos and videos from strangers",
    title_ur: "واٹس ایپ اجنبیوں کی تصاویر اور ویڈیوز خود بخود ڈاؤن لوڈ کرتا ہے",
    how_en: "WhatsApp > Settings > Storage and data > Media auto-download > set Photos / Audio / Videos / Documents to Never on both mobile and Wi-Fi.",
    how_ur: "واٹس ایپ > سیٹنگز > اسٹوریج اینڈ ڈیٹا > میڈیا آٹو ڈاؤن لوڈ > تصاویر / آڈیو / ویڈیو / دستاویز کے لیے Never منتخب کریں (موبائل اور وائی فائی دونوں پر)۔",
  },
  {
    id: "personal_on_official",
    severity: "high", weight: 15,
    title_en: "Personal WhatsApp / Facebook / Gmail is logged in on an OFFICIAL device",
    title_ur: "سرکاری ڈیوائس پر ذاتی واٹس ایپ / فیس بک / جی میل لاگ ان ہے",
    how_en: "Log out of every personal account on the official device immediately. Personal accounts on official machines are the leak path in every direction. Ask the unit cyber cell for the current authorised configuration.",
    how_ur: "سرکاری ڈیوائس سے ہر ذاتی اکاؤنٹ فوراً لاگ آؤٹ کریں۔ سرکاری مشین پر ذاتی اکاؤنٹس ہر طرف سے رساؤ کا راستہ ہیں۔ مجاز ترتیب یونٹ کی سائبر سیل سے پوچھیں۔",
  },
  {
    id: "screen_mirroring",
    severity: "medium", weight: 8,
    title_en: "Screen mirroring / casting was left on and discoverable",
    title_ur: "اسکرین مررنگ / کاسٹنگ آن اور دستیاب چھوڑی گئی",
    how_en: "Turn off Smart View / Miracast / Chromecast when not in active use. Never leave it on in a public place or shared office; anyone on the same network may connect.",
    how_ur: "استعمال کے بعد اسمارٹ ویو / میرا کاسٹ / کروم کاسٹ بند کریں۔ عوامی جگہ یا مشترکہ دفتر میں آن نہ چھوڑیں؛ ایک ہی نیٹ ورک پر کوئی بھی جڑ سکتا ہے۔",
  },
  {
    id: "bluetooth_discoverable",
    severity: "medium", weight: 6,
    title_en: "Bluetooth is on and set to 'visible / discoverable' outside your vehicle or home",
    title_ur: "بلوٹوتھ آن اور گھر/گاڑی سے باہر بھی 'وزیبل' ہے",
    how_en: "Settings > Bluetooth > turn off when not paired. Do not accept file transfers from unknown devices. Bluetooth is a common entry point in cafes, airports, and markets.",
    how_ur: "سیٹنگز > بلوٹوتھ > جب استعمال میں نہ ہو تو بند کریں۔ نامعلوم ڈیوائسز سے فائل قبول نہ کریں۔",
  },
  {
    id: "location_always_on",
    severity: "medium", weight: 8,
    title_en: "Location services are always on and shared with many apps",
    title_ur: "لوکیشن سروسز ہر وقت آن اور کئی ایپس کو حاصل ہیں",
    how_en: "Settings > Location > review app permissions. Set to 'Only while using the app' for anything that does not need constant location. Turn Location off entirely when not needed.",
    how_ur: "سیٹنگز > لوکیشن > ایپ اجازتیں دیکھیں۔ جن کو ہمیشہ لوکیشن کی ضرورت نہیں انہیں 'صرف ایپ استعمال کرتے ہوئے' پر کریں۔ ضرورت نہ ہو تو لوکیشن مکمل بند کریں۔",
  },
];

const DISCLAIMER_EN =
  "This check looks for the common signs of phone compromise. A clear result does not " +
  "prove your phone is clean — professional spyware is built to hide from checks like " +
  "this one. If anything here is red, or you have reason to worry, hand the phone to " +
  "the unit Cyber Cell for offline examination. Do not factory reset first.";

const DISCLAIMER_UR =
  "یہ جانچ فون کی کمزوریوں کی عام علامات دیکھتی ہے۔ صاف نتیجہ اس بات کی ضمانت نہیں کہ " +
  "فون بالکل محفوظ ہے — پیشہ ورانہ جاسوسی سافٹ ویئر ایسی جانچوں سے چھپنے کے لیے بنایا " +
  "جاتا ہے۔ کوئی چیز سرخ ہو تو فون یونٹ کی سائبر سیل کو معائنے کے لیے دیں، فیکٹری ری " +
  "سیٹ سے پہلے نہیں۔";
