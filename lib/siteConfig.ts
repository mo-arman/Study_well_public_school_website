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
  mapEmbedUrl: "", // TODO: paste Google Maps embed src here (search "Study Well Public School Vijay Laxmi Nagar Sitapur")

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
  ]
};

export type SiteConfig = typeof siteConfig;
