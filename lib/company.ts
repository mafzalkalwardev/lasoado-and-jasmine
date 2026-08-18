export const company = {
  name: "LASOADO AND JASMINE LLC",
  shortName: "Lasoado & Jasmine",
  legalName: "Lasoado and Jasmine LLC",
  tagline: "Trucking & Logistics Services",
  headline: "Nationwide trucking that shows up on time.",
  owner: "Daniel Lasonne",
  email: "lasoado84@gmail.com",
  phone: "(317) 529-7587",
  phoneHref: "tel:+13175297587",
  address: {
    line1: "3937 N High School Rd",
    city: "Indianapolis",
    state: "IN",
    zip: "46254",
    full: "3937 N High School Rd, Indianapolis, IN 46254",
  },
  hours: "24/7 dispatch — pickup and delivery anytime",
  bonded: true,
  coverage: "All 48 contiguous U.S. states",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/coverage", label: "Coverage" },
  { href: "/safety", label: "Safety" },
  { href: "/quote", label: "Quote" },
  { href: "/contact", label: "Contact" },
] as const;

export const stats = [
  { value: 48, suffix: "", label: "Contiguous states" },
  { value: 24, suffix: "/7", label: "Pickup & delivery" },
  { value: 6, suffix: "+", label: "Equipment types" },
  { value: 100, suffix: "%", label: "Bonded carrier care" },
] as const;

export const fleet = [
  {
    slug: "otr-tractors",
    name: "Over-the-Road Tractors",
    short: "OTR tractors",
    summary:
      "Multiple over-the-road tractors running long-haul freight across the Lower 48.",
    details:
      "We operate multiple OTR tractors for dry van and general freight. Whether the load is regional or coast-to-coast, our drivers are punctual, our equipment is inspected, and the freight moves safely and on time.",
    typical: ["Dry van freight", "General commodities", "Long-haul OTR", "Team driver runs"],
    accessories: ["Current inspections", "Clean equipment", "Secure load handling"],
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "power-only",
    name: "Power Only",
    short: "Power only",
    summary:
      "Need a tractor and a professional driver for your trailer? We pull power-only nationwide.",
    details:
      "Power-only service pairs our tractors and drivers with your trailer. Different weights and run lengths are welcome — we match the job with clean power and a driver who keeps the appointment.",
    typical: ["Drop-and-hook support", "Loaded trailer moves", "Spot and dedicated power"],
    accessories: ["Inspected tractors", "Punctual drivers", "24/7 availability"],
    image:
      "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "sprinter-vans",
    name: "Sprinter Vans",
    short: "Sprinter vans",
    summary:
      "Expedited and time-critical freight with a tight, clean cargo space.",
    details:
      "Sprinter vans are built for urgent, high-value, and appointment-sensitive freight. Late-night pickups, late-night deliveries, and 24/7 windows are part of how we work.",
    typical: ["Expedited freight", "High-value cargo", "Hot shots and rush deliveries"],
    accessories: ["Enclosed cargo", "Clean interior", "Punctual team"],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "cargo-vans",
    name: "Cargo Vans",
    short: "Cargo vans",
    summary:
      "Flexible cargo vans for smaller freight that still needs professional handling.",
    details:
      "Cargo vans cover dedicated and on-demand moves that do not need a box truck or tractor. Clean vans, no holes, and drivers who treat every piece of freight with care.",
    typical: ["Smaller freight", "Dedicated van runs", "Same-day and overnight"],
    accessories: ["Secure cargo area", "Clean vans", "Flexible scheduling"],
    image:
      "https://images.unsplash.com/photo-1544620341-11cb2cd96b6d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "box-16",
    name: "16ft Box Truck",
    short: "16ft box",
    summary:
      "City and regional box work with liftgate, straps, load locks, and pallet jack.",
    details:
      "Our 16ft box trucks are clean — no holes — and roll with the accessories a professional delivery needs: straps, load locks, liftgate, and pallet jacks. Ideal for palletized freight, store deliveries, and residential or commercial drop-offs that require a liftgate.",
    typical: ["Palletized freight", "Store deliveries", "Liftgate appointments"],
    accessories: ["Straps", "Load locks", "Liftgate", "Pallet jack"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "box-26",
    name: "26ft Box Truck",
    short: "26ft box",
    summary:
      "Larger cube for heavier or higher-volume freight, fully equipped like the 16ft.",
    details:
      "The 26ft box truck adds cube and payload while keeping the same professional kit: straps, load locks, liftgate, and pallet jacks. Clean box, current inspections, and drivers who can work late-night or early-morning windows.",
    typical: ["Higher cube freight", "Multi-stop deliveries", "Dock and liftgate work"],
    accessories: ["Straps", "Load locks", "Liftgate", "Pallet jack"],
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80",
  },
] as const;

export const services = [
  {
    title: "48-state OTR",
    text: "We run over the road in all 48 contiguous states. Coast to coast, border to border, one phone call.",
  },
  {
    title: "Every freight type",
    text: "General freight, dry goods, palletized cargo, and more. If it is legal to haul, we can move it with the right unit.",
  },
  {
    title: "24/7 pickup & delivery",
    text: "Late-night pickup. Late-night delivery. Early morning docks. Our drivers are punctual around the clock.",
  },
  {
    title: "Team drivers",
    text: "Team service is available when the clock is tight and the miles are long. Freight keeps moving while one driver rests.",
  },
  {
    title: "Time-definite",
    text: "Appointments matter. We plan the run, run the plan, and get freight there on time — time after time.",
  },
  {
    title: "Bonded carrier",
    text: "We operate as a bonded carrier and treat every load as if it were our own — documented, secured, and delivered with care.",
  },
] as const;

export const values = [
  {
    title: "Clean equipment",
    text: "Trucks with no holes, interiors that stay presentable, and gear that is ready before we roll.",
  },
  {
    title: "Clean records",
    text: "Drivers with clean driving records and a professional standard on every dispatch.",
  },
  {
    title: "Proper inspections",
    text: "Trucks stay current on inspections. Safety is scheduled, not improvised.",
  },
  {
    title: "Safe handling",
    text: "Straps, load locks, liftgates, and pallet jacks are used the right way so freight rides securely.",
  },
] as const;

export const faqs = [
  {
    q: "Do you really cover all 48 states?",
    a: "Yes. LASOADO AND JASMINE LLC runs over the road throughout the contiguous United States from our Indianapolis base.",
  },
  {
    q: "What can you haul?",
    a: "We haul all types of legal freight — general commodities, palletized goods, expedited van freight, and more — matched to the right truck, van, or power-only unit.",
  },
  {
    q: "Do you offer late-night pickup or delivery?",
    a: "Yes. Pickup and delivery run 24/7, including late-night windows. Our drivers are punctual and dispatch is always on.",
  },
  {
    q: "Is team driver service available?",
    a: "Yes. Team drivers are available for faster transcontinental and time-critical runs.",
  },
  {
    q: "What comes with the box trucks?",
    a: "Both 16ft and 26ft box trucks include straps, load locks, liftgate, and pallet jacks. Trucks are clean with no holes and current inspections.",
  },
  {
    q: "Are you a bonded carrier?",
    a: "Yes. We operate as a bonded carrier and move freight safely, securely, and on time.",
  },
] as const;

export const equipmentOptions = [
  "OTR tractor / dry van",
  "Power only",
  "Sprinter van",
  "Cargo van",
  "16ft box truck",
  "26ft box truck",
  "Not sure — recommend equipment",
] as const;

export const specialNeeds = [
  { id: "liftgate", label: "Liftgate" },
  { id: "pallet-jack", label: "Pallet jack" },
  { id: "straps", label: "Straps / load locks" },
  { id: "team", label: "Team drivers" },
  { id: "late-night", label: "Late-night pickup or delivery" },
  { id: "24-7", label: "24/7 appointment" },
] as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address.full)}`;
export const formSubmitEndpoint = `https://formsubmit.co/${company.email}`;

export type FleetItem = (typeof fleet)[number];
