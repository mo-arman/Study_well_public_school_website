// ==========================================================================
// SITE CONFIG — Single source of truth.
// Jab client se real content mile, sirf yeh file edit karo — poori website
// automatically update ho jayegi. Placeholder values neeche clearly marked hain.
// ==========================================================================

export const siteConfig = {
  schoolName: "Study Well Public School",
  motto: "विद्या धनं सर्व भूषणम्", // "Knowledge is the true ornament of all wealth"
  tagline: "Learning Today. Leading Tomorrow.",
  shortName: "SWPS",
  affiliation: "CBSE Affiliated | Affiliation No. 2131025",
  established: 2006, // "20 Years of Excellence" seen on campus banner (2026 - 20)
  city: "Sitapur, Uttar Pradesh",
  address: "Vijay Laxmi Nagar, Sitapur, Uttar Pradesh", // TODO: add full street address / landmark
  phone: "+91 78973 64444",
  whatsapp: "917897364444",
  email: "info@studywellpublicschool.com", // TODO: confirm official email
  admissionsEmail: "info@studywellpublicschool.com", // TODO: set principal/admissions office email if different from main
  careersEmail: "info@studywellpublicschool.com", // TODO: set HR/office email if different from main
  mapEmbedUrl: "https://www.google.com/maps?q=Study+Well+Public+School+Vijay+Laxmi+Nagar+Sitapur&output=embed", // TODO: replace with exact address once confirmed (see README section 3.5 for how)
  oneSignalAppId: "c2605a3f-a8a1-4b20-adb0-1365b57a2902", // TODO: paste your OneSignal App ID here to enable push notifications (see README section on Push Notifications)
  googleAnalyticsId: "", // TODO: paste your GA4 Measurement ID here (format: G-XXXXXXXXXX) to enable Google Analytics — see README section on Analytics

  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    twitter: "#"
  },

  nav: [
    { label: "About", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Facilities", href: "/facilities" },
    { label: "Gallery", href: "/gallery" },
    { label: "Events", href: "/events" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" }
  ],

  moreLinks: [
    { label: "Fee Structure", href: "/fee-structure" },
    { label: "Academic Calendar", href: "/academic-calendar" },
    { label: "Results & Toppers", href: "/results" },
    { label: "Notices & Circulars", href: "/notices" },
    { label: "Alumni", href: "/alumni" },
    { label: "FAQ", href: "/faq" }
  ],

  erpLinks: [
    { label: "Student Login", href: "/erp/student" },
    { label: "Parent Login", href: "/erp/parent" },
    { label: "Teacher Login", href: "/erp/teacher" }
  ],

  stats: [
    { value: "20+", label: "Years of Excellence" }, // confirmed from campus banner
    { value: "TBD", label: "Students" }, // TODO: confirm real number with school office
    { value: "TBD", label: "Expert Faculty" }, // TODO: confirm real number
    { value: "TBD", label: "Campus Facilities" } // TODO: confirm real number/unit
  ],

  whyChooseUs: [
    { title: "Project Based Learning", desc: "Students learn by doing — real projects that build understanding, not just memorization." },
    { title: "Digital Learning", desc: "Smart classrooms and a dedicated Computer Lab bring every subject to life." },
    { title: "School App", desc: "Parents stay connected to attendance, homework, and updates from their phone." },
    { title: "Transport Facility", desc: "Safe, reliable pick-up and drop across Sitapur on well-maintained school buses." },
    { title: "Secured Campus", desc: "CCTV-monitored premises with strict entry protocols, every school day." },
    { title: "20 Years of Excellence", desc: "Two decades of trusted CBSE education, from Play Group to Class XII." }
  ],

  academicLevels: [
    { name: "Play Group", range: "Play Group – UKG", desc: "Play-based foundational learning in a warm, secure environment." },
    { name: "Primary", range: "Class I – V", desc: "Building literacy, numeracy, and curiosity through activity-based teaching." },
    { name: "Middle School", range: "Class VI – VIII", desc: "Deeper subject exploration with introduction to computational thinking." },
    { name: "Secondary", range: "Class IX – X", desc: "CBSE board preparation with strong conceptual grounding." },
    { name: "Senior Secondary", range: "Class XI – XII", desc: "Science, Commerce & Humanities streams with career mentorship." }
  ],

  facilities: [
    "Science Laboratories",
    "Computer & Robotics Lab",
    "Library & Digital Reading Room",
    "Auditorium",
    "Indoor & Outdoor Sports",
    "Music & Dance Studio",
    "Art Room",
    "Medical Room",
    "GPS-Tracked Transport",
    "Wi-Fi Campus",
    "CCTV Security",
    "Smart Classrooms"
  ],

  testimonials: [
    {
      quote: "The teachers here don't just teach the syllabus, they genuinely notice each child.",
      name: "Parent of Class V Student",
      role: "Parent"
    },
    {
      quote: "My son looks forward to school every single day. That says everything.",
      name: "Parent of Class II Student",
      role: "Parent"
    },
    {
      quote: "The robotics lab changed how I think about problem-solving.",
      name: "Class X Student",
      role: "Student"
    }
  ],

  faqs: [
    {
      question: "What is the admission process?",
      answer: "Fill out the online Admissions form on this website, or visit the school office directly. Our admissions team will contact you within 2 working days with next steps." // TODO: confirm exact process with school office
    },
    {
      question: "What documents are required for admission?",
      answer: "Typically birth certificate, previous school's transfer certificate (if applicable), and passport-size photographs. [ TODO: confirm exact document list with school office. ]"
    },
    {
      question: "What is the school fee structure?",
      answer: "Fee details vary by class and are shared during the admission process. [ TODO: add a fee structure page or PDF once the school shares figures. ]"
    },
    {
      question: "Does the school provide transport?",
      answer: "Yes, GPS-tracked bus transport is available across Sitapur. Contact the school office to check if your area is covered."
    },
    {
      question: "What are the school timings?",
      answer: "[ TODO: confirm exact timings for each level — Play Group/Primary/Middle/Secondary often differ slightly. ]"
    },
    {
      question: "How can I contact my child's teacher?",
      answer: "Parents can reach out through the school office, or once ERP/School App access is set up, message teachers directly through it."
    }
  ],

  notices: [
    {
      date: "TBD",
      category: "Admission",
      title: "Admissions Open for 2026–27 — Play Group to Class XI"
    },
    {
      date: "TBD",
      category: "Event",
      title: "Basant Panchami Celebration"
    },
    {
      date: "TBD",
      category: "Circular",
      title: "Winter Vacation Schedule"
    },
    {
      date: "TBD",
      category: "Exam",
      title: "Half-Yearly Examination Timetable"
    }
    // TODO: replace with real, dated circulars from the school office.
    // Newest notices should go at the top of this list.
  ],

  alumni: [
    {
      name: "Alumni Name",
      batch: "Batch of 20XX",
      achievement: "[ TODO: add real alumni story — current role, college, or achievement ]",
      quote: "[ TODO: add a short quote from the alumnus about their time at school ]"
    },
    {
      name: "Alumni Name",
      batch: "Batch of 20XX",
      achievement: "[ TODO: add real alumni story ]",
      quote: "[ TODO: add a short quote ]"
    },
    {
      name: "Alumni Name",
      batch: "Batch of 20XX",
      achievement: "[ TODO: add real alumni story ]",
      quote: "[ TODO: add a short quote ]"
    }
  ],

  // ==========================================================================
  // FEE STRUCTURE — TODO: replace all "TBD" figures with real, school-confirmed
  // fee amounts once shared by the office. Keep the PDF at
  // /public/documents/fee-structure.pdf in sync with this table.
  // ==========================================================================
  feeStructure: {
    academicYear: "2026–27",
    pdfUrl: "/documents/fee-structure.pdf",
    lastUpdated: "TBD", // TODO: set the date the fee structure was last revised
    classes: [
      { className: "Play Group – Nursery", admissionFee: "TBD", tuitionPerMonth: "TBD", annualCharges: "TBD" },
      { className: "LKG – UKG", admissionFee: "TBD", tuitionPerMonth: "TBD", annualCharges: "TBD" },
      { className: "Class I – V", admissionFee: "TBD", tuitionPerMonth: "TBD", annualCharges: "TBD" },
      { className: "Class VI – VIII", admissionFee: "TBD", tuitionPerMonth: "TBD", annualCharges: "TBD" },
      { className: "Class IX – X", admissionFee: "TBD", tuitionPerMonth: "TBD", annualCharges: "TBD" },
      { className: "Class XI – XII (Science)", admissionFee: "TBD", tuitionPerMonth: "TBD", annualCharges: "TBD" },
      { className: "Class XI – XII (Commerce/Humanities)", admissionFee: "TBD", tuitionPerMonth: "TBD", annualCharges: "TBD" }
    ],
    includes: [
      "Tuition fee",
      "Library & lab charges",
      "Smart classroom / digital learning fee",
      "Sports & activity fee"
    ],
    excludes: [
      "One-time admission fee (new admissions only)",
      "Transport fee (route-wise, optional)",
      "Uniform, books & stationery",
      "Examination fee"
    ],
    paymentModes: ["Cash / Cheque at school office", "Online transfer / UPI", "School App payment gateway (if enabled)"],
    notes:
      "Fees are payable quarterly at the start of each term unless otherwise notified. Late payment may attract a fine as per school policy. [ TODO: confirm exact due dates, quarterly/monthly cycle, and late-fee policy with the school office. ]"
  },

  // ==========================================================================
  // ACADEMIC CALENDAR — TODO: replace with the real academic-year calendar
  // once finalized by the school office ahead of each session.
  // ==========================================================================
  academicCalendar: {
    academicYear: "2026–27",
    sessionStart: "TBD", // TODO: e.g. "1 April 2026"
    sessionEnd: "TBD", // TODO: e.g. "31 March 2027"
    terms: [
      { term: "Term I", period: "TBD", exam: "Half-Yearly Examination" },
      { term: "Term II", period: "TBD", exam: "Annual Examination" }
    ],
    holidays: [
      { occasion: "Summer Vacation", date: "TBD" },
      { occasion: "Independence Day", date: "15 August" },
      { occasion: "Janmashtami", date: "TBD" },
      { occasion: "Gandhi Jayanti", date: "2 October" },
      { occasion: "Dussehra", date: "TBD" },
      { occasion: "Diwali Break", date: "TBD" },
      { occasion: "Winter Vacation", date: "TBD" },
      { occasion: "Republic Day", date: "26 January" },
      { occasion: "Basant Panchami", date: "TBD" },
      { occasion: "Holi", date: "TBD" }
      // TODO: replace with the confirmed holiday list for the current academic year.
    ],
    otherEvents: [
      { event: "Parent-Teacher Meeting (Term I)", date: "TBD" },
      { event: "Annual Sports Day", date: "TBD" },
      { event: "Annual Function", date: "TBD" },
      { event: "Parent-Teacher Meeting (Term II)", date: "TBD" }
    ]
  },

  // ==========================================================================
  // RESULTS & TOPPERS — TODO: replace with verified CBSE board result data and
  // real student names/photos (with consent) once results are declared.
  // ==========================================================================
  results: {
    highlights: [
      { year: "2025–26", classLabel: "Class X", passPercentage: "TBD", topScore: "TBD" },
      { year: "2025–26", classLabel: "Class XII", passPercentage: "TBD", topScore: "TBD" }
    ],
    toppers: [
      { name: "Student Name", classLabel: "Class X", percentage: "TBD", photo: "" },
      { name: "Student Name", classLabel: "Class X", percentage: "TBD", photo: "" },
      { name: "Student Name", classLabel: "Class XII", percentage: "TBD", photo: "" },
      { name: "Student Name", classLabel: "Class XII", percentage: "TBD", photo: "" }
      // TODO: replace with real topper names, class, percentage, and photo (with signed parental consent).
    ],
    boardResultLinks: [
      { label: "CBSE Class X Result", href: "https://cbseresults.nic.in/" },
      { label: "CBSE Class XII Result", href: "https://cbseresults.nic.in/" }
      // TODO: confirm/update official CBSE result portal links each year.
    ]
  }
};

export type SiteConfig = typeof siteConfig;
