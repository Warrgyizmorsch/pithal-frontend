export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  image?: string;
  specifications: Record<string, string>;
  features: string[];
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image?: string;
  productCount: number;
}

export interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  productInterest?: string;
  message: string;
  status: 'PENDING' | 'CONTACTED' | 'CLOSED';
  sourcePage?: string;
  createdAt: string;
}

export interface DealerApplication {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
  experienceYears?: number;
  message?: string;
  status: 'PENDING' | 'REVIEWED' | 'APPROVED' | 'REJECTED';
  createdAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tag?: string;
  readTime?: string;
  views?: string;
  image?: string;
  status?: 'Publish' | 'Draft';
  metaTags?: string;
  metaDescription?: string;
  faqs?: { question: string; answer: string }[];
  publishedAt: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}
