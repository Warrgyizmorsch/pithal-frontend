import { products } from "@/data/homeData";

export interface CityProduct {
  slug: string;
  label: string;
  name: string;
  href: string;
  image: string;
  description: string;
}

const productDetails: Record<string, { slug: string; name: string; description: string }> = {
  "/products/jaw-crushers": { slug: "prime-jaw-crusher", name: "Prime Jaw Crusher", description: "Primary crushing equipment for breaking hard rock, granite and quarry feed." },
  "/products/prime-ultrarock": { slug: "prime-ultrarock", name: "Prime UltraRock", description: "Crushing equipment engineered for demanding rock processing applications." },
  "/products/prime-bucket": { slug: "prime-bucket-crusher", name: "Prime Bucket Crusher", description: "Bucket crushing equipment for processing material on site." },
  "/products/cone-crushers": { slug: "prime-cone-crusher", name: "Prime Cone Crusher", description: "Secondary and tertiary crushing equipment for producing well-shaped aggregates." },
  "/products/vsi-crushers": { slug: "prime-vsi-crusher", name: "Prime VSI Crusher", description: "Sand-making and shaping equipment for manufactured sand and aggregates." },
  "/products/vibrating-screens": { slug: "prime-vibrating-screen", name: "Prime Vibrating Screen", description: "Screening equipment for separating aggregates into graded product sizes." },
  "/products/conveyor-systems": { slug: "prime-conveyor-system", name: "Prime Conveyor System", description: "Material handling systems for transferring material between plant stages." },
  "/products/complete-plants": { slug: "prime-complete-plant", name: "Prime Complete Plant", description: "Matched crushing and screening plants configured for your material and output requirements." },
  "/products/m-sand-plant": { slug: "prime-m-sand-crusher-plant", name: "Prime M-Sand Crusher Plant", description: "Integrated manufactured-sand plants for construction and concrete production." },
  "/products/crusher-machine": { slug: "prime-crusher-machine", name: "Prime Crusher Machine", description: "Crushing machinery configured for quarry, mining and aggregate processing requirements." },
};

export const CITY_PRODUCTS: CityProduct[] = [
  { slug: "stone-crusher", label: "Stone Crusher (general)", name: "Stone Crusher", href: "/products/crushers", image: "/images/projects/rajasthan.jpg", description: "Stone crushers and complete crushing plants for quarrying, contracting and infrastructure projects." },
  ...products.map(product => ({ ...productDetails[product.href], label: product.title, href: product.href, image: product.image })),
  { slug: "prime-vibrating-feeder", label: "Prime Vibrating Feeders", name: "Prime Vibrating Feeder", href: "/products/feeders", image: "/images/products/vibrating-feeder/product-review.png", description: "Heavy-duty vibrating feeders for controlled material flow into the crushing line." },
];

export function getCityProduct(slug: string): CityProduct | undefined {
  return CITY_PRODUCTS.find(product => product.slug === slug);
}

export function cityPagePath(page: { slug: string; productSlug: string }): string {
  return page.productSlug === "stone-crusher" ? `/city/${page.slug}` : `/${page.slug}`;
}
