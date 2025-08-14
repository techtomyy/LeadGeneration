import { Card, CardContent } from "@/components/ui/card";
import { UsersIcon, MailIcon, SearchIcon, CoinsIcon, TrendingUp } from "lucide-react";

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
      title: "Lead Generated",
      value: stats?.totalLeads?.toLocaleString() || "0",
      change: "+12% vs last month",
      icon: UsersIcon,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      title: "Email Verified",
      value: stats?.verifiedEmails?.toLocaleString() || "0",
      change: "96.2% accuracy",
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
        <Card key={index} className="p-6 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
          <CardContent className="p-0">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-slate-500 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-semibold text-slate-900 mt-1" data-testid={`stat-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {stat.value}
                </p>
                <div className="mt-3 inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 whitespace-nowrap">
                  <TrendingUp className="w-3 h-3 mr-1 text-green-600 flex-shrink-0" />
                  <span className="truncate">{stat.change}</span>
                </div>
              </div>
              <div className={`w-14 h-14 ${stat.iconBg} rounded-xl flex items-center justify-center shadow-inner flex-shrink-0 ml-3`}>
                <stat.icon className={`${stat.iconColor} w-7 h-7`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
