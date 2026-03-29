export const domainOrder = [
  "IT & Digital Skills",
  "Bamboo, Weaving & Craft Commerce",
  "Tourism & Homestay Management",
  "Agriculture & Organic Commerce",
];

export const domainMeta = {
  "IT & Digital Skills": {
    tag: "IT",
    color: "#3D5A80",
    shortLabel: "IT",
    description:
      "Build digital skills for government services, remote work, design, and data-led operations.",
    why: "Digitisation is moving fast across Mizoram. This track prepares youth and officers for local systems and remote work alike.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80",
  },
  "Bamboo, Weaving & Craft Commerce": {
    tag: "Craft",
    color: "#B85042",
    shortLabel: "Craft",
    description:
      "Turn weaving, bamboo work, and product storytelling into stronger market access and stable income.",
    why: "Mizo craft traditions already hold value. This track connects heritage skills with commerce, pricing, packaging, and online selling.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
  },
  "Tourism & Homestay Management": {
    tag: "Tourism",
    color: "#4A7C59",
    shortLabel: "Tourism",
    description:
      "Train hosts, guides, and operators to deliver warm visitor experiences rooted in local knowledge.",
    why: "Tourism growth depends on trained people, not just beautiful places. This track supports homestays, guides, safety, and hospitality.",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=80",
  },
  "Agriculture & Organic Commerce": {
    tag: "Agriculture",
    color: "#4A7C59",
    shortLabel: "Agriculture",
    description:
      "Strengthen bamboo farming, organic certification, market readiness, and farm operations.",
    why: "Organic and bamboo value chains need trained record-keepers, processors, and market connectors alongside growers.",
    image:
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1400&q=80",
  },
};

export const levelOptions = ["All", "Beginner", "Intermediate"];

export const availabilityMeta = {
  available: {
    label: "Available",
    color: "#4A7C59",
  },
  busy: {
    label: "Busy",
    color: "#D48B3A",
  },
  unavailable: {
    label: "Unavailable",
    color: "#A8A4A0",
  },
};

export const courseDetailContent = {
  "IT-001": {
    outcomes: [
      "Build and publish a responsive multi-page site.",
      "Understand HTML structure, CSS layout, and JavaScript basics.",
      "Prepare for freelance website work and digital support roles.",
    ],
    syllabus: [
      {
        title: "Foundations of the Web",
        lessons: [
          "How the web works",
          "HTML structure",
          "Text, links, and media",
        ],
      },
      {
        title: "Styling with Confidence",
        lessons: ["CSS selectors", "Flexbox and grids", "Responsive layouts"],
      },
      {
        title: "Interactive Basics",
        lessons: [
          "JavaScript essentials",
          "Forms and validation",
          "Project build week",
        ],
      },
    ],
  },
  "IT-002": {
    outcomes: [
      "Operate common Mizoram government systems with confidence.",
      "Maintain digital records with cleaner workflows and fewer errors.",
      "Support office digitisation and citizen-facing service delivery.",
    ],
    syllabus: [
      {
        title: "Service Portals in Practice",
        lessons: ["e-Ram overview", "RMIS workflows", "Daily reporting habits"],
      },
      {
        title: "Data Quality & Security",
        lessons: [
          "Entry standards",
          "Verification steps",
          "Access and safety basics",
        ],
      },
      {
        title: "Office Simulations",
        lessons: ["Department use cases", "Troubleshooting", "Assessment"],
      },
    ],
  },
  "CRAFT-001": {
    outcomes: [
      "Preserve core weaving methods while adapting for market demand.",
      "Cost finished products accurately for retail and wholesale sales.",
      "Present cultural craft work with confidence and authenticity.",
    ],
    syllabus: [
      {
        title: "Technique & Tradition",
        lessons: ["Material preparation", "Pattern reading", "Loom setup"],
      },
      {
        title: "Product Readiness",
        lessons: [
          "Finishing quality",
          "Pricing and costing",
          "Packaging basics",
        ],
      },
      {
        title: "Selling with Story",
        lessons: [
          "Product photography",
          "Writing listings",
          "Customer communication",
        ],
      },
    ],
  },
  "TOUR-001": {
    outcomes: [
      "Prepare a guest-ready homestay and understand registration steps.",
      "Apply hospitality and food safety practices in small properties.",
      "Create a stronger online presence for bookings and reviews.",
    ],
    syllabus: [
      {
        title: "Homestay Standards",
        lessons: [
          "Room readiness",
          "Guest journey mapping",
          "Registration checklist",
        ],
      },
      {
        title: "Hospitality Basics",
        lessons: ["Kitchen safety", "Service etiquette", "Handling feedback"],
      },
      {
        title: "Booking Visibility",
        lessons: ["Photo planning", "Listing setup", "Review management"],
      },
    ],
  },
  "AGRI-001": {
    outcomes: [
      "Understand organic certification paperwork and field requirements.",
      "Maintain farm records that support market access and compliance.",
      "Prepare produce for higher-value commercial channels.",
    ],
    syllabus: [
      {
        title: "Certification Readiness",
        lessons: ["NPOP basics", "Field histories", "Inspection preparation"],
      },
      {
        title: "Farm Operations",
        lessons: ["Input tracking", "Harvest logs", "Storage records"],
      },
      {
        title: "Commerce & Quality",
        lessons: ["Post-harvest handling", "Value addition", "Market linkage"],
      },
    ],
  },
};

export const dashboardProfile = {
  learnerName: "Lalhlimpuii",
  district: "Aizawl",
  availability: "available",
  gigsApplied: 6,
  gigsWon: 2,
  enrolledCourses: [
    { id: "IT-002", progress: 82 },
    { id: "CRAFT-003", progress: 61 },
    { id: "TOUR-001", progress: 34 },
  ],
  certificates: [
    { id: "CERT-001", courseId: "IT-001", issuedOn: "12 February 2026" },
    { id: "CERT-002", courseId: "CRAFT-001", issuedOn: "02 January 2026" },
  ],
  suggestedCourseIds: ["IT-003", "AGRI-001"],
};
