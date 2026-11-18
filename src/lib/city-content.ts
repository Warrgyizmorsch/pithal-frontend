import { getCityProduct } from "@/lib/city-products";

export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityContent {
  name: string;
  state: string;
  slug: string;
  citySlug: string;
  productSlug: string;
  storageSlug?: string;
  h1: string;
  subheading: string;
  metaTags: string;
  metaDescription: string;
  capacityValue: string;
  capacityLabel: string;
  faqs: CityFAQ[];
  longContent: string;
  updatedAt?: string;
}

export function citySlug(name: string): string {
  return name.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function cityCapacityDefaults(productSlug: string) {
  return productSlug === "stone-crusher"
    ? { capacityValue: "150–600", capacityLabel: "TPH capacity" }
    : { capacityValue: "Expert", capacityLabel: "Product support" };
}

export function createCityContent(name = "Jaipur", state = "Rajasthan", productSlug = "stone-crusher", locationSlug = citySlug(name)): CityContent {
  const product = getCityProduct(productSlug);
  if (!product) throw new Error("Unknown city product.");
  const base: CityContent = {
    name,
    state,
    slug: `${productSlug}-${locationSlug}`,
    citySlug: locationSlug,
    productSlug,
    metaTags: "",
    metaDescription: "",
    ...cityCapacityDefaults(productSlug),
    h1: "Stone Crusher\nManufacturer\nin {{city}}",
    subheading: "Pithal Machines builds high-performance stone crushers and complete crushing plants from 150 TPH to 600 TPH at our Udaipur factory — and supplies, installs and services them for quarries, contractors and infrastructure projects across {{city}}.",
    faqs: [
      { question: "What is the price of a stone crusher plant in {{city}}?", answer: "Price depends on capacity (TPH), the number of crushing stages, rock hardness, screens and conveyors, and freight and installation to your site. Share your requirement and we will send an itemised quotation for {{city}}." },
      { question: "Do you install and service stone crushers in {{city}}?", answer: "Yes. Our engineering team handles installation and commissioning at your site in {{city}}, and our support team is available 24x7 for service and spare parts." },
      { question: "Which crusher do I need for aggregates and M-sand?", answer: "A typical setup uses a jaw crusher for primary crushing, a cone crusher for cubical aggregates, and a VSI crusher for manufactured sand, connected by vibrating screens and conveyors." },
      { question: "What capacities do you manufacture?", answer: "Pithal Machines supplies industrial stone crushers and complete crushing plants from 150 TPH to 600 TPH." },
      { question: "How long does delivery to {{city}} take?", answer: "Delivery and installation schedules depend on your plant configuration and site requirements. Contact our team for the current lead time for your project in {{city}}." },
      { question: "Can I visit your factory before buying?", answer: "Yes. Our factory is at Plot G1-232, RIICO Industrial Area, Kaladwas, Udaipur, Rajasthan. Call +91 98875 37129 to schedule a visit." },
    ],
    longContent: "Most projects in and around {{city}} need a two- or three-stage setup: a jaw crusher for primary breaking, a cone crusher for cubical aggregates, and a VSI crusher when you also want M-sand. Vibrating screens and conveyors tie the stages together so every size lands on the right stockpile.\n\nBefore you compare quotes, fix three things: the tonnes per hour you must produce, the hardness of your rock, and the product sizes your buyers order. With those, Pithal Machines can recommend the right Prime models and give you a like-for-like price for your site in {{city}}.",
  };
  if (productSlug === "stone-crusher") return base;
  return {
    ...base,
    h1: "{{product}}\nManufacturer\nin {{city}}",
    subheading: `Pithal Machines supplies {{product}} equipment for projects in {{city}}${state ? ", {{state}}" : ""}. ${product.description} Speak with our engineers about equipment selection, installation and service for your site.`,
    faqs: [
      { question: "How do I get a price for {{product}} in {{city}}?", answer: "Share your material, required output, feed size and site details. Our engineers will recommend a configuration and provide an itemised quotation for {{city}}." },
      { question: "Do you install and service {{product}} equipment in {{city}}?", answer: "Our engineering team can assist with installation, commissioning and service for your project in {{city}}. Contact us to discuss your site and support requirements." },
      { question: "How do I select the right {{product}} for my project?", answer: "Selection depends on the material being processed, feed characteristics, required output and the equipment already on your site. Our team will review these details before recommending a model." },
      { question: "Can {{product}} equipment be integrated into my existing plant?", answer: "Our engineers can review your current plant layout and operating requirements to advise on equipment compatibility and integration." },
      base.faqs[4], base.faqs[5],
    ],
    longContent: `Choosing {{product}} equipment for a project in {{city}} starts with understanding your material, production targets and site conditions. ${product.description} Share your operating requirements with Pithal Machines so our engineers can recommend a suitable configuration.\n\nBefore comparing quotations, confirm the equipment scope, compatibility with your existing plant, installation requirements, service arrangements and delivery schedule to {{city}}. Our team can help review these details and prepare a quotation for your project.`,
  };
}

// Read earlier city-only records without changing or losing their saved content.
export function normalizeCityContent(record: CityContent): CityContent {
  const productSlug = record.productSlug || "stone-crusher";
  const locationSlug = record.citySlug || (record.slug.startsWith(`${productSlug}-`) ? record.slug.slice(productSlug.length + 1) : record.slug);
  const slug = `${productSlug}-${locationSlug}`;
  const defaults = cityCapacityDefaults(productSlug);
  return { ...record, metaTags: record.metaTags ?? "", metaDescription: record.metaDescription ?? "", capacityValue: record.capacityValue ?? defaults.capacityValue, capacityLabel: record.capacityLabel ?? defaults.capacityLabel, state: record.state || "", productSlug, citySlug: locationSlug, slug, ...(record.slug !== slug ? { storageSlug: record.slug } : {}) };
}

export function resolveCityContent(city: CityContent): CityContent {
  const product = getCityProduct(city.productSlug);
  const resolve = (text: string) => text.replace(/{{city}}/g, () => city.name).replace(/{{state}}/g, () => city.state).replace(/{{product}}/g, () => product?.name || "Stone Crusher");
  const defaults = cityCapacityDefaults(city.productSlug);
  return { ...city, metaTags: resolve(city.metaTags ?? ""), metaDescription: resolve(city.metaDescription ?? ""), capacityValue: resolve(city.capacityValue ?? defaults.capacityValue), capacityLabel: resolve(city.capacityLabel ?? defaults.capacityLabel), h1: resolve(city.h1), subheading: resolve(city.subheading), longContent: resolve(city.longContent), faqs: city.faqs.map(faq => ({ question: resolve(faq.question), answer: resolve(faq.answer) })) };
}

export function validateCityContent(value: unknown): { data: CityContent; error?: never } | { error: string; data?: never } {
  if (!value || typeof value !== "object") return { error: "A city record is required." };
  const body = value as Record<string, unknown>;
  const limits = { name: 100, slug: 220, citySlug: 120, productSlug: 100, h1: 500, subheading: 5000, longContent: 150000 };
  for (const [key, max] of Object.entries(limits)) {
    if (typeof body[key] !== "string" || !body[key].trim() || body[key].length > max) return { error: `${key} is required and must be at most ${max} characters.` };
  }
  if (body.state !== undefined && (typeof body.state !== "string" || body.state.length > 100)) return { error: "State must be text of at most 100 characters." };
  for (const [field, max] of Object.entries({ metaTags: 500, metaDescription: 5000 })) {
    if (body[field] !== undefined && (typeof body[field] !== "string" || body[field].length > max)) return { error: `${field} must be text of at most ${max} characters.` };
  }
  for (const [field, max] of Object.entries({ capacityValue: 60, capacityLabel: 100 })) {
    if (body[field] !== undefined && (typeof body[field] !== "string" || !body[field].trim() || body[field].length > max)) return { error: `${field} must be non-empty text of at most ${max} characters.` };
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(body.slug as string)) return { error: "The URL slug must contain lowercase letters, numbers and single hyphens." };
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(body.citySlug as string)) return { error: "A valid city slug is required." };
  if (!getCityProduct(body.productSlug as string)) return { error: "Select a product from the website catalog." };
  if (body.slug !== `${body.productSlug}-${body.citySlug}`) return { error: "The page URL must match the selected product and city." };
  if (!Array.isArray(body.faqs) || body.faqs.length > 50) return { error: "FAQs must be a list of at most 50 questions." };
  const faqs: CityFAQ[] = [];
  for (const faq of body.faqs) {
    if (!faq || typeof faq.question !== "string" || typeof faq.answer !== "string" || !faq.question.trim() || !faq.answer.trim() || faq.question.length > 500 || faq.answer.length > 10000) return { error: "Every FAQ needs a question (up to 500 characters) and answer (up to 10,000 characters)." };
    faqs.push({ question: faq.question.trim(), answer: faq.answer.trim() });
  }
  const defaults = cityCapacityDefaults(body.productSlug as string);
  return { data: { name: (body.name as string).trim(), state: typeof body.state === "string" ? body.state.trim() : "", slug: body.slug as string, citySlug: body.citySlug as string, productSlug: body.productSlug as string, h1: (body.h1 as string).trim(), subheading: (body.subheading as string).trim(), metaTags: typeof body.metaTags === "string" ? body.metaTags.trim() : "", metaDescription: typeof body.metaDescription === "string" ? body.metaDescription.trim() : "", capacityValue: typeof body.capacityValue === "string" ? body.capacityValue.trim() : defaults.capacityValue, capacityLabel: typeof body.capacityLabel === "string" ? body.capacityLabel.trim() : defaults.capacityLabel, longContent: (body.longContent as string).trim(), faqs } };
}
