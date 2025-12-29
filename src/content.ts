// src/content.ts

export type PricingRow = { label: string; price: string };
export type FAQItem = { q: string; a: string };

export interface SiteContent {
  brand: {
    businessName: string;
    tagline: string;
    shortPitch: string;
    vision: string;
    social: {
      facebook: string;
      tiktok: string;
    };
  };
  images: string[];
  howItWorks: {
    steps: { title: string; description: string }[];
  };
  availability: {
    hours: { days: string; hours: string }[];
    schedulingNote: string;
  };
  service: {
    standardName: string;
    standardSummary: string;
    included: string[];
    addOns: string[];
    frequencyOptions: string[];
  };
  pricing: {
    oneTime: PricingRow[];
    recurring: PricingRow[];
    notes: string[];
  };
  trust: {
    guaranteeHeadline: string;
    guaranteeText: string;
    bookingNotes: string[];
  };
  policies: {
    customerPermissionsHeadline: string;
    items: string[];
  };
  contact: {
    phone: string;
    text: string;
    email: string;
    serviceArea: string; // city/metro
    neighborhoods: string[]; // optional
    formspreeEndpoint: string; // e.g. https://formspree.io/f/xxxxxxx
    formFields: { name: string; label: string; type: string; required: boolean }[];
  };
  ctas: {
    primaryLabel: string;
    secondaryLabel: string;
  };
  faq: FAQItem[];
}

export const SITE_CONTENT: SiteContent = {
  brand: {
    businessName: "Stanley Cleaning",
    tagline: "Clean - Sanitize - Deodorize",
    shortPitch: "We provide reliable, thorough trash can cleaning services to residential customers in Schertz and Cibolo, TX, ensuring clean and odor-free bins for a healthier home environment.",
    vision: "To be the go-to trash can cleaning service in Schertz and Cibolo, known for our quality, reliability, and customer satisfaction.",
    social: {
      facebook: "https://www.facebook.com/stanleycleaning",
      tiktok: "https://www.tiktok.com/@stanleycleaning"
    }
  },

  images: [
    "/20251227_1754_Outdoor Trash Cleaning_remix_01kdh3p7a6f1vs4n42fjpeb3xb.png",
    "/20251227_1759_Pristine Outdoor Trashcan_simple_compose_01kdh402vje56vn85c5r39rwjy.png",
    "/20251227_1803_Washing Supplies Display_simple_compose_01kdh48gnreq9re1f1ge5ydq18.png",
    "/ChatGPT Image Dec 27, 2025, 05_28_16 PM.png",
    "/ChatGPT Image Dec 27, 2025, 05_41_39 PM.png",
    "/ChatGPT Image Dec 27, 2025, 05_46_32 PM.png",
    "/ChatGPT Image Dec 27, 2025, 05_51_00 PM.png",
    "/ChatGPT Image Dec 27, 2025, 05_58_10 PM.png",
    "/ChatGPT Image Dec 27, 2025, 06_02_02 PM.png",
    "/growthteamalpha_76212_cleaning_a_trash_can_36754fe4-4e21-4476-81eb-a95d850ec3de.png"
  ],

  howItWorks: {
    steps: [
      { title: "Set it out", description: "Put your bins out for service." },
      { title: "We wash on-site", description: "We clean and sanitize at your home. Right where the bins are." },
      { title: "Enjoy the difference", description: "Cleaner bins, less odor, better for garage storage." }
    ]
  },

  availability: {
    hours: [
      { days: "Monâ€“Fri", hours: "4:30pmâ€“6:00pm" }, // :contentReference[oaicite:6]{index=6}
      { days: "Satâ€“Sun", hours: "9:00amâ€“6:00pm" }  // :contentReference[oaicite:7]{index=7}
    ],
    schedulingNote:
      "We try to clean the day after trash pickup so bins are empty." // :contentReference[oaicite:8]{index=8}
  },

  service: {
    standardName: "Standard Can Cleaning",
    standardSummary: "Clean, sanitize, deodorize trash can and/or recycle can.", // :contentReference[oaicite:9]{index=9}
    included: [
      "Remove Loose Debris",
      "Wash Interior/Exterior",
      "Disinfectant Application",
      "Deodorizer Finish",
      "Exterior Wipe / Return Placement"
    ], // :contentReference[oaicite:10]{index=10}
    addOns: [
      "Extra Carts (Third Bin, Yard-Waste Bin)",
      "Driveway Pad Rinse (Where Safe/Allowed)",
      "Pest Deterrent Treatment Around Bin Storage Area (Non-Toxic Options)"
    ], // :contentReference[oaicite:11]{index=11}
    frequencyOptions: [
      "Monthly (Best for Odor Control)",
      "Every Other Month (Budget Option)",
      "Quarterly (Light Maintenance)",
      "One-Time (Starter Clean)"
    ] // :contentReference[oaicite:12]{index=12}
  },

  pricing: {
    oneTime: [
      { label: "1 can", price: "$15" },
      { label: "2 cans", price: "$25" },
      { label: "Additional Cans", price: "+$10" }
    ], // :contentReference[oaicite:13]{index=13}
    recurring: [
      { label: "1 can", price: "$10 / period" },
      { label: "2 cans", price: "$20 / period" },
      { label: "Each additional can", price: "+$10 / period" }
    ], // :contentReference[oaicite:14]{index=14}
    notes: [
      "Text/email reminders the evening before and the morning of service.", // :contentReference[oaicite:15]{index=15}
      "Skip policy available for vacations or missed pickup (reschedule rules apply)." // :contentReference[oaicite:16]{index=16}
    ]
  },

  trust: {
    guaranteeHeadline: "Service Guarantee",
    guaranteeText:
      "If odor returns within 48 hours due to cleaning quality, we re-clean.", // :contentReference[oaicite:17]{index=17}
    bookingNotes: [
      "Online booking + SMS confirmation.", // :contentReference[oaicite:18]{index=18}
      "Before/after photo option available." // :contentReference[oaicite:19]{index=19}
    ]
  },

  policies: {
    customerPermissionsHeadline: "Customer Access & Policies",
    items: [
      "Bins must be accessible for service (access).", // :contentReference[oaicite:20]{index=20}
      "Missed pickup policy applies.", // :contentReference[oaicite:21]{index=21}
      "Weather may require rescheduling.", // :contentReference[oaicite:22]{index=22}
      "If a deep-clean surcharge is needed, weâ€™ll confirm before proceeding." // referenced as a customer permission category :contentReference[oaicite:23]{index=23}
    ]
  },

  contact: {
    phone: "(830) 730-2668",
    text: "(830) 730-2668",
    email: "stanleycleaningandwashing@gmail.com",
    serviceArea: "Any residential area inside Schertz or Cibolo",
    neighborhoods: ["[NEIGHBORHOOD 1]", "[NEIGHBORHOOD 2]", "[NEIGHBORHOOD 3]"],
    formspreeEndpoint: "[FORMSPREE_ENDPOINT]",
    formFields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "phone", label: "Phone", type: "tel", required: true },
      { name: "email", label: "Email", type: "email", required: false },
      { name: "address", label: "Address", type: "text", required: true },
      { name: "pickup_day", label: "Trash Pickup Day", type: "text", required: true },
      { name: "bins", label: "How many bins?", type: "number", required: true },
      { name: "plan", label: "Plan (One-time / Monthly / Bi-monthly / Quarterly)", type: "text", required: true },
      { name: "message", label: "Notes (gate code, bin location, etc.)", type: "textarea", required: false }
    ]
  },

  ctas: {
    primaryLabel: "Get a Quote",
    secondaryLabel: "Text Us"
  },

  faq: [
    { q: "What does your service include?", a: "We remove loose debris, wash interior and exterior, apply disinfectant, finish with deodorizer, and return bins neatly." },
    { q: "When do you clean the bins?", a: "We aim for the day after trash pickup (or the same day if needed) so bins are empty." },
    { q: "How often should I schedule service?", a: "Monthly for odor control, every other month for budget, quarterly for light maintenance, or a one-time clean to get started." },
    { q: "Who do you serve?", a: "Homeowners in HOA neighborhoods, families with kids or pets, garage-stored bins, short-term rentals/property managers, and homes near alleys within our service area." },
    { q: "What are your hours?", a: "Mon-Fri: 4:30pm-6:00pm. Sat-Sun: 9:00am-6:00pm." },
    { q: "What are your prices?", a: "One-time: 1 can $15, 2 cans $25. Subscriptions: 1 can $10/period, 2 cans $20/period, each additional can +$10/period. Add-ons are priced per visit." },
    { q: "Do you offer add-ons?", a: "Yes—extra cans, driveway pad rinse (where safe/allowed), and non-toxic pest deterrent near the bin storage area." },
    { q: "How do scheduling and reminders work?", a: "We route by trash day to cut drive time. You get text/email reminders the evening before and morning of service. A skip policy is available for vacations or missed pickup." },
    { q: "How long does cleaning take?", a: "Typical service takes about 15-20 minutes per can including clean, sanitize, and deodorize steps." },
    { q: "How do you handle wastewater?", a: "We manage wastewater responsibly and plan to add onboard tank/reclaim as volume grows to increase water independence." },
    { q: "What is your service guarantee?", a: "If odor returns within 48 hours due to cleaning quality, we will re-clean." },
    { q: "Can I get proof of service?", a: "Yes—before/after photos and timestamps can be provided on request." }
  ]
};


