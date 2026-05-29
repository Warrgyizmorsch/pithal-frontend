export type ButtonVariant = "primary" | "outlineNavy" | "outlineOrange";

export type ImageAsset = {
  src: string;
  alt: string;
};

export type ProductCta = {
  label: string;
  href: string;
  variant: ButtonVariant;
  icon?: string;
};

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export type SectionCopy = {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
};

export type IconText = {
  title: string;
  icon: string;
  text?: string;
};

export type ProductHeroData = {
  breadcrumb: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  subtitle: string;
  description: string;
  descriptionHighlight?: string;
  image: ImageAsset;
  ctas: ProductCta[];
  quickStats: Array<{
    label: string;
    value: string;
    icon: string;
  }>;
};

export type ProductStatsSectionData = SectionCopy & {
  ctaText: string;
  cta?: ProductCta;
};

export type ProductStat = {
  label: string;
  value: string;
  unit: string;
  description: string;
  icon: string;
};

export type IntroCalloutPosition =
  | "bottomCenter"
  | "leftBottom"
  | "leftTop"
  | "rightBottom"
  | "rightMiddle"
  | "rightTop";

export type ProductIntroData = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  image: ImageAsset;
  ctas: ProductCta[];
  features: Array<{
    title: string;
    text: string;
    icon: string;
  }>;
  callouts: Array<{
    label: string;
    text: string;
    position: IntroCalloutPosition;
  }>;
  applications: {
    eyebrow: string;
    description: string;
    items: Array<{
      label: string;
      icon: string;
    }>;
  };
};

export type PerformanceFeature = {
  title: string;
  description: string;
  icon: string;
};

export type SpecificationRow = {
  model: string;
  feedOpening: string;
  maxFeedSize: string;
  capacity: string;
  motorPower: string;
  weight: string;
  dimension: string;
};

export type SpecificationColumn = {
  label: string;
  key: keyof SpecificationRow;
  emphasis?: "primary" | "secondary";
};

export type SpecificationsSectionData = SectionCopy & {
  columns: SpecificationColumn[];
  note: string;
  ctas: ProductCta[];
};

export type IndustryApplication = {
  title: string;
  description: string;
  image: ImageAsset;
  icon: string;
  href: string;
  actionLabel: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon?: string;
  iconFile?: string;
  image: ImageAsset;
};

export type VideoFeature = {
  title: string;
  description: string;
  icon: string;
};

export type VideoSectionData = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  points: string[];
  features?: VideoFeature[];
  thumbnail: ImageAsset;
  caption: string;
  subCaption?: string;
  duration: string;
  button: ProductCta;
};


export type RelatedMachine = {
  title: string;
  description: string;
  image: ImageAsset;
  category: string;
  icon: string;
  href: string;
  actionLabel: string;
};

export type ContactSectionData = {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  image: ImageAsset;
  benefits: Array<{
    title: string;
    text: string;
    icon: string;
  }>;
  contactStrip: {
    phone: string;
    email: string;
  };
  form: {
    title: string;
    fields: Array<{
      label: string;
      name: string;
      type: "email" | "tel" | "text";
      placeholder: string;
    }>;
    dropdown: {
      label: string;
      name: string;
      options: string[];
    };
    textarea: {
      label: string;
      name: string;
      placeholder: string;
    };
    button: string;
  };
};

export type ResourceItem = {
  type: string;
  title: string;
  description: string;
  image: ImageAsset;
  href: string;
  actionLabel: string;
};

export type ResourcesSectionData = SectionCopy & {
  id: string;
  supportCta: ProductCta;
};

export type ProductDetailData = {
  slug: string;
  hero: ProductHeroData;
  statsSection: ProductStatsSectionData;
  stats: ProductStat[];
  intro: ProductIntroData;
  performanceSection: SectionCopy;
  performanceFeatures: PerformanceFeature[];
  specificationsSection: SpecificationsSectionData;
  specifications: SpecificationRow[];
  industriesSection: SectionCopy;
  industries: IndustryApplication[];
  processSection: SectionCopy;
  processSteps: ProcessStep[];
  videoSection: VideoSectionData;
  relatedSection: SectionCopy;
  relatedMachines: RelatedMachine[];
  contactSection: ContactSectionData;
  resourcesSection: ResourcesSectionData;
  resources: ResourceItem[];
  supportFeatures: IconText[];
};
