export interface MockLead {
  id: string;
  company: string;
  contactName: string;
  contactTitle: string;
  email: string;
  emailStatus: 'verified' | 'pending' | 'invalid';
  phone?: string;
  industry: string;
  location: string;
  city: string;
  state: string;
  country: string;
  companySize: string;
  source: 'LinkedIn' | 'Google Maps' | 'Yellow Pages' | 'Company Website';
  qualityScore: number;
  verified: boolean;
}

// This is mainly for TypeScript interfaces and utilities
// The actual mock data generation is handled server-side
export const INDUSTRIES = [
  "Healthcare & Medical",
  "Technology & Software",
  "Finance & Banking", 
  "Real Estate",
  "Legal Services",
  "Education",
  "Retail & E-commerce",
  "Manufacturing",
] as const;

export const LOCATIONS = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "Miami, FL", 
  "Seattle, WA",
  "Boston, MA",
] as const;

export const COMPANY_SIZES = [
  "1-10",
  "11-50",
  "51-200", 
  "201-500",
  "500+",
] as const;

export const DATA_SOURCES = [
  "LinkedIn",
  "Google Maps", 
  "Yellow Pages",
  "Company Website",
] as const;

export const EMAIL_STATUSES = [
  "verified",
  "pending", 
  "invalid",
] as const;
