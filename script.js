/* EDITABLE SITE CONFIG: replace placeholder contact details and profile data before launch. */
const SITE_CONFIG = {
  contact: {
    address: "Old Cairo, Egypt",
    email: "al.hidayah.institute26@gmail.com",
    phone: "+20 12 07216826",
    whatsapp: "https://wa.me/201207216826"
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61584732790938",
    youtube: "#",
    instagram: "#",
    twitter: "#"
  },
  teachers: [
    { name: "শিক্ষকের নাম ১", subject: "তাজবিদ কিরাত", specialty: "বিশেষজ্ঞতার বিষয়", qualification: "যোগ্যতা / প্রতিষ্ঠানের নাম", students: "শিক্ষার্থী সংখ্যা" },
    { name: "শিক্ষকের নাম ২", subject: "ইসলামী স্টাডিজ", specialty: "বিশেষজ্ঞতার বিষয়", qualification: "যোগ্যতা / প্রতিষ্ঠানের নাম", students: "শিক্ষার্থী সংখ্যা" },
    { name: "শিক্ষকের নাম ৩", subject: "কুরআন হাদিস", specialty: "বিশেষজ্ঞতার বিষয়", qualification: "যোগ্যতা / প্রতিষ্ঠানের নাম", students: "শিক্ষার্থী সংখ্যা" }
  ]
};

const REVIEWS = [
  { text: "শিক্ষকের ধৈর্য আর সহজ করে বোঝানোর ধরন আমার কুরআন শেখার আগ্রহ আরও বাড়িয়ে দিয়েছে।", name: "সামিরা আক্তার", course: "কুরআন শিক্ষা", date: "১২ আগস্ট ২০২৬", initial: "স" },
  { text: "নিয়মিত ক্লাসে তাজবিদের নিয়মগুলো সুন্দরভাবে শিখতে পেরেছি। অনলাইন ক্লাসও খুব সহজ।", name: "আফনান রহমান", course: "তাজবিদ", date: "০৪ জুলাই ২০২৬", initial: "আ" },
  { text: "আমার সন্তানের জন্য ক্লাসের সময় ঠিক করে নেওয়া যায়। শিক্ষক খুব আন্তরিকভাবে পড়ান।", name: "নুসরাত জাহান", course: "হিফজুল কোরআন", date: "২১ জুন ২০২৬", initial: "ন" },
  { text: "ইসলামি বিষয়গুলো দৈনন্দিন জীবনের উদাহরণ দিয়ে শেখানো হয়, তাই মনে রাখা সহজ লাগে।", name: "রায়হান কবির", course: "ইসলামী শিক্ষা", date: "১৬ মে ২০২৬", initial: "র" }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const LANGUAGE_OPTIONS = { bn: "বাংলা", en: "English", ar: "العربية" };
const COURSE_CATALOG = {
  hifz: "হিফজুল কোরআন",
  recitation: "সহীহ কুরআন শিক্ষা",
  "islamic-studies": "ইসলামী শিক্ষা ও মূল্যবোধ"
};
const COURSE_STORAGE_KEY = "site-course-catalog";
const TEACHER_STORAGE_KEY = "site-teacher-profiles";
const TEACHER_IMAGE_MAX_BYTES = 512 * 1024;
const TRIAL_REQUESTS_STORAGE_KEY = "site-trial-requests";
const TRANSLATIONS = {
  "মূল কনটেন্টে যান": ["Skip to content", "تخطَّ إلى المحتوى"],
  "মেনু খুলুন": ["Open menu", "افتح القائمة"],
  "মেনু বন্ধ করুন": ["Close menu", "أغلق القائمة"],
  "প্রধান নেভিগেশন": ["Main navigation", "التنقل الرئيسي"],
  "Al Hidayah Institute — হোম": ["Al Hidayah Institute — Home", "معهد الهداية — الرئيسية"],
  "হোম": ["Home", "الرئيسية"],
  "আমাদের সম্পর্কে": ["About", "من نحن"],
  "শিক্ষকবৃন্দ": ["Teachers", "المعلمون"],
  "কোর্সসমূহ": ["Courses", "الدورات"],
  "সহীহ কুরআন শিক্ষা": ["Quran recitation", "التلاوة الصحيحة للقرآن"],
  "ইসলামী শিক্ষা ও মূল্যবোধ": ["Islamic studies and values", "الدراسات والقيم الإسلامية"],
  "হিফজুল কোরআন": ["Quran memorization", "حفظ القرآن الكريم"],
  "ফ্রি ক্লাস নিন": ["Book a free class", "احجز درسًا مجانيًا"],
  "আল হিদায়াহ ইনস্টিটিউট": ["Al-Hidayah Institute", "معهد الهداية"],
  "আল-হিদায়াহ": ["Al-Hidayah", "الهداية"],
  "কুরআন শিক্ষা,": ["Quran learning,", "تعليم القرآن،"],
  "এখন আপনার": ["is now within your", "أصبح الآن في متناول"],
  "হাতের কাছেই !": ["reach!", "يديك!"],
  "আপনার কুরআন শিক্ষার যাত্রা শুরু হোক আজই। ঘরে বসেই অভিজ্ঞ আলেমদের সাথে।": ["Start your Quran learning journey today with experienced scholars, from the comfort of home.", "ابدأ رحلتك في تعلّم القرآن اليوم مع علماء ذوي خبرة وأنت في منزلك."],
  "যত্ন সহকারে পাঠদান !": ["Caring, personalized teaching", "تعليم باهتمام ورعاية"],
  "অতি সহজ পদ্ধতিতে পাঠদান !": ["Easy-to-follow lessons", "دروس سهلة المتابعة"],
  "অভিজ্ঞ শিক্ষক-শিক্ষিকা দ্ধারা পরিচালিত ।": ["Led by experienced teachers.", "بإشراف معلمين ذوي خبرة."],
  "ফ্রি ট্রায়াল ক্লাসে অংশ নিন": ["Join a free trial class", "انضم إلى درس تجريبي مجاني"],
  "কোর্সগুলো দেখুন-": ["View courses", "استعرض الدورات"],
  "আমাদের সেবা সমূহ :": ["Our services", "خدماتنا"],
  "শিখুন কুরআন,": ["Learn the Quran,", "تعلّم القرآن،"],
  "বুঝে নিন": ["understand", "وافهمه"],
  "জীবন": ["for life", "للحياة"],
  "সঠিক তাজবিদ, অর্থ ও তাফসীর—ঘরে বসেই অভিজ্ঞ আলেমদের সাথে। আপনার কুরআন শিক্ষার যাত্রা শুরু হোক আজই।": ["Learn the Quran with correct Tajweed, meaning, and Tafsir from experienced scholars, from home. Begin your learning journey today.", "تعلّم القرآن بالتجويد الصحيح والمعاني والتفسير مع علماء ذوي خبرة، من منزلك. ابدأ رحلتك التعليمية اليوم."],
  "একান্ত যত্নে পাঠদান": ["Personalized teaching", "تعليم باهتمام فردي"],
  "সহজে কুরআন শিক্ষা": ["Quran learning made easy", "تعلّم القرآن بسهولة"],
  "অভিজ্ঞ শিক্ষক-শিক্ষিকা": ["Experienced teachers", "معلمون ذوو خبرة"],
  "ফ্রি ট্রায়াল ক্লাস নিন": ["Book a free trial", "احجز درسًا تجريبيًا مجانيًا"],
  "কোর্স ব্রাউজ করুন": ["Browse courses", "تصفّح الدورات"],
  "কেন আমরা?": ["Why us?", "لماذا نحن؟"],
  "কেন আমাদের": ["Why", "لماذا"],
  "বেছে নেবেন?": ["choose us?", "تختارنا؟"],
  "আমরা বিশ্বাস করি, সঠিক শিক্ষাই পারে জীবন বদলে দিতে। আমাদের বিশেষ বৈশিষ্ট্যগুলো জেনে নিন।": ["We believe the right education can change lives. Discover what makes us different.", "نؤمن بأن التعليم الصحيح قادر على تغيير الحياة. اكتشف ما يميزنا."],
  "কুরআন শিক্ষার একটি অনলাইন প্ল্যাটফর্ম। সঠিক তাজবিদ, অর্থ ও তাফসীর— ঘরে বসেই অভিজ্ঞ আলেমদের সাথে।": ["An online platform for Quran learning. Study Tajweed, meaning, and Tafsir with experienced scholars from home.", "منصة لتعليم القرآن. تعلّم التجويد والمعاني والتفسير مع علماء ذوي خبرة من منزلك."],
  "শিক্ষার্থীর বয়স, বর্তমান স্তর এবং শেখার লক্ষ্য অনুযায়ী কোর্স বেছে নিন।": ["Choose a course based on the student's age, current level, and learning goals.", "اختر دورة تناسب عمر الطالب ومستواه الحالي وأهدافه التعليمية."],
  "সহিশুদ্ধভাবে কুরআন শিক্ষা": ["Learn to recite the Quran correctly", "تعلّم تلاوة القرآن تلاوة صحيحة"],
  "কুরআনের প্রতিটি আয়াত সঠিক উচ্চারণ ও অর্থসহ শিখুন।": ["Learn every verse of the Quran with correct pronunciation and meaning.", "تعلّم آيات القرآن مع النطق الصحيح والمعاني."],
  "অভিজ্ঞ আলেমদের সান্নিধ্য": ["Learn from experienced scholars", "تعلّم على أيدي علماء ذوي خبرة"],
  "ইজাযাতপ্রাপ্ত শিক্ষকদের কাছ থেকে সরাসরি শিক্ষা গ্রহণ করুন।": ["Learn directly from qualified teachers.", "تعلّم مباشرةً على أيدي معلمين مؤهلين."],
  "লাইভ ইন্টারঅ্যাকটিভ ক্লাস": ["Live interactive classes", "دروس مباشرة وتفاعلية"],
  "ঘরে বসেই প্রশ্ন করুন, আলোচনা করুন, শিক্ষকের সাথে যুক্ত থাকুন।": ["Ask questions, discuss, and connect with your teacher from home.", "اطرح الأسئلة وناقش وتواصل مع معلمك من المنزل."],
  "স্বীকৃত সনদপত্র": ["Recognized certificates", "شهادات معتمدة"],
  "কোর্স শেষে অংশগ্রহণ ও দক্ষতার স্বীকৃতি পাবেন।": ["Receive recognition for your participation and skills when you complete a course.", "احصل على شهادة تقدير لمشاركتك ومهاراتك عند إتمام الدورة."],
  "আমাদের কোর্সসমূহ": ["Our courses", "دوراتنا"],
  "কুরআন শিক্ষার": ["Quran learning:", "تعليم القرآن:"],
  "পূর্ণাঙ্গ কোর্স": ["complete courses", "دورات متكاملة"],
  "সঠিক তাজবিদ, অর্থ ও তাফসীর—ঘরে বসেই অভিজ্ঞ আলেমদের সাথে।": ["Learn Tajweed, meaning, and Tafsir with experienced scholars from home.", "تعلّم التجويد والمعاني والتفسير مع علماء ذوي خبرة من منزلك."],
  "হিফজুল কোরআন": ["Quran memorization", "حفظ القرآن الكريم"],
  "সহীহ কুরআন শিক্ষা": ["Correct Quran recitation", "التلاوة الصحيحة للقرآن"],
  "ইসলামী শিক্ষা ও মূল্যবোধ": ["Islamic studies and values", "الدراسات والقيم الإسلامية"],
  "৪ বছরের ওপরের শিশু থেকে যেকোনো বয়সের নারী-পুরুষের জন্য": ["For children aged 4+ and learners of all ages", "للأطفال من عمر ٤ سنوات وللمتعلمين من جميع الأعمار"],
  "৬ বছরের ওপরের শিশু থেকে যেকোনো বয়সের সকলের জন্য": ["For children aged 6+ and learners of all ages", "للأطفال من عمر ٦ سنوات وللمتعلمين من جميع الأعمار"],
  "মাখরাজ, তাজবিদ ও সিফাত": ["Makharij, Tajweed, and Sifat", "المخارج والتجويد والصفات"],
  "নাজরানা ও কুরআন মুখস্থ": ["Quran reading and memorization", "قراءة القرآن وحفظه"],
  "মাসনুন দোয়া": ["Prophetic supplications", "الأدعية النبوية"],
  "প্রয়োজনীয় আয়াত ও সূরা": ["Essential verses and surahs", "الآيات والسور المهمة"],
  "প্রয়োজনীয় মাসআলা-মাসায়েল": ["Essential Islamic rulings", "الأحكام الشرعية المهمة"],
  "২৪/৭ WhatsApp সহায়তা": ["24/7 WhatsApp support", "دعم عبر واتساب على مدار الساعة"],
  "আরবি হরফ ও মাখরাজ": ["Arabic letters and pronunciation points", "الحروف العربية ومخارجها"],
  "কায়দা ও আমপারা": ["Qaida and Amma Juz", "القاعدة وجزء عمّ"],
  "তাজবিদ ও কুরআন পাঠ": ["Tajweed and Quran recitation", "التجويد وتلاوة القرآن"],
  "ইসলামী আকিদাহ": ["Islamic creed", "العقيدة الإسلامية"],
  "ফিকহ ও শরীয়াহ": ["Fiqh and Sharia", "الفقه والشريعة"],
  "বেসিক আরবি ভাষা": ["Basic Arabic", "اللغة العربية الأساسية"],
  "৪০ হাদীস মুখস্থ": ["Memorize 40 Hadith", "حفظ أربعين حديثًا"],
  "মাসনুন দোয়া ও নির্বাচিত সূরা": ["Prophetic supplications and selected surahs", "الأدعية النبوية وسور مختارة"],
  "শুরু করুন": ["Get started", "ابدأ"],
  "অধিক জনপ্রিয়": ["Most popular", "الأكثر شيوعًا"],
  "সব কোর্স দেখুন": ["View all courses", "عرض جميع الدورات"],
  "আমাদের শিক্ষকবৃন্দ": ["Our teachers", "معلمونا"],
  "অভিজ্ঞ": ["Experienced", "ذوو خبرة"],
  "ইজাযাতপ্রাপ্ত ও অভিজ্ঞ আলেমদের কাছ থেকে সরাসরি শিক্ষা গ্রহণ করুন।": ["Learn directly from qualified and experienced scholars.", "تعلّم مباشرةً على أيدي علماء مؤهلين وذوي خبرة."],
  "ইজাযাতপ্রাপ্ত ও অভিজ্ঞ আলেমদের কাছ থেকে সরাসরি শিক্ষা গ্রহণ করুন। নিচের প্রোফাইলগুলো নমুনা; প্রকাশের আগে প্রকৃত তথ্য দিয়ে হালনাগাদ করুন।": ["Learn directly from qualified and experienced scholars. The profiles below are samples; replace them with verified information before publishing.", "تعلّم مباشرةً على أيدي علماء مؤهلين وذوي خبرة. الملفات أدناه نماذج؛ استبدلها بمعلومات موثقة قبل النشر."],
  "নিচের প্রোফাইলগুলো নমুনা; প্রকাশের আগে প্রকৃত তথ্য দিয়ে হালনাগাদ করুন।": ["The profiles below are samples; replace them with verified information before publishing.", "الملفات التعريفية أدناه نماذج؛ يرجى استبدالها بمعلومات موثقة قبل النشر."],
  "তাজবিদ কিরাত": ["Tajweed and Qira'at", "التجويد والقراءات"],
  "ইসলামী স্টাডিজ": ["Islamic studies", "الدراسات الإسلامية"],
  "কুরআন হাদিস": ["Quran and Hadith", "القرآن والحديث"],
  "শিক্ষকের নাম ১": ["Teacher 1", "المعلم الأول"],
  "শিক্ষকের নাম ২": ["Teacher 2", "المعلم الثاني"],
  "শিক্ষকের নাম ৩": ["Teacher 3", "المعلم الثالث"],
  "শিক্ষকের নাম": ["Teacher name", "اسم المعلم"],
  "বিশেষজ্ঞতার বিষয়": ["Area of expertise", "مجال التخصص"],
  "যোগ্যতা / প্রতিষ্ঠানের নাম": ["Qualification / institution", "المؤهل / اسم المؤسسة"],
  "শিক্ষার্থী সংখ্যা": ["Student count", "عدد الطلاب"],
  "বিশেষজ্ঞ": ["Specialist", "متخصص"],
  "প্রোফাইল দেখুন": ["View profile", "عرض الملف الشخصي"],
  "সব শিক্ষক দেখুন": ["Meet all teachers", "عرض جميع المعلمين"],
  "শিক্ষার্থীদের মতামত": ["Student testimonials", "آراء الطلاب"],
  "আমাদের শিক্ষার্থীরা": ["Our students", "طلابنا"],
  "কী বলছে": ["say", "ماذا يقولون"],
  "তাদের অভিজ্ঞতা থেকে জেনে নিন আমাদের কোর্স কেমন।": ["Hear what our students think about their courses.", "تعرّف على دوراتنا من خلال تجارب طلابنا."],
  "শিক্ষকের ধৈর্য আর সহজ করে বোঝানোর ধরন আমার কুরআন শেখার আগ্রহ আরও বাড়িয়ে দিয়েছে।": ["My teacher's patience and clear explanations have made me even more eager to learn the Quran.", "زاد صبر معلمي وشرحه الواضح من حماسي لتعلّم القرآن."],
  "নিয়মিত ক্লাসে তাজবিদের নিয়মগুলো সুন্দরভাবে শিখতে পেরেছি। অনলাইন ক্লাসও খুব সহজ।": ["Regular classes helped me learn Tajweed rules clearly. Online lessons are easy to follow.", "ساعدتني الدروس المنتظمة على تعلّم أحكام التجويد بوضوح، والدروس عبر الإنترنت سهلة جدًا."],
  "আমার সন্তানের জন্য ক্লাসের সময় ঠিক করে নেওয়া যায়। শিক্ষক খুব আন্তরিকভাবে পড়ান।": ["We can arrange class times for my child, and the teacher is very caring.", "يمكننا تنسيق مواعيد الدروس لطفلي، والمعلم يدرّس باهتمام كبير."],
  "ইসলামি বিষয়গুলো দৈনন্দিন জীবনের উদাহরণ দিয়ে শেখানো হয়, তাই মনে রাখা সহজ লাগে।": ["Islamic topics are taught with everyday examples, which makes them easy to remember.", "تُشرح الموضوعات الإسلامية بأمثلة من الحياة اليومية، مما يجعل تذكرها أسهل."],
  "সামিরা আক্তার": ["Samira Akter", "سميرة أكتار"],
  "আফনান রহমান": ["Afnan Rahman", "أفنان رحمن"],
  "নুসরাত জাহান": ["Nusrat Jahan", "نصرت جهان"],
  "রায়হান কবির": ["Rayhan Kabir", "ريحان كبير"],
  "কুরআন শিক্ষা": ["Quran learning", "تعليم القرآن"],
  "তাজবিদ": ["Tajweed", "التجويد"],
  "ইসলামী শিক্ষা": ["Islamic studies", "الدراسات الإسلامية"],
  "আগের মতামত": ["Previous testimonial", "الرأي السابق"],
  "পরের মতামত": ["Next testimonial", "الرأي التالي"],
  "মতামতের স্লাইড নির্দেশক": ["Testimonial slide controls", "مؤشرات آراء الطلاب"],
  "নমুনা মতামত — প্রকাশের আগে প্রকৃত শিক্ষার্থীর অনুমতি নিয়ে প্রতিস্থাপন করুন।": ["Sample testimonials — replace with approved testimonials from real students before publishing.", "آراء نموذجية — استبدلها بآراء طلاب حقيقيين بعد الحصول على موافقتهم قبل النشر."],
  "দ্রুত লিংক": ["Quick links", "روابط سريعة"],
  "যোগাযোগ": ["Contact", "اتصل بنا"],
  "আপডেট পান": ["Get updates", "احصل على التحديثات"],
  "নতুন কোর্স, অফার ও আপডেট পেতে আপনার ইমেইল দিন।": ["Subscribe for new courses, offers, and updates.", "اشترك لتصلك الدورات الجديدة والعروض والتحديثات."],
  "আপনার ইমেইল": ["Your email", "بريدك الإلكتروني"],
  "সাবস্ক্রাইব": ["Subscribe", "اشترك"],
  "© 2026 Al Hidayah Institute. সর্বস্বত্ব সংরক্ষিত.": ["© 2026 Al Hidayah Institute. All rights reserved.", "© 2026 معهد الهداية. جميع الحقوق محفوظة."],
  "Design & Development by Walid Khan": ["Design & Development by Walid Khan", "التصميم والتطوير بواسطة Walid Khan"],
  "আমাদের সম্পর্কে": ["About us", "من نحن"],
  "আমাদের": ["About", "من"],
  "সম্পর্কে": ["us", "نحن"],
  "আল হিদায়াহ ইনস্টিটিউট একটি অনলাইন শিক্ষার উদ্যোগ। আমাদের লক্ষ্য হলো শিশু ও প্রাপ্তবয়স্কদের জন্য যত্নশীল শিক্ষকের সহায়তায় কুরআন পড়া, তাজবিদ, তাফসীর ও ইসলামি জ্ঞান অর্জনের সুযোগ তৈরি করা।": ["Al-Hidayah Institute is an online learning initiative. Our goal is to help children and adults learn Quran recitation, Tajweed, Tafsir, and Islamic knowledge with caring teachers.", "معهد الهداية مبادرة تعليمية عبر الإنترنت. نهدف إلى إتاحة تعلم تلاوة القرآن والتجويد والتفسير والمعارف الإسلامية للأطفال والبالغين مع معلمين مهتمين."],
  "শিক্ষার্থীর বর্তমান স্তর, সময় এবং শেখার লক্ষ্য বুঝে পাঠের পরিকল্পনা সাজানো হয়। ঘরে বসে অনলাইনে শিক্ষকের সঙ্গে সরাসরি ক্লাসে প্রশ্ন করা, অনুশীলন করা এবং শেখার অগ্রগতি নিয়ে কথা বলা যায়।": ["Lessons are planned around each student's current level, schedule, and goals. Join live online classes from home to ask questions, practise, and discuss your progress with a teacher.", "نخطط للدروس وفق مستوى الطالب وجدوله وأهدافه. انضم إلى دروس مباشرة عبر الإنترنت من المنزل لطرح الأسئلة والتدرب ومناقشة تقدمك مع المعلم."],
  "কোর্স, পাঠের সময় এবং শিক্ষকের বিষয়ে জানতে আমাদের": ["To learn about courses, schedules, and teachers,", "للاستفسار عن الدورات والمواعيد والمعلمين،"],
  "ফ্রি ক্লাসের জন্য যোগাযোগ করুন ": ["contact us for a free class ", "تواصل معنا لحجز درس مجاني "],
  "ফ্রি ক্লাসের জন্য যোগাযোগ করুন →": ["Contact us to book a free class →", "تواصل معنا لحجز درس مجاني →"],
  "বিনামূল্যে পরিচিতিমূলক পাঠ": ["Free introductory lesson", "درس تعريفي مجاني"],
  "ফ্রি ট্রায়াল": ["Free trial", "درس تجريبي مجاني"],
  "ক্লাস": ["class", ""],
  "তথ্য পূরণ করে WhatsApp-এ পাঠান।": ["Fill in your details and send them via WhatsApp.", "أدخل بياناتك وأرسلها عبر واتساب."],
  "আপনার তথ্য দিন। এটি একটি নমুনা বুকিং ফর্ম—ফর্ম জমা দিলে তথ্য কোথাও পাঠানো বা সংরক্ষণ করা হবে না।": ["Enter your details. This is a sample booking form; submissions are not sent or stored.", "أدخل بياناتك. هذا نموذج تجريبي للحجز؛ لن يتم إرسال المعلومات أو حفظها."],
  "পূর্ণ নাম": ["Full name", "الاسم الكامل"],
  "ফোন নম্বর": ["Phone number", "رقم الهاتف"],
  "বয়স": ["Age", "العمر"],
  "পছন্দের কোর্স": ["Preferred course", "الدورة المفضلة"],
  "কোর্স নির্বাচন করুন": ["Select a course", "اختر دورة"],
  "আরবি ভাষা": ["Arabic language", "اللغة العربية"],
  "ফ্রি ট্রায়াল বুক করুন": ["Book a free trial", "احجز درسًا تجريبيًا مجانيًا"],
  "ধন্যবাদ! এটি একটি নমুনা ফর্ম; সাবস্ক্রিপশন সংরক্ষিত হয়নি।": ["Thank you! This is a sample form; your subscription was not saved.", "شكرًا لك! هذا نموذج تجريبي؛ لم يتم حفظ اشتراكك."],
  "ধন্যবাদ! এটি একটি নমুনা ফর্ম; আপনার তথ্য পাঠানো হয়নি।": ["Thank you! This is a sample form; your information was not sent.", "شكرًا لك! هذا نموذج تجريبي؛ لم يتم إرسال معلوماتك."],
  "মতামত ": ["Testimonial ", "الرأي "],
  "৫ এর মধ্যে ৫ তারকা": ["5 out of 5 stars", "٥ من ٥ نجوم"],
  "Facebook": ["Facebook", "فيسبوك"],
  "YouTube": ["YouTube", "يوتيوب"],
  "Instagram": ["Instagram", "إنستغرام"],
  "Twitter বা X": ["Twitter / X", "تويتر / إكس"],
  "WhatsApp-এ যোগাযোগ করুন": ["Contact us on WhatsApp", "تواصل معنا عبر واتساب"],
  "শিক্ষকের প্রতীকী ছবি": ["Illustrative teacher portrait", "صورة رمزية للمعلم"],
  "বই নিয়ে পড়াশোনা করছে এমন শিক্ষার্থীর একটি রঙিন ইলাস্ট্রেশন": ["Illustration of a student studying with a book", "رسم توضيحي لطالب يدرس مع كتاب"],
  "হালকা থিম চালু করুন": ["Switch to light theme", "التبديل إلى المظهر الفاتح"],
  "গাঢ় থিম চালু করুন": ["Switch to dark theme", "التبديل إلى المظهر الداكن"],
  "Language": ["Language", "اللغة"],
  "অ্যাডমিন লগইন": ["Admin login", "دخول المسؤول"],
  "অ্যাডমিন": ["Admin", "المسؤول"],
  "ড্যাশবোর্ড": ["Dashboard", "dashboard"],
  "লগইন": ["Login", "المسؤول"],
  "আপনার তথ্য দিন। জমা দেওয়া বুকিং এই ব্রাউজারে সংরক্ষিত হবে এবং অ্যাডমিন ড্যাশবোর্ডে দেখা যাবে।": ["Enter your details. Your booking will be saved in this browser and shown in the admin dashboard.", "أدخل بياناتك. سيُحفظ طلبك في هذا المتصفح وسيظهر في لوحة تحكم المسؤول."],
  "ইউজারনেম": ["Username", "اسم المستخدم"],
  "পাসওয়ার্ড": ["Password", "كلمة المرور"],
  "লগইন করুন": ["Log in", "تسجيل الدخول"],
  "লগইন সফল হয়েছে।": ["Login successful.", "تم تسجيل الدخول بنجاح."],
  "ইউজারনেম অথবা পাসওয়ার্ড সঠিক নয়।": ["The username or password is incorrect.", "اسم المستخدم أو كلمة المرور غير صحيحة."],
  "হোমে ফিরে যান": ["Return home", "العودة إلى الرئيسية"],
  "কোর্স পরিচালনা": ["Manage courses", "إدارة الدورات"],
  "কোর্সের নাম ও মূল্য হালনাগাদ করুন। সেভ করলে পাবলিক হোমপেজ ও কোর্স পেজে পরিবর্তনগুলো দেখা যাবে।": ["Update course names and prices. Saved changes appear on the public homepage and courses page.", "حدّث أسماء الدورات وأسعارها. ستظهر التغييرات المحفوظة على الصفحة الرئيسية وصفحة الدورات."],
  "পরিবর্তনগুলো এই ব্রাউজারেই সংরক্ষিত হবে।": ["Changes are saved in this browser only.", "يتم حفظ التغييرات في هذا المتصفح فقط."],
  "কোর্সের নাম": ["Course name", "اسم الدورة"],
  "মূল্য (ঐচ্ছিক)": ["Price (optional)", "السعر (اختياري)"],
  "মূল্য ও মুদ্রা লিখুন, যেমন: $25 / মাস": ["Enter price and currency, e.g. $25 / month", "أدخل السعر والعملة، مثال: ٢٥ دولارًا / شهريًا"],
  "কোর্স আপডেট করুন": ["Save course updates", "حفظ تحديثات الدورات"],
  "কোর্সগুলো সফলভাবে আপডেট হয়েছে।": ["Courses updated successfully.", "تم تحديث الدورات بنجاح."],
  "প্রতিটি কোর্সের নাম লিখুন।": ["Enter a name for each course.", "أدخل اسمًا لكل دورة."],
  "কোর্সের মূল্য": ["Course price", "سعر الدورة"],
  "শিক্ষক পরিচালনা": ["Manage teachers", "إدارة المعلمين"],
  "শিক্ষকের তথ্য ও ছবি হালনাগাদ করুন। সেভ করলে হোমপেজ ও শিক্ষক পেজে পরিবর্তনগুলো দেখা যাবে।": ["Update teacher details and photos. Saved changes appear on the homepage and teachers page.", "حدّث معلومات المعلمين وصورهم. ستظهر التغييرات المحفوظة على الصفحة الرئيسية وصفحة المعلمين."],
  "শিক্ষক": ["Teacher", "المعلم"],
  "শিক্ষক ১": ["Teacher 1", "المعلم ١"],
  "শিক্ষক ২": ["Teacher 2", "المعلم ٢"],
  "শিক্ষক ৩": ["Teacher 3", "المعلم ٣"],
  "নাম": ["Name", "الاسم"],
  "বিষয়": ["Subject", "المادة"],
  "বিশেষজ্ঞতা": ["Specialty", "التخصص"],
  "যোগ্যতা": ["Qualification", "المؤهل"],
  "শিক্ষার্থীর সংখ্যা": ["Student count", "عدد الطلاب"],
  "ছবি আপলোড (PNG, JPG বা WebP; সর্বোচ্চ ৫১২ KB)": ["Upload photo (PNG, JPG, or WebP; up to 512 KB)", "ارفع صورة (PNG أو JPG أو WebP؛ بحد أقصى ٥١٢ كيلوبايت)"],
  "ছবি সরান": ["Remove photo", "إزالة الصورة"],
  "শিক্ষক আপডেট করুন": ["Save teacher updates", "حفظ تحديثات المعلمين"],
  "শিক্ষকদের তথ্য সফলভাবে আপডেট হয়েছে।": ["Teacher profiles updated successfully.", "تم تحديث ملفات المعلمين بنجاح."],
  "প্রতিটি শিক্ষকের নাম লিখুন।": ["Enter a name for each teacher.", "أدخل اسمًا لكل معلم."],
  "শুধু PNG, JPG বা WebP ছবি আপলোড করা যাবে।": ["Only PNG, JPG, or WebP images can be uploaded.", "يمكن رفع صور PNG أو JPG أو WebP فقط."],
  "ছবির আকার ৫১২ KB বা এর কম হতে হবে।": ["The image must be 512 KB or smaller.", "يجب ألا يتجاوز حجم الصورة ٥١٢ كيلوبايت."],
  "ছবি পড়া যায়নি। অন্য একটি ছবি চেষ্টা করুন।": ["The image could not be read. Try another photo.", "تعذرت قراءة الصورة. جرّب صورة أخرى."],
  "শিক্ষকের ছবি": ["Teacher photo", "صورة المعلم"],
  "পরিবর্তন সংরক্ষণ করা যায়নি। ছবির আকার কমিয়ে আবার চেষ্টা করুন।": ["Changes could not be saved. Reduce the photo size and try again.", "تعذر حفظ التغييرات. قلل حجم الصورة ثم حاول مرة أخرى."],
  "ফ্রি ট্রায়াল অনুরোধ": ["Free trial requests", "طلبات الدروس التجريبية"],
  "ওয়েবসাইটের ফ্রি ট্রায়াল ফর্ম থেকে জমা দেওয়া তথ্য এখানে দেখা যাবে।": ["Submissions from the website's free-trial form will appear here.", "ستظهر هنا الطلبات المقدمة عبر نموذج الدروس التجريبية بالموقع."],
  "অনুরোধগুলো এই ব্রাউজারেই সংরক্ষিত হবে।": ["Requests are stored in this browser only.", "تُحفظ الطلبات في هذا المتصفح فقط."],
  "এখনও কোনো ফ্রি ট্রায়াল অনুরোধ জমা পড়েনি।": ["No free trial requests have been submitted yet.", "لم يتم تقديم أي طلب درس تجريبي حتى الآن."],
  "ফোন": ["Phone", "الهاتف"],
  "কোর্স": ["Course", "الدورة"],
  "জমা দেওয়ার সময়": ["Submitted", "وقت الإرسال"],
  "অনুরোধ মুছুন": ["Delete request", "حذف الطلب"],
  "অনুরোধের তালিকা পড়া যায়নি।": ["The request list could not be read.", "تعذرت قراءة قائمة الطلبات."],
  "WhatsApp-এ আপনার বুকিং তথ্য প্রস্তুত হয়েছে। অনুরোধ পাঠাতে মেসেজটি WhatsApp-এ পাঠান।": ["Your booking details are ready in WhatsApp. Send the message there to submit your request.", "تم تجهيز بيانات الحجز في واتساب. أرسل الرسالة هناك لتأكيد طلبك."],
  "WhatsApp খুলুন": ["Open WhatsApp", "افتح واتساب"],
  "অ্যাডমিন ড্যাশবোর্ড": ["Admin dashboard", "لوحة تحكم المسؤول"],
  "স্বাগতম, Al Hidayah": ["Welcome, Al Hidayah", "مرحبًا، Al Hidayah"],
  "অ্যাডমিন প্যানেল": ["Admin panel", "لوحة المسؤول"],
  "অ্যাডমিন প্যানেলে স্বাগতম।": ["Welcome to the admin panel.", "مرحبًا بك في لوحة المسؤول."],
  "ওয়েবসাইট দেখুন": ["View website", "عرض الموقع"],
  "লগআউট": ["Log out", "تسجيل الخروج"],
  "এখানে ভবিষ্যতে সাইটের কনটেন্ট ব্যবস্থাপনার টুল যোগ করা যাবে।": ["Content management tools can be added here in the future.", "يمكن إضافة أدوات إدارة محتوى الموقع هنا مستقبلًا."],
  "আপনার পূর্ণ নাম": ["Your full name", "اسمك الكامل"],
  "কুরআন শিক্ষা · ১২ আগস্ট ২০২৬": ["Quran learning · August 12, 2026", "تعليم القرآن · ١٢ أغسطس ٢٠٢٦"],
  "তাজবিদ · ০৪ জুলাই ২০২৬": ["Tajweed · July 4, 2026", "التجويد · ٤ يوليو ٢٠٢٦"],
  "হিফজুল কোরআন · ২১ জুন ২০২৬": ["Quran memorization · June 21, 2026", "حفظ القرآن · ٢١ يونيو ٢٠٢٦"],
  "ইসলামী শিক্ষা · ১৬ মে ২০২৬": ["Islamic studies · May 16, 2026", "الدراسات الإسلامية · ١٦ مايو ٢٠٢٦"],
  "Old Cairo, Egypt": ["Old Cairo, Egypt", "القاهرة القديمة، مصر"],
  "স": ["S", "س"],
  "আ": ["A", "أ"],
  "ন": ["N", "ن"],
  "র": ["R", "ر"]
};

let currentLanguage = localStorage.getItem("site-language") || "bn";
let currentTheme = localStorage.getItem("site-theme") || "light";
const originalText = new WeakMap();
const originalAttributes = new WeakMap();

function localizedText(value, language = currentLanguage) {
  const translation = TRANSLATIONS[value];
  if (!translation || language === "bn") return value;
  return translation[language === "ar" ? 1 : 0] ?? value;
}

function readCourseSettings() {
  return JSON.parse(localStorage.getItem(COURSE_STORAGE_KEY) || "{}");
}

function applyCourseCatalog() {
  const settings = readCourseSettings();
  Object.entries(COURSE_CATALOG).forEach(([id, defaultName]) => {
    const course = settings[id] || {};
    const name = typeof course.name === "string" && course.name.trim()
      ? course.name.trim()
      : localizedText(defaultName);
    const price = typeof course.price === "string" ? course.price.trim() : "";
    $$(`[data-course-id="${id}"]`).forEach(card => {
      const heading = $(".course-card-top h2, .course-card-top h3", card);
      if (heading) heading.textContent = name;
      const priceElement = $("[data-course-price]", card);
      if (priceElement) {
        priceElement.textContent = price ? `${localizedText("কোর্সের মূল্য")}: ${price}` : "";
        priceElement.hidden = !price;
      }
    });
    const courseOption = $(`#trialCourse option[data-course-id="${id}"]`);
    if (courseOption) courseOption.textContent = name;
  });

  const editor = $("#courseCatalogForm");
  if (editor) {
    Object.entries(COURSE_CATALOG).forEach(([id, defaultName]) => {
      const course = settings[id] || {};
      const nameInput = $(`[data-course-name="${id}"]`, editor);
      const priceInput = $(`[data-course-price-input="${id}"]`, editor);
      if (nameInput) {
        if (!nameInput.dataset.edited) {
          nameInput.value = typeof course.name === "string" && course.name.trim()
            ? course.name
            : localizedText(defaultName);
        }
      }
      if (priceInput && !priceInput.dataset.edited) {
        priceInput.value = typeof course.price === "string" ? course.price : "";
      }
    });
  }
}

function readTeacherSettings() {
  return JSON.parse(localStorage.getItem(TEACHER_STORAGE_KEY) || "{}");
}

function applyTeacherProfiles() {
  const settings = readTeacherSettings();
  $$(".teacher-card").forEach((card, index) => {
    const teacher = SITE_CONFIG.teachers[index];
    if (!teacher) return;
    const id = `teacher-${index + 1}`;
    card.dataset.teacherId = id;
    const profile = settings[id] || {};
    const fields = ["name", "subject", "specialty", "qualification", "students"];
    fields.forEach(field => {
      const element = field === "name"
        ? $("h2, h3", card)
        : field === "subject"
          ? $(".teacher-tag", card)
          : field === "specialty"
            ? card.querySelector(":scope > p")
            : field === "qualification"
              ? $(".qualification", card)
              : $(".teacher-meta span:first-child", card);
      if (!element) return;
      element.textContent = typeof profile[field] === "string" && profile[field].trim()
        ? localizedText(profile[field].trim())
        : localizedText(teacher[field]);
    });

    const portrait = $(".teacher-arch", card);
    if (portrait) {
      const photo = typeof profile.photo === "string" && /^data:image\/(?:png|jpeg|webp);base64,[a-z\d+/]+=*$/i.test(profile.photo)
        ? profile.photo
        : "";
      portrait.classList.toggle("has-photo", Boolean(photo));
      portrait.style.backgroundImage = photo ? `url("${photo}")` : "";
      portrait.setAttribute("aria-label", localizedText(photo ? "শিক্ষকের ছবি" : "শিক্ষকের প্রতীকী ছবি"));
    }
  });

  const editor = $("#teacherProfilesForm");
  if (!editor) return;
  SITE_CONFIG.teachers.forEach((teacher, index) => {
    const id = `teacher-${index + 1}`;
    const profile = settings[id] || {};
    $$(`[data-teacher-field]`, $(`[data-teacher-editor="${id}"]`, editor)).forEach(input => {
      if (!input.dataset.edited) {
        const field = input.dataset.teacherField;
        input.value = typeof profile[field] === "string" && profile[field].trim()
          ? localizedText(profile[field].trim())
          : localizedText(teacher[field]);
      }
    });
    const photo = typeof profile.photo === "string" && /^data:image\/(?:png|jpeg|webp);base64,[a-z\d+/]+=*$/i.test(profile.photo)
      ? profile.photo
      : "";
    const preview = $(`[data-teacher-preview="${id}"]`, editor);
    if (preview && !preview.dataset.edited) {
      preview.dataset.photo = photo;
      preview.classList.toggle("has-photo", Boolean(photo));
      preview.style.backgroundImage = photo ? `url("${photo}")` : "";
    }
    if (preview) preview.setAttribute("aria-label", localizedText(preview.dataset.photo ? "শিক্ষকের ছবি" : "শিক্ষকের প্রতীকী ছবি"));
  });
}

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("site-language", language);
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    const trimmed = source.trim();
    if (!trimmed) continue;
    const leading = source.match(/^\s*/)[0];
    const trailing = source.match(/\s*$/)[0];
    node.nodeValue = `${leading}${localizedText(trimmed, language)}${trailing}`;
  }

  $$("[placeholder], [aria-label], [title]").forEach(element => {
    if (!originalAttributes.has(element)) {
      originalAttributes.set(element, {
        placeholder: element.getAttribute("placeholder"),
        ariaLabel: element.getAttribute("aria-label"),
        title: element.getAttribute("title")
      });
    }
    const source = originalAttributes.get(element);
    ["placeholder", "ariaLabel", "title"].forEach(attribute => {
      const value = source[attribute];
      if (value === null) return;
      const name = attribute === "ariaLabel" ? "aria-label" : attribute;
      element.setAttribute(name, localizedText(value, language));
    });
  });

  ["newsletterMessage", "trialMessage"].forEach(id => {
    const message = document.getElementById(id);
    if (!message?.dataset.messageKey) return;
    if (id === "trialMessage" && message.dataset.whatsappHref) {
      message.replaceChildren(document.createTextNode(`${localizedText(message.dataset.messageKey, language)} `));
      const link = document.createElement("a");
      link.href = message.dataset.whatsappHref;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = localizedText("WhatsApp খুলুন", language);
      message.append(link);
      return;
    }
    message.textContent = localizedText(message.dataset.messageKey, language);
  });
  const menuButton = $(".menu-toggle");
  if (menuButton) {
    const label = menuButton.getAttribute("aria-expanded") === "true" ? "মেনু বন্ধ করুন" : "মেনু খুলুন";
    menuButton.setAttribute("aria-label", localizedText(label, language));
  }

  const pageTitles = {
    "index.html": ["Al Hidayah Institute | Learn Quran Online with Tajweed & Tafseer", "معهد الهداية | تعلّم القرآن والتجويد والتفسير عبر الإنترنت"],
    "about.html": ["About Us | Al Hidayah Institute", "من نحن | معهد الهداية"],
    "teachers.html": ["Teachers | Al Hidayah Institute", "المعلمون | معهد الهداية"],
    "courses.html": ["Courses | Al Hidayah Institute", "الدورات | معهد الهداية"],
    "free-class.html": ["Book a Free Class | Al Hidayah Institute", "احجز درسًا مجانيًا | معهد الهداية"],
    "admin.html": ["Admin Login | Al Hidayah Institute", "دخول المسؤول | معهد الهداية"],
    "admin-dashboard.html": ["Admin Dashboard | Al Hidayah Institute", "لوحة تحكم المسؤول | معهد الهداية"]
  };
  const page = location.pathname.split("/").pop() || "index.html";
  if (page === "admin-dashboard.html" && language !== "bn") {
    const heading = $("#adminDashboard h1");
    if (heading) {
      heading.innerHTML = language === "ar"
        ? '<span class="accent-word">لوحة تحكم</span> المسؤول'
        : '<span class="accent-word">Admin</span> dashboard';
    }
  }
  document.title = language === "bn"
    ? originalTitle
    : pageTitles[page]?.[language === "ar" ? 1 : 0] || originalTitle;
  const descriptions = {
    "index.html": [
      "Learn Quran, Tajweed, Tafsir, and Islamic studies online with experienced teachers.",
      "تعلّم القرآن والتجويد والتفسير والدراسات الإسلامية عبر الإنترنت مع معلمين ذوي خبرة."
    ],
    "about.html": [
      "Learn about Al-Hidayah Institute, our approach, and our online Quran education.",
      "تعرّف على معهد الهداية ونهجنا وتعليم القرآن عبر الإنترنت."
    ],
    "teachers.html": [
      "Meet the teachers at Al-Hidayah Institute for online Quran and Islamic studies.",
      "تعرّف على معلمي معهد الهداية لدراسة القرآن والعلوم الإسلامية عبر الإنترنت."
    ],
    "courses.html": [
      "Explore online courses in Quran memorization, recitation, and Islamic studies.",
      "اكتشف دورات عبر الإنترنت في حفظ القرآن وتلاوته والدراسات الإسلامية."
    ],
    "free-class.html": [
      "Contact Al-Hidayah Institute to book a free introductory Quran lesson.",
      "تواصل مع معهد الهداية لحجز درس قرآني تعريفي مجاني."
    ],
    "admin.html": [
      "Admin login for Al-Hidayah Institute.",
      "تسجيل دخول مسؤول معهد الهداية."
    ],
    "admin-dashboard.html": [
      "Al-Hidayah Institute admin dashboard.",
      "لوحة تحكم المسؤول لمعهد الهداية."
    ]
  };
  const description = descriptions[page];
  if (description && language !== "bn") {
    const localizedDescription = description[language === "ar" ? 1 : 0];
    $('meta[name="description"]')?.setAttribute("content", localizedDescription);
    $('meta[property="og:description"]')?.setAttribute("content", localizedDescription);
  } else {
    const metaDescription = $('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", originalDescription);
    const ogDescription = $('meta[property="og:description"]');
    if (ogDescription && originalOgDescription) ogDescription.setAttribute("content", originalOgDescription);
  }

  const selector = $("#languageSelect");
  if (selector) selector.value = language;
  const themeButton = $("#themeToggle");
  if (themeButton) {
    themeButton.textContent = currentTheme === "dark" ? "☀" : "☾";
    themeButton.setAttribute("aria-label", localizedText(currentTheme === "dark" ? "হালকা থিম চালু করুন" : "গাঢ় থিম চালু করুন"));
    themeButton.title = themeButton.getAttribute("aria-label");
  }
  applyCourseCatalog();
  applyTeacherProfiles();
  applyTrialRequests();
}

const originalTitle = document.title;
const originalDescription = $('meta[name="description"]')?.getAttribute("content") || "";
const originalOgDescription = $('meta[property="og:description"]')?.getAttribute("content") || "";

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("site-theme", theme);
  $('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#151a24" : "#FBF7F0");
  const button = $("#themeToggle");
  if (button) {
    button.textContent = theme === "dark" ? "☀" : "☾";
    const label = localizedText(theme === "dark" ? "হালকা থিম চালু করুন" : "গাঢ় থিম চালু করুন");
    button.setAttribute("aria-label", label);
    button.title = label;
  }
}

function initDisplayControls() {
  const nav = $("#primary-nav");
  if (!nav) return;
  const controls = document.createElement("div");
  controls.className = "nav-controls";
  controls.innerHTML = `<label class="sr-only" for="languageSelect">Language</label>
    <select id="languageSelect" class="language-select" aria-label="Language">
      <option value="bn">বাংলা</option><option value="en">English</option><option value="ar">العربية</option>
    </select>
    <button class="theme-toggle" id="themeToggle" type="button">☾</button>`;
  nav.append(controls);
  $("#languageSelect").addEventListener("change", event => applyLanguage(event.target.value));
  $("#themeToggle").addEventListener("click", () => applyTheme(currentTheme === "dark" ? "light" : "dark"));
  applyTheme(currentTheme === "dark" ? "dark" : "light");
  applyLanguage(Object.hasOwn(LANGUAGE_OPTIONS, currentLanguage) ? currentLanguage : "bn");
}

window.addEventListener("storage", event => {
  if (event.key === COURSE_STORAGE_KEY) applyCourseCatalog();
  if (event.key === TEACHER_STORAGE_KEY) applyTeacherProfiles();
  if (event.key === TRIAL_REQUESTS_STORAGE_KEY) applyTrialRequests();
});

function applySiteConfig() {
  $$(".brand").forEach(brand => {
    if (brand.querySelector(".brand-logo")) return;
    const logo = document.createElement("img");
    logo.className = "brand-logo";
    logo.src = "assets/al-hidayah-logo.jpg";
    logo.alt = "";
    brand.prepend(logo);
  });

  applyTeacherProfiles();

  const contactItems = $$(".footer-contact > p");
  if (contactItems.length === 3) {
    contactItems[0].lastChild.textContent = SITE_CONFIG.contact.address;
    const email = $("a", contactItems[1]);
    email.textContent = SITE_CONFIG.contact.email;
    email.href = `mailto:${SITE_CONFIG.contact.email.replace(/^\[|\]$/g, "")}`;
    const phone = $("a", contactItems[2]);
    phone.textContent = SITE_CONFIG.contact.phone;
    phone.href = `tel:${SITE_CONFIG.contact.phone.replace(/[^\d+]/g, "")}`;
  }

  const whatsapp = $(".whatsapp-button");
  if (whatsapp) whatsapp.href = SITE_CONFIG.contact.whatsapp;
  const social = SITE_CONFIG.social;
  const socialLinks = $$(".social-links a");
  [social.facebook, social.youtube, social.instagram, social.twitter].forEach((url, index) => {
    if (socialLinks[index]) socialLinks[index].href = url;
  });
}

function applyTrialRequests() {
  const list = $("#trialRequestsList");
  if (!list) return;
  list.replaceChildren();
  let requests;
  try {
    requests = JSON.parse(localStorage.getItem(TRIAL_REQUESTS_STORAGE_KEY) || "[]");
    if (!Array.isArray(requests) || requests.some(request =>
      !request || ["id", "name", "phone", "age", "course", "submittedAt"].some(field => typeof request[field] !== "string")
    )) {
      throw new TypeError("Trial request storage contains invalid data.");
    }
  } catch (error) {
    console.error("Unable to read saved trial requests.", error);
    list.textContent = localizedText("অনুরোধের তালিকা পড়া যায়নি।");
    list.setAttribute("role", "alert");
    return;
  }
  list.removeAttribute("role");
  if (!requests.length) {
    list.textContent = localizedText("এখনও কোনো ফ্রি ট্রায়াল অনুরোধ জমা পড়েনি।");
    list.classList.add("trial-requests-empty");
    return;
  }
  list.classList.remove("trial-requests-empty");
  requests.slice().reverse().forEach(request => {
    const card = document.createElement("article");
    card.className = "trial-request-card";
    const details = document.createElement("dl");
    const rows = [
      ["নাম", request.name],
      ["ফোন", request.phone],
      ["বয়স", request.age],
      ["কোর্স", request.course],
      ["জমা দেওয়ার সময়", new Date(request.submittedAt).toLocaleString(currentLanguage)]
    ];
    rows.forEach(([label, value]) => {
      const term = document.createElement("dt");
      term.textContent = localizedText(label);
      const description = document.createElement("dd");
      if (label === "ফোন") {
        const link = document.createElement("a");
        link.href = `tel:${String(value).replace(/[^\d+]/g, "")}`;
        link.textContent = String(value);
        description.append(link);
      } else {
        description.textContent = String(value);
      }
      details.append(term, description);
    });
    const remove = document.createElement("button");
    remove.className = "button button-outline trial-request-delete";
    remove.type = "button";
    remove.dataset.trialRequestId = request.id;
    remove.textContent = localizedText("অনুরোধ মুছুন");
    card.append(details, remove);
    list.append(card);
  });
}

function initNavigation() {
  const button = $(".menu-toggle");
  const nav = $("#primary-nav");
  if (!button || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", localizedText("মেনু খুলুন"));
  };

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    button.setAttribute("aria-label", localizedText(isOpen ? "মেনু খুলুন" : "মেনু বন্ধ করুন"));
    nav.classList.toggle("is-open", !isOpen);
  });

  $$("a", nav).forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
  document.addEventListener("click", event => {
    if (button.getAttribute("aria-expanded") === "true" && !nav.contains(event.target) && !button.contains(event.target)) closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });
}

function initCarousel() {
  const track = $("#reviewTrack");
  const viewport = $(".review-viewport");
  const progress = $("#reviewProgress");
  if (!track || !viewport || !progress) return;

  REVIEWS.forEach(review => {
    const card = document.createElement("article");
    card.className = "review-card";
    card.innerHTML = `<span class="quote-icon" aria-hidden="true">“</span>
      <div class="review-stars" aria-label="৫ এর মধ্যে ৫ তারকা">★★★★★</div>
      <p></p><div class="review-person"><span class="review-avatar"></span>
      <span><b></b><small></small></span></div>`;
    $("p", card).textContent = review.text;
    $(".review-avatar", card).textContent = review.initial;
    $(".review-person b", card).textContent = review.name;
    $(".review-person small", card).textContent = `${review.course} · ${review.date}`;
    track.append(card);
  });

  let activeIndex = 0;
  let timer;
  let pointerStart = null;
  progress.innerHTML = REVIEWS.map((_, index) => `<button class="progress-dot${index === 0 ? " active" : ""}" type="button" aria-label="মতামত ${index + 1}"></button>`).join("");
  const dots = $$(".progress-dot", progress);

  function showSlide(index) {
    activeIndex = (index + REVIEWS.length) % REVIEWS.length;
    const cards = $$(".review-card", track);
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const cardWidth = cards[0]?.getBoundingClientRect().width || 0;
    track.style.transform = `translateX(-${activeIndex * (cardWidth + gap)}px)`;
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === activeIndex);
      dot.setAttribute("aria-current", dotIndex === activeIndex ? "true" : "false");
    });
  }

  function startAutoplay() {
    window.clearInterval(timer);
    timer = window.setInterval(() => showSlide(activeIndex + 1), 5000);
  }

  $("#reviewPrev")?.addEventListener("click", () => { showSlide(activeIndex - 1); startAutoplay(); });
  $("#reviewNext")?.addEventListener("click", () => { showSlide(activeIndex + 1); startAutoplay(); });
  dots.forEach((dot, index) => dot.addEventListener("click", () => { showSlide(index); startAutoplay(); }));
  [viewport, progress].forEach(element => {
    element.addEventListener("mouseenter", () => window.clearInterval(timer));
    element.addEventListener("mouseleave", startAutoplay);
    element.addEventListener("focusin", () => window.clearInterval(timer));
    element.addEventListener("focusout", startAutoplay);
  });
  viewport.addEventListener("pointerdown", event => { pointerStart = event.clientX; }, { passive: true });
  viewport.addEventListener("pointerup", event => {
    if (pointerStart === null) return;
    const distance = event.clientX - pointerStart;
    pointerStart = null;
    if (Math.abs(distance) < 45) return;
    showSlide(activeIndex + (distance < 0 ? 1 : -1));
    startAutoplay();
  }, { passive: true });
  viewport.addEventListener("pointercancel", () => { pointerStart = null; }, { passive: true });
  window.addEventListener("resize", () => showSlide(activeIndex));
  showSlide(0);
  startAutoplay();
}

function initForms() {
  const trialRequestsList = $("#trialRequestsList");
  trialRequestsList?.addEventListener("click", event => {
    const button = event.target.closest("[data-trial-request-id]");
    if (!button) return;
    try {
      const requests = JSON.parse(localStorage.getItem(TRIAL_REQUESTS_STORAGE_KEY) || "[]");
      if (!Array.isArray(requests)) throw new TypeError("Trial request storage must contain an array.");
      localStorage.setItem(TRIAL_REQUESTS_STORAGE_KEY, JSON.stringify(
        requests.filter(request => request.id !== button.dataset.trialRequestId)
      ));
      applyTrialRequests();
    } catch (error) {
      console.error("Unable to delete the selected trial request.", error);
      trialRequestsList.textContent = localizedText("অনুরোধের তালিকা পড়া যায়নি।");
      trialRequestsList.setAttribute("role", "alert");
    }
  });
  applyTrialRequests();

  const courseCatalogForm = $("#courseCatalogForm");
  courseCatalogForm?.addEventListener("input", event => {
    if (event.target.matches("[data-course-name], [data-course-price-input]")) {
      event.target.dataset.edited = "true";
    }
  });
  courseCatalogForm?.addEventListener("submit", event => {
    event.preventDefault();
    const nextSettings = {};
    for (const [id, defaultName] of Object.entries(COURSE_CATALOG)) {
      const name = $(`[data-course-name="${id}"]`, courseCatalogForm).value.trim();
      if (!name) {
        $("#courseCatalogMessage").textContent = localizedText("প্রতিটি কোর্সের নাম লিখুন।");
        $("#courseCatalogMessage").classList.add("form-message-error");
        return;
      }
      nextSettings[id] = {
        name: name === localizedText(defaultName) ? "" : name,
        price: $(`[data-course-price-input="${id}"]`, courseCatalogForm).value.trim()
      };
    }
    localStorage.setItem(COURSE_STORAGE_KEY, JSON.stringify(nextSettings));
    $$("[data-course-name], [data-course-price-input]", courseCatalogForm).forEach(input => delete input.dataset.edited);
    applyCourseCatalog();
    const message = $("#courseCatalogMessage");
    message.textContent = localizedText("কোর্সগুলো সফলভাবে আপডেট হয়েছে।");
    message.classList.remove("form-message-error");
    message.classList.add("form-message-success");
  });

  const teacherProfilesForm = $("#teacherProfilesForm");
  const teacherProfilesMessage = $("#teacherProfilesMessage");
  const setTeacherMessage = (key, isError) => {
    teacherProfilesMessage.textContent = localizedText(key);
    teacherProfilesMessage.classList.toggle("form-message-error", isError);
    teacherProfilesMessage.classList.toggle("form-message-success", !isError);
  };
  teacherProfilesForm?.addEventListener("input", event => {
    if (event.target.matches("[data-teacher-field]")) event.target.dataset.edited = "true";
  });
  teacherProfilesForm?.addEventListener("change", event => {
    const input = event.target;
    if (!input.matches("[data-teacher-photo]")) return;
    const file = input.files[0];
    if (!file) return;
    if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
      input.value = "";
      setTeacherMessage("শুধু PNG, JPG বা WebP ছবি আপলোড করা যাবে।", true);
      return;
    }
    if (file.size > TEACHER_IMAGE_MAX_BYTES) {
      input.value = "";
      setTeacherMessage("ছবির আকার ৫১২ KB বা এর কম হতে হবে।", true);
      return;
    }
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      if (typeof reader.result !== "string") {
        setTeacherMessage("ছবি পড়া যায়নি। অন্য একটি ছবি চেষ্টা করুন।", true);
        return;
      }
      const preview = $(`[data-teacher-preview="${input.dataset.teacherPhoto}"]`, teacherProfilesForm);
      preview.dataset.photo = reader.result;
      preview.dataset.edited = "true";
      preview.classList.add("has-photo");
      preview.style.backgroundImage = `url("${reader.result}")`;
      preview.setAttribute("aria-label", localizedText("শিক্ষকের ছবি"));
      setTeacherMessage("", false);
    });
    reader.addEventListener("error", () => {
      console.error("Unable to read the selected teacher photo.", reader.error);
      setTeacherMessage("ছবি পড়া যায়নি। অন্য একটি ছবি চেষ্টা করুন।", true);
    });
    reader.readAsDataURL(file);
  });
  teacherProfilesForm?.addEventListener("click", event => {
    const button = event.target.closest("[data-remove-teacher-photo]");
    if (!button) return;
    const preview = $(`[data-teacher-preview="${button.dataset.removeTeacherPhoto}"]`, teacherProfilesForm);
    preview.dataset.photo = "";
    preview.dataset.edited = "true";
    preview.classList.remove("has-photo");
    preview.style.backgroundImage = "";
    preview.setAttribute("aria-label", localizedText("শিক্ষকের প্রতীকী ছবি"));
    const input = $(`[data-teacher-photo="${button.dataset.removeTeacherPhoto}"]`, teacherProfilesForm);
    input.value = "";
    setTeacherMessage("", false);
  });
  teacherProfilesForm?.addEventListener("submit", event => {
    event.preventDefault();
    const nextSettings = {};
    for (const [index, teacher] of SITE_CONFIG.teachers.entries()) {
      const id = `teacher-${index + 1}`;
      const editor = $(`[data-teacher-editor="${id}"]`, teacherProfilesForm);
      const profile = {};
      for (const field of ["name", "subject", "specialty", "qualification", "students"]) {
        const value = $(`[data-teacher-field="${field}"]`, editor).value.trim();
        if (field === "name" && !value) {
          setTeacherMessage("প্রতিটি শিক্ষকের নাম লিখুন।", true);
          return;
        }
        profile[field] = value === localizedText(teacher[field]) ? "" : value;
      }
      profile.photo = $(`[data-teacher-preview="${id}"]`, teacherProfilesForm).dataset.photo || "";
      nextSettings[id] = profile;
    }
    try {
      localStorage.setItem(TEACHER_STORAGE_KEY, JSON.stringify(nextSettings));
    } catch (error) {
      console.error("Unable to save teacher profiles in browser storage.", error);
      setTeacherMessage("পরিবর্তন সংরক্ষণ করা যায়নি। ছবির আকার কমিয়ে আবার চেষ্টা করুন।", true);
      return;
    }
    $$("[data-teacher-field]", teacherProfilesForm).forEach(input => delete input.dataset.edited);
    $$("[data-teacher-preview]", teacherProfilesForm).forEach(preview => delete preview.dataset.edited);
    applyTeacherProfiles();
    setTeacherMessage("শিক্ষকদের তথ্য সফলভাবে আপডেট হয়েছে।", false);
  });

  const newsletter = $("#newsletterForm");
  newsletter?.addEventListener("submit", event => {
    event.preventDefault();
    $("#newsletterMessage").dataset.messageKey = "ধন্যবাদ! এটি একটি নমুনা ফর্ম; সাবস্ক্রিপশন সংরক্ষিত হয়নি।";
    $("#newsletterMessage").textContent = localizedText($("#newsletterMessage").dataset.messageKey);
    newsletter.reset();
  });

  const trialForm = $("#trialForm");
  trialForm?.addEventListener("submit", event => {
    event.preventDefault();
    if (!trialForm.reportValidity()) return;
    const message = $("#trialMessage");
    const details = [
      `${localizedText("পূর্ণ নাম")}: ${$("#trialName").value.trim()}`,
      `${localizedText("ফোন নম্বর")}: ${$("#trialPhone").value.trim()}`,
      `${localizedText("বয়স")}: ${$("#trialAge").value}`,
      `${localizedText("পছন্দের কোর্স")}: ${$("#trialCourse").selectedOptions[0].textContent.trim()}`
    ].join("\n");
    const whatsappUrl = new URL(SITE_CONFIG.contact.whatsapp);
    whatsappUrl.searchParams.set("text", details);
    message.dataset.messageKey = "WhatsApp-এ আপনার বুকিং তথ্য প্রস্তুত হয়েছে। অনুরোধ পাঠাতে মেসেজটি WhatsApp-এ পাঠান।";
    message.dataset.whatsappHref = whatsappUrl.href;
    message.replaceChildren(document.createTextNode(`${localizedText(message.dataset.messageKey)} `));
    const link = document.createElement("a");
    link.href = whatsappUrl.href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = localizedText("WhatsApp খুলুন");
    message.append(link);
    message.classList.remove("form-message-error");
    message.classList.add("form-message-success");
    window.open(whatsappUrl.href, "_blank", "noopener,noreferrer");
    trialForm.reset();
  });
}

function initReveal() {
  if (!("IntersectionObserver" in window)) return;
  const elements = $$(".reveal");
  if (!elements.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.documentElement.classList.add("js-reveal");
  elements.forEach(element => observer.observe(element));
}

applySiteConfig();
initNavigation();
initCarousel();
initForms();
initReveal();
initDisplayControls();
