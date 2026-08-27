export const site = {
  name: "KSEA Upstate New York Chapter",
  shortName: "KSEA Upstate NY",
  tagline: "Korean-American Scientists and Engineers Association",
  url: "https://uny.ksea.org",
  email: "unyskorea@gmail.com",
  description:
    "The Upstate New York chapter of the Korean-American Scientists and Engineers Association — connecting Korean-American researchers, engineers, and students across Cornell, RIT, Rochester, Binghamton, Buffalo, RPI, and Syracuse.",
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/programs", label: "Programs" },
  { href: "/membership", label: "Membership" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

/** Aggregate figures only, transcribed by hand from the 2025–2026 Annual Report.
 *  No build step reads the member roster, and no member data lives in this repo. */
export const chapterStats = {
  totalMembers: 72,
  paidMembers: 62,
  paidMembersPrior: 35,
  institutions: 10,
  events2526: 7,
  asOf: "May 2026",
};

/** Institutions with chapter members, ordered by membership, from the
 *  2025–2026 Annual Report. Members using personal email accounts are not
 *  attributed to an institution. */
export const institutions = [
  { name: "Cornell University", city: "Ithaca" },
  { name: "Rochester Institute of Technology", city: "Rochester" },
  { name: "University of Rochester", city: "Rochester" },
  { name: "Binghamton University (SUNY)", city: "Binghamton" },
  { name: "University at Buffalo (SUNY)", city: "Buffalo" },
  { name: "Rensselaer Polytechnic Institute", city: "Troy" },
  { name: "Syracuse University", city: "Syracuse" },
  { name: "SUNY Brockport", city: "Brockport" },
  { name: "Brown University", city: "Providence, RI" },
  { name: "IMEG", city: "Industry" },
];

export const nationalLinks = {
  home: "https://www.ksea.org/",
  join: "https://www.ksea.org/membership",
  technicalGroups: "https://www.ksea.org/technical-g",
  nmsc: "https://www.ksea.org/nmsc",
  scholarships: "https://www.ksea.org/scholarship",
};

/** Membership by member type as of May 2026, from the 2025–2026 Annual Report.
 *  Aggregate counts only — the chapter does not publish an institution-level
 *  breakdown, and no member records live in this repo.
 *
 *  NOTE: the annual report's TOTAL row reads 9 / 22 / 37 / 71, but its own
 *  institution rows sum to 9 / 22 / 41 / 72. These are the row-derived figures,
 *  so every total on the site agrees with every other. */
export const membershipByType = [
  { label: "Undergraduate", count: 9, color: "#2a78d6" },
  { label: "Graduate", count: 22, color: "#eb6834" },
  { label: "Regular", count: 41, color: "#1baf7a" },
];

/** The chapter's stated goals for the 2026–2027 program year. */
export const annualPlan = {
  year: "2026–2027",
  goals: [
    {
      title: "Deliver real benefits to members",
      body: "Research presentation opportunities, career development, and mentoring — the things members actually join for.",
    },
    {
      title: "Grow membership",
      body: "Reach researchers and students at every institution in the region, and convert attendance into membership.",
    },
  ],
  note: "Dates are tentative and are being checked against the academic calendars of member institutions. Venues and speakers will be announced as they are confirmed.",
};

/** Member institutions plotted on the homepage map.
 *
 *  `x` / `y` are the campus's true geographic position as a percentage of the
 *  map box, projected from lat/lon (equirectangular, longitude flattened by
 *  cos(42.9°) so the state isn't stretched sideways).
 *
 *  `cx` / `cy` are where the logo chip is drawn. Rochester-area campuses sit
 *  within a couple of percent of each other, so the chips are pulled aside and
 *  joined to their true point by a leader line — the dot is the location, the
 *  chip is only the label. Adjust `cx`/`cy` freely; never `x`/`y`. */
export const mapInstitutions = [
  { name: "University at Buffalo", short: "Buffalo", city: "Buffalo, NY", logo: "/images/institutions/buffalo.png", href: "https://www.buffalo.edu/", x: 12.71, y: 45.09, cx: 10, cy: 57 },
  { name: "SUNY Brockport", short: "Brockport", city: "Brockport, NY", logo: "/images/institutions/brockport.png", href: "https://www.brockport.edu/", x: 23.74, y: 40.35, cx: 17, cy: 27 },
  { name: "University of Rochester", short: "Rochester", city: "Rochester, NY", logo: "/images/institutions/rochester.png", href: "https://www.rochester.edu/", x: 27.86, y: 42.24, cx: 30, cy: 27 },
  { name: "Rochester Institute of Technology", short: "RIT", city: "Rochester, NY", logo: "/images/institutions/rit.png", href: "https://www.rit.edu/", x: 27.18, y: 43.22, cx: 34, cy: 40 },
  { name: "Syracuse University", short: "Syracuse", city: "Syracuse, NY", logo: "/images/institutions/syracuse.png", href: "https://www.syracuse.edu/", x: 47.34, y: 44.23, cx: 49, cy: 33 },
  { name: "Rensselaer Polytechnic Institute", short: "RPI", city: "Troy, NY", logo: "/images/institutions/rpi.png", href: "https://www.rpi.edu/", x: 79.4, y: 51.15, cx: 80, cy: 43 },
  { name: "Cornell University", short: "Cornell", city: "Ithaca, NY", logo: "/images/institutions/cornell.png", href: "https://www.cornell.edu/", x: 42.93, y: 57.33, cx: 33, cy: 55 },
  { name: "Binghamton University", short: "Binghamton", city: "Binghamton, NY", logo: "/images/institutions/binghamton.png", href: "https://www.binghamton.edu/", x: 49.51, y: 65.48, cx: 59, cy: 56 },
];

/** New York State outline, projected to a 1000 × 797 viewBox.
 *  Derived from public-domain US Census state boundary data. */
export const nyOutline = {
  viewBox: "0 0 1000 797",
  path: "M837.7 1.0L839.2 38.0L832.0 71.2L844.2 103.4L840.6 137.5L825.6 173.6L837.0 222.4L829.9 237.1L850.6 266.3L846.3 389.2L847.7 404.8L816.3 521.9L819.2 528.7L810.6 663.4L819.9 678.0L787.7 697.5L797.0 718.0L852.8 732.6L864.2 721.9L912.1 721.9L936.4 716.0L976.4 687.7L979.3 708.2L1000.0 717.0L952.1 743.3L851.3 782.4L809.1 790.2L781.3 788.2L760.5 797.0L749.1 767.7L764.8 716.0L721.2 690.7L661.2 651.6L655.5 639.0L635.5 638.0L611.9 607.7L614.7 581.4L599.0 560.9L589.0 561.9L574.7 537.5L0.0 537.5L0.0 492.6L0.0 489.7L80.1 439.0L92.9 414.6L118.7 398.0L108.6 367.8L97.9 361.9L90.1 313.1L166.5 292.7L234.5 293.6L261.6 298.5L290.9 318.0L309.5 310.2L366.0 311.2L400.3 298.5L436.7 266.3L460.3 265.3L461.0 216.6L473.2 188.3L443.9 168.8L450.3 146.3L502.5 116.1L521.8 89.7L584.7 30.2L644.0 0.0L732.7 4.9L837.7 1.0Z",
};
