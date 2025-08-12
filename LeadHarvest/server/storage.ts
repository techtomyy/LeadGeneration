import { type User, type InsertUser, type Lead, type InsertLead, type SearchHistory, type InsertSearchHistory, type SubscriptionPlan, type LeadSearchParams } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserCredits(id: string, credits: number): Promise<User | undefined>;
  
  // Lead methods
  searchLeads(params: LeadSearchParams): Promise<{ leads: Lead[], total: number }>;
  createLead(lead: InsertLead): Promise<Lead>;
  getLeadsByIds(ids: string[]): Promise<Lead[]>;
  
  // Search history methods
  createSearchHistory(history: InsertSearchHistory): Promise<SearchHistory>;
  getUserSearchHistory(userId: string): Promise<SearchHistory[]>;
  
  // Subscription plans
  getSubscriptionPlans(): Promise<SubscriptionPlan[]>;
  getSubscriptionPlan(id: string): Promise<SubscriptionPlan | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private leads: Map<string, Lead>;
  private searchHistories: Map<string, SearchHistory>;
  private subscriptionPlans: Map<string, SubscriptionPlan>;

  constructor() {
    this.users = new Map();
    this.leads = new Map();
    this.searchHistories = new Map();
    this.subscriptionPlans = new Map();
    this.initializeSubscriptionPlans();
    this.generateMockLeads();
  }

  private initializeSubscriptionPlans() {
    const plans: SubscriptionPlan[] = [
      {
        id: "starter",
        name: "Starter",
        monthlyPrice: 29,
        creditsIncluded: 300,
        extraLeadRate: 0.20,
        features: ["300 verified leads", "Email verification", "Area selection", "CSV/Excel export"],
        apiAccess: false,
        priority: false,
      },
      {
        id: "pro",
        name: "Pro",
        monthlyPrice: 59,
        creditsIncluded: 1200,
        extraLeadRate: 0.18,
        features: ["1,200 verified leads", "Email verification", "Area selection", "CSV/Excel export", "Basic API access"],
        apiAccess: true,
        priority: false,
      },
      {
        id: "agency",
        name: "Agency",
        monthlyPrice: 149,
        creditsIncluded: 5000,
        extraLeadRate: 0.15,
        features: ["5,000 verified leads", "Priority verification", "Advanced filters", "Full API access", "CRM integrations"],
        apiAccess: true,
        priority: true,
      },
      {
        id: "enterprise",
        name: "Enterprise",
        monthlyPrice: 0,
        creditsIncluded: -1,
        extraLeadRate: 0.10,
        features: ["Unlimited leads", "Dedicated support", "Custom integrations", "White-label option", "SLA guarantee"],
        apiAccess: true,
        priority: true,
      }
    ];

    plans.forEach(plan => this.subscriptionPlans.set(plan.id, plan));
  }

  private generateMockLeads() {
    const companies = [
      { name: "TechCorp Solutions", industry: "Technology & Software" },
      { name: "HealthFirst Clinic", industry: "Healthcare & Medical" },
      { name: "Legal Partners LLC", industry: "Legal Services" },
      { name: "EduTech Academy", industry: "Education" },
      { name: "RetailMax Inc", industry: "Retail & E-commerce" },
      { name: "FinanceFlow Bank", industry: "Finance & Banking" },
      { name: "MedDevice Corp", industry: "Healthcare & Medical" },
      { name: "CodeCraft Studios", industry: "Technology & Software" },
      { name: "Green Energy Solutions", industry: "Manufacturing" },
      { name: "Property Masters", industry: "Real Estate" },
    ];

    const contacts = [
      { name: "Sarah Johnson", title: "Marketing Director" },
      { name: "Dr. Michael Chen", title: "Practice Manager" },
      { name: "Jennifer Adams", title: "Senior Partner" },
      { name: "David Rodriguez", title: "CEO" },
      { name: "Emily Watson", title: "Operations Manager" },
      { name: "Robert Kim", title: "CTO" },
      { name: "Lisa Thompson", title: "VP Sales" },
      { name: "Mark Wilson", title: "Head of Marketing" },
      { name: "Jessica Brown", title: "Business Development" },
      { name: "Alex Martinez", title: "Founder" },
    ];

    const locations = [
      { city: "New York", state: "NY" },
      { city: "Los Angeles", state: "CA" },
      { city: "Chicago", state: "IL" },
      { city: "Houston", state: "TX" },
      { city: "Miami", state: "FL" },
      { city: "Seattle", state: "WA" },
      { city: "Boston", state: "MA" },
      { city: "San Francisco", state: "CA" },
      { city: "Atlanta", state: "GA" },
      { city: "Dallas", state: "TX" },
    ];

    const sources = ["LinkedIn", "Google Maps", "Yellow Pages", "Company Website"];
    const emailStatuses = ["verified", "pending", "invalid"];
    const companySizes = ["1-10", "11-50", "51-200", "201-500", "500+"];

    for (let i = 0; i < 1500; i++) {
      const company = companies[Math.floor(Math.random() * companies.length)];
      const contact = contacts[Math.floor(Math.random() * contacts.length)];
      const location = locations[Math.floor(Math.random() * locations.length)];
      const source = sources[Math.floor(Math.random() * sources.length)];
      const emailStatus = emailStatuses[Math.floor(Math.random() * emailStatuses.length)];
      const companySize = companySizes[Math.floor(Math.random() * companySizes.length)];

      const lead: Lead = {
        id: randomUUID(),
        company: company.name,
        contactName: contact.name,
        contactTitle: contact.title,
        email: `${contact.name.toLowerCase().replace(' ', '.')}@${company.name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')}.com`,
        emailStatus: emailStatus,
        phone: `+1 ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
        industry: company.industry,
        location: `${location.city}, ${location.state}`,
        city: location.city,
        state: location.state,
        country: "US",
        companySize: companySize,
        source: source,
        qualityScore: Math.round((Math.random() * 4 + 1) * 10) / 10,
        verified: emailStatus === "verified",
        createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
      };

      this.leads.set(lead.id, lead);
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id,
      remainingCredits: 1847, // Demo credits
      subscriptionPlan: "pro",
      subscriptionStatus: "active",
      createdAt: new Date(),
    };
    this.users.set(id, user);
    return user;
  }

  async updateUserCredits(id: string, credits: number): Promise<User | undefined> {
    const user = this.users.get(id);
    if (user) {
      user.remainingCredits = credits;
      this.users.set(id, user);
    }
    return user;
  }

  async searchLeads(params: LeadSearchParams): Promise<{ leads: Lead[], total: number }> {
    let filteredLeads = Array.from(this.leads.values());

    if (params.industry) {
      filteredLeads = filteredLeads.filter(lead => 
        lead.industry.toLowerCase().includes(params.industry!.toLowerCase())
      );
    }

    if (params.location) {
      filteredLeads = filteredLeads.filter(lead =>
        lead.location.toLowerCase().includes(params.location!.toLowerCase()) ||
        lead.city.toLowerCase().includes(params.location!.toLowerCase()) ||
        lead.state.toLowerCase().includes(params.location!.toLowerCase())
      );
    }

    if (params.companySize) {
      filteredLeads = filteredLeads.filter(lead => lead.companySize === params.companySize);
    }

    if (params.jobTitle) {
      filteredLeads = filteredLeads.filter(lead =>
        lead.contactTitle.toLowerCase().includes(params.jobTitle!.toLowerCase())
      );
    }

    if (params.sources && params.sources.length > 0) {
      filteredLeads = filteredLeads.filter(lead =>
        params.sources!.includes(lead.source)
      );
    }

    const total = filteredLeads.length;
    const paginatedLeads = filteredLeads
      .slice(params.offset, params.offset + params.limit);

    return { leads: paginatedLeads, total };
  }

  async createLead(lead: InsertLead): Promise<Lead> {
    const id = randomUUID();
    const newLead: Lead = {
      ...lead,
      id,
      createdAt: new Date(),
    };
    this.leads.set(id, newLead);
    return newLead;
  }

  async getLeadsByIds(ids: string[]): Promise<Lead[]> {
    return ids.map(id => this.leads.get(id)).filter(Boolean) as Lead[];
  }

  async createSearchHistory(history: InsertSearchHistory): Promise<SearchHistory> {
    const id = randomUUID();
    const searchHistory: SearchHistory = {
      ...history,
      id,
      createdAt: new Date(),
    };
    this.searchHistories.set(id, searchHistory);
    return searchHistory;
  }

  async getUserSearchHistory(userId: string): Promise<SearchHistory[]> {
    return Array.from(this.searchHistories.values())
      .filter(history => history.userId === userId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getSubscriptionPlans(): Promise<SubscriptionPlan[]> {
    return Array.from(this.subscriptionPlans.values());
  }

  async getSubscriptionPlan(id: string): Promise<SubscriptionPlan | undefined> {
    return this.subscriptionPlans.get(id);
  }
}

export const storage = new MemStorage();
