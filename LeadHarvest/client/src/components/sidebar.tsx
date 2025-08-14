import { Link, useLocation } from "wouter";
import { 
  ChartPieIcon, 
  UsersIcon, 
  HistoryIcon, 
  PlugIcon, 
  CreditCardIcon,
  Sprout,
  HomeIcon
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Dashboard", href: "/dashboard", icon: ChartPieIcon },
  { name: "Lead Finder", href: "/leads", icon: UsersIcon },
  { name: "Search History", href: "/history", icon: HistoryIcon },
  { name: "Integrations", href: "/integrations", icon: PlugIcon },
  { name: "Billing & Plans", href: "/billing", icon: CreditCardIcon },
];

export default function Sidebar() {
  const [location] = useLocation();

  return (
    <aside className="w-64 bg-white shadow-sm border-r border-slate-200 hidden lg:block">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Sprout className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-xl font-bold text-slate-800">LeadHarvest AI</h1>
        </div>
      </div>
      
      <nav className="px-4 pb-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = location === item.href || 
              (item.href !== "/" && location.startsWith(item.href)) ||
              (item.href === "/" && location === "/");
            
            return (
              <li key={item.name}>
                <Link href={item.href}>
                  <a className={`flex items-center px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive
                      ? "text-primary bg-blue-50"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                  data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
