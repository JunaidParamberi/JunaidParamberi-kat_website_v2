
export enum ServiceType {
  LABOR = 'On-Demand Labor Supply',
  RECRUITMENT = 'Overseas Recruitment',
  HEALTHCARE = 'Healthcare Manpower',
  TECHNICAL = 'Technical Services',
  EQUIPMENT = 'Heavy Equipment Rental',
  TRAVEL = 'Tours & Travel Services'
}

export interface ServiceDetail {
  slug: string;
  type: ServiceType;
  title: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  features: string[];
  coreServices: { title: string; description: string }[];
  additionalServices?: { title: string; description: string }[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  type?: 'text' | 'form-quote' | 'success';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  videoUrl?: string;
  description: string;
  fullCaseStudy?: {
    challenge: string;
    solution: string;
    impact: string;
    stats: { label: string; value: string }[];
    gallery: string[];
  };
}

export interface Sector {
  name: string;
  icon: string;
  description: string;
  longDescription?: string;
  technicalSpecs?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  quote?: string;
  category: 'Industrial Blog' | 'Press Release' | 'Technology' | 'Corporate';
  date: string;
  author: string;
  authorRole: string;
  image: string;
  readTime: string;
  tags: string[];
}

export interface TrackingStatus {
  id: string;
  origin: string;
  destination: string;
  status: string;
  currentLocation: string;
  estimatedArrival: string;
  milestones: {
    date: string;
    location: string;
    description: string;
  }[];
}
