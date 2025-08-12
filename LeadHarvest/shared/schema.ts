import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  remainingCredits: integer("remaining_credits").notNull().default(0),
  subscriptionPlan: text("subscription_plan").notNull().default("starter"),
  subscriptionStatus: text("subscription_status").notNull().default("active"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const leads = pgTable("leads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  company: text("company").notNull(),
  contactName: text("contact_name").notNull(),
  contactTitle: text("contact_title").notNull(),
  email: text("email").notNull(),
  emailStatus: text("email_status").notNull(), // verified, pending, invalid
  phone: text("phone"),
  industry: text("industry").notNull(),
  location: text("location").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  country: text("country").notNull().default("US"),
  companySize: text("company_size"), // 1-10, 11-50, etc.
  source: text("source").notNull(), // LinkedIn, Google Maps, Yellow Pages, Website
  qualityScore: real("quality_score").notNull(),
  verified: boolean("verified").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const searchHistories = pgTable("search_histories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  industry: text("industry"),
  location: text("location"),
  companySize: text("company_size"),
  jobTitle: text("job_title"),
  sources: text("sources").array(),
  resultsCount: integer("results_count").notNull().default(0),
  creditsUsed: integer("credits_used").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const subscriptionPlans = pgTable("subscription_plans", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  monthlyPrice: integer("monthly_price").notNull(),
  creditsIncluded: integer("credits_included").notNull(),
  extraLeadRate: real("extra_lead_rate").notNull(),
  features: text("features").array().notNull(),
  apiAccess: boolean("api_access").notNull().default(false),
  priority: boolean("priority").notNull().default(false),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertLeadSchema = createInsertSchema(leads).omit({
  id: true,
  createdAt: true,
});

export const insertSearchHistorySchema = createInsertSchema(searchHistories).omit({
  id: true,
  createdAt: true,
});

export const leadSearchSchema = z.object({
  industry: z.string().optional(),
  location: z.string().optional(),
  companySize: z.string().optional(),
  jobTitle: z.string().optional(),
  sources: z.array(z.string()).optional(),
  limit: z.number().min(1).max(1000).default(25),
  offset: z.number().min(0).default(0),
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;
export type InsertSearchHistory = z.infer<typeof insertSearchHistorySchema>;
export type SearchHistory = typeof searchHistories.$inferSelect;
export type SubscriptionPlan = typeof subscriptionPlans.$inferSelect;
export type LeadSearchParams = z.infer<typeof leadSearchSchema>;
