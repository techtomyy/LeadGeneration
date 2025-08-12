import { Card, CardContent } from "@/components/ui/card";
import { UsersIcon, MailIcon, SearchIcon, CoinsIcon } from "lucide-react";

interface StatsCardsProps {
  stats?: {
    totalLeads: number;
    verifiedEmails: number;
    activeSearches: number;
    creditsUsed: number;
  };
}

export default function StatsCards({ stats }: StatsCardsProps) {
  const statsData = [
    {
      title: "Total Leads Generated",
      value: stats?.totalLeads?.toLocaleString() || "0",
      change: "+12% vs last month",
      icon: UsersIcon,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      title: "Email Verified",
      value: stats?.verifiedEmails?.toLocaleString() || "0",
      change: "96.2% accuracy rate",
      icon: MailIcon,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Active Searches",
      value: stats?.activeSearches?.toString() || "0",
      change: "5 in progress",
      icon: SearchIcon,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: "Credits Used",
      value: stats?.creditsUsed?.toLocaleString() || "0",
      change: "this month",
      icon: CoinsIcon,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statsData.map((stat, index) => (
        <Card key={index} className="p-6">
          <CardContent className="p-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-slate-800 mt-1" data-testid={`stat-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {stat.value}
                </p>
              </div>
              <div className={`w-12 h-12 ${stat.iconBg} rounded-lg flex items-center justify-center`}>
                <stat.icon className={`${stat.iconColor} w-6 h-6`} />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-green-600 text-sm font-medium">{stat.change}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
