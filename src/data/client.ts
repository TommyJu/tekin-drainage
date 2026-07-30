// Site-wide config. This feeds Meta.astro, LocalBusiness JSON-LD, and every
// component below — edit values here rather than hunting through components.

export const SITE = {
  title: "Tekin Plumbing & Drainage | 24/7 Emergency Service",
  description:
    "24/7 emergency plumbing & drainage service across the Lower Mainland and Fraser Valley. Camera inspection, hydro jetting, leak detection, and more. Call now.",
  url: "https://www.tekindps.com",
  author: "Tekin Drainage",
  locale: "en-CA"
};

export const BUSINESS = {
  name: "Tekin Plumbing & Drainage Services",
  phoneDisplay: "(604) 996-6760",
  phoneHref: "tel:6049966760",
  email: "info@tekindps.com",
  emailHref: "mailto:info@tekindps.com",

  // Used for LocalBusiness JSON-LD. Fill in a real street address if you
  // want it to show in schema — city/region/country alone is fine too.
  address: {
    province: "BC",
    country: "Canada",
    city: "Vancouver"
  },

  openingHours: "Mo-Su 00:00-23:59", // 24/7

  serviceAreas: [
    "Vancouver",
    "Burnaby",
    "West Vancouver",
    "North Vancouver",
    "Coquitlam",
    "Port Coquitlam",
    "Port Moody",
    "Surrey",
    "Langley",
    "Richmond",
    "New Westminster",
    "Delta",
    "White Rock",
    "Abbotsford",
    "Maple Ridge",
    "Pitt Meadows",
    "Mission",
  ],

  // Replace REPLACE-ME with your actual Google Place ID.
  // Find it at https://developers.google.com/maps/documentation/places/web-service/place-id
  googleReviewUrl: "https://maps.app.goo.gl/dczbbgjVkUPZ8XLQA",
};

// Expanded service detail — each item gets a short explanation instead of
// being a bare list word, per the "expand on services" request.
export const SERVICES = [
  {
    category: "Plumbing",
    items: [
      {
        name: "Camera Inspection",
        detail:
          "We run a waterproof camera through your pipes to pinpoint blockages, cracks, or root intrusion before we dig or cut anything.",
      },
      {
        name: "Water Main Repair & Replacement",
        detail:
          "From small leaks to full replacement, we repair or upgrade the main line bringing water into your property.",
      },
      {
        name: "Flood Prevention",
        detail:
          "Backwater valves, sump pumps, and drainage upgrades to keep basements and crawl spaces dry during heavy rain.",
      },
      {
        name: "Leak Detection",
        detail:
          "Non-invasive detection finds hidden leaks behind walls or under slabs without tearing up your property to find them.",
      },
      {
        name: "Septic Maintenance",
        detail:
          "Routine inspection, pumping, and repair to keep septic systems running and avoid costly emergency failures.",
      },
      {
        name: "Backflow Prevention",
        detail:
          "Installation, testing, and certification of backflow devices to keep contaminants out of your clean water supply.",
      },
    ],
  },
  {
    category: "Drainage",
    items: [
      {
        name: "Hydro Jetting",
        detail:
          "High-pressure water clears grease, roots, and years of buildup from drain lines — faster and more thorough than a standard snake.",
      },
      {
        name: "Excavation",
        detail:
          "When a repair can't be done trenchless, we excavate carefully and restore the site once the work is complete.",
      },
      {
        name: "Trenchless Repair",
        detail:
          "Pipe relining and bursting techniques fix damaged lines with minimal digging, saving your driveway, lawn, or landscaping.",
      },
      {
        name: "Pump Stations",
        detail:
          "Installation and servicing of sewage and stormwater pump stations for properties below the main sewer line.",
      },
      {
        name: "Sewer Main Repair",
        detail:
          "Full diagnosis and repair of municipal-connected sewer mains, from minor clogs to collapsed sections.",
      },
      {
        name: "Perimeter Drains",
        detail:
          "Clearing and repairing the drains around your foundation that keep groundwater away from your basement walls.",
      },
    ],
  },
];
