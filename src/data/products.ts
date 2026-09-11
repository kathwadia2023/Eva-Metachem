// ============================================================
// Centralized product catalog.
// Add a new product by adding one object here — every page
// (Products grid, Industries, Inquiry form, product detail
// route) reads from this file, so nothing needs to be
// duplicated elsewhere.
//
// Only facts present in the supplied EVA METACHEM flyers are
// included. Anything not provided (CAS numbers, certifications,
// capacity, export countries, etc.) is intentionally left out
// rather than invented — fields exist as optional so they can
// be filled in later without a schema change.
// ============================================================

export interface ProductHighlight {
  text: string;
}

export interface ProductApplication {
  name: string;
  detail: string;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  formula: string;
  tagline: string;
  description: string;
  grades: string[];
  gradeLabel: string; // e.g. "Purity Grades" or "Seal Grades"
  color: string; // accent used for this product's swatch/crystal color
  image: string;
  highlights: string[];
  applications: ProductApplication[];
  packaging: string[];
  // Optional technical fields — left undefined until real data is supplied.
  casNumber?: string;
  molecularWeight?: string;
  appearance?: string;
  solubility?: string;
}

export const products: Product[] = [
  {
    slug: "copper-sulphate-pentahydrate",
    name: "Copper Sulphate Pentahydrate",
    shortName: "Copper Sulphate",
    formula: "CuSO\u2084\u00b75H\u2082O",
    tagline: "Bright blue crystals. Dependable supply.",
    description:
      "A reliable, high-purity Copper Sulphate Pentahydrate supplied as vibrant blue crystals, produced with consistent assay across every batch for industries that cannot afford variability.",
    grades: ["24%", "24.5%", "25%"],
    gradeLabel: "Available Grades",
    color: "#2f6fb0",
    image: "copper-sulphate",
    highlights: [
      "High purity copper sulphate (24%, 24.5% & 25%)",
      "Bright blue crystalline form",
      "Consistent quality and reliable supply",
      "Multiple grades to suit application-specific requirements",
      "Customized packaging available",
    ],
    applications: [
      { name: "Agriculture", detail: "Soil correction, micronutrient, plant growth" },
      { name: "Dye Industry", detail: "Dyeing, pigments & intermediates" },
      { name: "Animal Feed", detail: "Essential trace mineral for healthy livestock" },
      { name: "Chemical Industry", detail: "Catalyst, intermediates & process chemicals" },
      { name: "Water Treatment", detail: "Controlling algae & microbial growth" },
      { name: "Battery Industry", detail: "Electroplating, battery raw material & R&D" },
      { name: "Electroplating", detail: "Plating and surface-finishing processes" },
    ],
    packaging: ["25 kg HDPE Bags", "50 kg HDPE Bags", "1000 kg FIBC Jumbo Bags"],
    appearance: "Bright blue crystals",
  },
  {
    slug: "cobalt-sulphate-heptahydrate",
    name: "Cobalt Sulphate Heptahydrate",
    shortName: "Cobalt Sulphate",
    formula: "CoSO\u2084\u00b77H\u2082O",
    tagline: "Premium purity. Precise, repeatable performance.",
    description:
      "High-purity Cobalt Sulphate Heptahydrate with consistent quality for diverse industrial applications, supplied in premium grades engineered for excellent solubility and uniform particle size.",
    grades: ["20.5%", "20.8%", "21%"],
    gradeLabel: "Available Grades",
    color: "#c22a5a",
    image: "cobalt-sulphate",
    highlights: [
      "High purity with low impurities",
      "Consistent assay and quality",
      "Excellent solubility",
      "Uniform particle size",
      "Reliable supply and timely delivery",
      "Customized packaging available",
    ],
    applications: [
      { name: "Battery Industry", detail: "Lithium-ion battery materials & electrodes" },
      { name: "Dye & Pigment Industry", detail: "Dyes, pigments & ceramic coloring" },
      { name: "Chemical Industry", detail: "Catalysts, intermediates & process chemicals" },
      { name: "Agriculture", detail: "Micronutrient for plant growth and health" },
      { name: "Animal Feed", detail: "Essential trace mineral for animal nutrition" },
      { name: "Electroplating", detail: "Improves plating quality and brightness" },
    ],
    packaging: ["25 kg HDPE Bags", "50 kg HDPE Bags", "1000 kg FIBC Jumbo Bags"],
    appearance: "Deep pink/red crystals",
  },
  {
    slug: "zinc-oxide",
    name: "Zinc Oxide",
    shortName: "Zinc Oxide",
    formula: "ZnO",
    tagline: "Premium quality. Consistent performance.",
    description:
      "High-purity Zinc Oxide that meets the diverse needs of industries where quality, reliability and performance matter most, available in White Seal and Gold Seal grades.",
    grades: ["White Seal", "Gold Seal"],
    gradeLabel: "Seal Grades",
    color: "#8b8f94",
    image: "zinc-oxide",
    highlights: [
      "High purity with low impurities",
      "Excellent whiteness & brightness",
      "Uniform particle size for better performance",
      "Consistent quality & reliable supply",
      "Customized packaging as per requirement",
    ],
    applications: [
      { name: "Rubber", detail: "Accelerator, activator, reinforcing agent" },
      { name: "Ceramics", detail: "Glaze, opacifier & flux" },
      { name: "Paints & Coatings", detail: "Enhances brightness, durability & weather resistance" },
      { name: "Cosmetics", detail: "UV protection, skin soothing & coverage" },
      { name: "Feed Additives", detail: "Essential trace element for animal nutrition" },
      { name: "Pharmaceuticals", detail: "Pharmaceutical excipients & formulations" },
      { name: "Agriculture", detail: "Micronutrient source & soil conditioner" },
    ],
    packaging: ["25 kg HDPE Bags", "50 kg HDPE Bags", "1000 kg FIBC Jumbo Bags"],
    appearance: "White powder",
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

// ============================================================
// Industries — cross-referenced against the products that
// serve them, built directly from the "Widely Used In" panels
// on each flyer.
// ============================================================

export interface Industry {
  name: string;
  productSlugs: string[];
}

export const industries: Industry[] = [
  { name: "Agriculture", productSlugs: ["copper-sulphate-pentahydrate", "cobalt-sulphate-heptahydrate", "zinc-oxide"] },
  { name: "Battery Technology", productSlugs: ["copper-sulphate-pentahydrate", "cobalt-sulphate-heptahydrate"] },
  { name: "Animal Nutrition", productSlugs: ["copper-sulphate-pentahydrate", "cobalt-sulphate-heptahydrate", "zinc-oxide"] },
  { name: "Electroplating", productSlugs: ["copper-sulphate-pentahydrate", "cobalt-sulphate-heptahydrate"] },
  { name: "Water Treatment", productSlugs: ["copper-sulphate-pentahydrate"] },
  { name: "Chemical Industry", productSlugs: ["copper-sulphate-pentahydrate", "cobalt-sulphate-heptahydrate"] },
  { name: "Dye & Pigments", productSlugs: ["copper-sulphate-pentahydrate", "cobalt-sulphate-heptahydrate"] },
  { name: "Rubber", productSlugs: ["zinc-oxide"] },
  { name: "Ceramics", productSlugs: ["zinc-oxide"] },
  { name: "Paints & Coatings", productSlugs: ["zinc-oxide"] },
  { name: "Pharmaceuticals", productSlugs: ["zinc-oxide"] },
  { name: "Cosmetics", productSlugs: ["zinc-oxide"] },
];

// ============================================================
// Company constants
// ============================================================

export const company = {
  name: "EVA METACHEM",
  tagline: "Reliable Chemical Solutions for Global Industries",
  slogan: "Quality Chemicals. Stronger Industries.",
  email: "evametachem@gmail.com",
  phone: "+91 94275 99521",
  phoneHref: "+919427599521",
  whatsappHref: "https://wa.me/919427599521",
  location: "Ahmedabad, Gujarat, India",
  founded: "2024",
  website: "www.evametachem.com",
};

export const packagingOptions = [
  {
    name: "25 kg HDPE Bags",
    detail: "Sealed, moisture-resistant bags suited for smaller-lot and trial orders.",
  },
  {
    name: "50 kg HDPE Bags",
    detail: "The standard industrial unit for regular production requirements.",
  },
  {
    name: "1000 kg FIBC Jumbo Bags",
    detail: "Bulk jumbo bags for large-volume industrial and export orders.",
  },
];

export const qualitySteps = [
  {
    step: "01",
    title: "Raw Material Selection",
    detail: "Inputs are selected against internal criteria before they enter the production process.",
  },
  {
    step: "02",
    title: "Chemical Synthesis",
    detail: "Controlled processing designed to deliver the target grade and consistent crystal or powder form.",
  },
  {
    step: "03",
    title: "Process Control",
    detail: "Parameters are monitored through each production stage to limit batch-to-batch variation.",
  },
  {
    step: "04",
    title: "Quality Checks",
    detail: "Batches are checked prior to release so purity and appearance meet the stated grade.",
  },
  {
    step: "05",
    title: "Batch Consistency",
    detail: "Results are tracked across batches to keep supply predictable for repeat industrial buyers.",
  },
  {
    step: "06",
    title: "Packaging Inspection",
    detail: "Bags and jumbo bags are inspected for seal integrity and correct labeling before dispatch.",
  },
  {
    step: "07",
    title: "Dispatch Readiness",
    detail: "Orders are palletized and prepared for pickup or onward freight coordination.",
  },
];

export const whyPoints = [
  { title: "High Purity", detail: "Low impurities engineered into every production run." },
  { title: "Consistent Quality", detail: "Assay and appearance held steady batch after batch." },
  { title: "Reliable Supply", detail: "Predictable availability for planning-critical industries." },
  { title: "Quality Control", detail: "Multi-stage checks from raw material to dispatch." },
  { title: "Customized Solutions", detail: "Grades and packaging matched to your requirement." },
  { title: "Export Ready", detail: "Palletization and logistics coordination for international orders." },
];
