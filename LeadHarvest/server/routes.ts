import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { leadSearchSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get user stats
  app.get("/api/user/stats", async (req, res) => {
    try {
      // Mock user for demo
      const stats = {
        totalLeads: 12847,
        verifiedEmails: 8492,
        activeSearches: 23,
        creditsUsed: 1653,
        remainingCredits: 1847
      };
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user stats" });
    }
  });

  // Search leads
  app.post("/api/leads/search", async (req, res) => {
    try {
      const searchParams = leadSearchSchema.parse(req.body);
      const result = await storage.searchLeads(searchParams);
      
      // Simulate credit usage
      const creditsUsed = Math.ceil(result.leads.length * 0.1);
      
      res.json({
        leads: result.leads,
        total: result.total,
        creditsUsed,
        estimatedCost: `${creditsUsed}-${creditsUsed + 15} credits`
      });
    } catch (error) {
      res.status(400).json({ message: "Invalid search parameters" });
    }
  });

  // Export leads
  app.post("/api/leads/export", async (req, res) => {
    try {
      const { leadIds, format } = req.body;
      if (!leadIds || !Array.isArray(leadIds)) {
        return res.status(400).json({ message: "Lead IDs required" });
      }

      const leads = await storage.getLeadsByIds(leadIds);
      
      if (format === 'csv') {
        const csvHeader = 'Company,Contact Name,Title,Email,Email Status,Phone,Industry,Location,Source,Quality Score\n';
        const csvRows = leads.map(lead => 
          `"${lead.company}","${lead.contactName}","${lead.contactTitle}","${lead.email}","${lead.emailStatus}","${lead.phone || ''}","${lead.industry}","${lead.location}","${lead.source}",${lead.qualityScore}`
        ).join('\n');
        
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename="leads.csv"');
        res.send(csvHeader + csvRows);
      } else {
        res.json({ leads, message: "Excel export would be implemented with a proper Excel library" });
      }
    } catch (error) {
      res.status(500).json({ message: "Export failed" });
    }
  });

  // Get subscription plans
  app.get("/api/subscription/plans", async (req, res) => {
    try {
      const plans = await storage.getSubscriptionPlans();
      res.json(plans);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch subscription plans" });
    }
  });

  // Verify email (mock implementation)
  app.post("/api/leads/verify-email", async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ message: "Email required" });
      }

      // Mock email verification
      const isValid = !email.includes('invalid') && email.includes('@');
      const deliverable = Math.random() > 0.2; // 80% deliverable rate
      
      res.json({
        email,
        valid: isValid,
        deliverable,
        confidence: isValid && deliverable ? 'high' : 'low',
        reason: !isValid ? 'Invalid format' : !deliverable ? 'Mailbox not found' : 'Valid'
      });
    } catch (error) {
      res.status(500).json({ message: "Email verification failed" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
