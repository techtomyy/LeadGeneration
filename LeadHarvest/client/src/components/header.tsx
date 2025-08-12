import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { MenuIcon, CoinsIcon } from "lucide-react";

export default function Header() {
  const { data: userStats } = useQuery({
    queryKey: ["/api/user/stats"],
  });

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="lg:hidden p-2 text-slate-500">
            <MenuIcon className="w-5 h-5" />
          </Button>
          <h2 className="text-2xl font-semibold text-slate-800">Lead Generation Dashboard</h2>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg flex items-center space-x-2">
            <CoinsIcon className="w-4 h-4" />
            <span className="font-semibold" data-testid="text-credits">
              {userStats?.remainingCredits?.toLocaleString() || '0'} Credits
            </span>
          </div>
          
          <div className="relative">
            <Button variant="ghost" className="flex items-center space-x-2 p-2 rounded-lg">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
              <span className="text-slate-700 font-medium" data-testid="text-username">John Doe</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
