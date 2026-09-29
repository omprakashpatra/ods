export type ServiceId = 
  | 'web-dev'
  | 'graphic-design'
  | 'excel-data'
  | 'business-support'
  | 'social-media'
  | 'document-services'
  | 'ai-solutions'
  | 'custom-services';

export interface Service {
  id: ServiceId;
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  turnaroundTime: string;
  startingPrice: string;
  faqs: { question: string; answer: string }[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Websites' | 'Graphic Design' | 'Excel/Data' | 'Business Solutions' | 'Digital Projects';
  shortDescription: string;
  fullDescription: string;
  image: string;
  deliverables: string[];
  outcome: string;
  clientType: string;
  demoNotice?: string;
  technologies: string[];
}

export interface Review {
  id: string;
  customerName: string;
  roleOrCompany: string;
  serviceId: ServiceId;
  serviceName: string;
  rating: number; // 1 to 5
  reviewText: string;
  date: string;
  status: 'approved' | 'pending' | 'rejected';
  verifiedCustomer: boolean;
}

export interface QuoteRequest {
  id: string;
  createdAt: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  serviceId: ServiceId;
  serviceName: string;
  requirements: string;
  budget: string;
  deadline: string;
  status: 'pending_review' | 'quoted' | 'accepted' | 'rejected' | 'changes_requested';
  // Admin-provided quote details
  quoteAmount?: number;
  discount?: number;
  tax?: number;
  finalAmount?: number;
  validUntil?: string;
  terms?: string;
  adminNotes?: string;
}

export interface ContactEnquiry {
  id: string;
  createdAt: string;
  fullName: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  details: string;
  hasAttachment?: boolean;
  status: 'new' | 'in_progress' | 'responded';
}

export interface SupportTicket {
  id: string;
  createdAt: string;
  customerName: string;
  customerEmail: string;
  phone?: string;
  service: string;
  subject: string;
  message: string;
  urgency: 'normal' | 'high' | 'urgent';
  status: 'open' | 'in_review' | 'resolved';
  hasAttachment?: boolean;
  adminReply?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'admin';
  company?: string;
}

export type ActivePage = 
  | 'home'
  | 'services'
  | 'portfolio'
  | 'pricing'
  | 'reviews'
  | 'about'
  | 'faq'
  | 'contact'
  | 'dashboard'
  | 'admin'
  | 'privacy'
  | 'terms'
  | 'refund';
