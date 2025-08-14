import { useQuery } from "@tanstack/react-query";
import StatsCards from "@/components/stats-cards";
import LeadSearchForm from "@/components/lead-search-form";
import LeadsTable from "@/components/leads-table";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { SearchIcon, TrendingUpIcon, ZapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [searchResults, setSearchResults] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  type UserStats = {
    totalLeads: number;
    verifiedEmails: number;
    activeSearches: number;
    creditsUsed: number;
    remainingCredits: number;
  };

  const { data: userStats, isLoading: isStatsLoading } = useQuery<UserStats>({
    queryKey: ["/api/user/stats"],
  });

  const handleSearch = async (searchParams: any) => {
    setIsSearching(true);
    try {
      const response = await fetch("/api/leads/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(searchParams),
      });
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="p-12 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-['Outfit']"> Dashboard</h2>
          <p className="text-600 mt-2">Generate and manage your B2B leads with real-time data scraping</p>
        </div>

        {isStatsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="p-6">
                <CardContent className="p-0 space-y-4">
                  <div>
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-6 w-24 mt-3" />
                  </div>
                  <div className="flex justify-end">
                    <Skeleton className="h-12 w-12 rounded-lg" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <StatsCards stats={userStats} />
        )}

        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-800">Lead Search & Generation</h3>
              <p className="text-sm text-slate-500 mt-1">Use advanced filters to find targeted prospects</p>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className="bg-green-50 text-green-700 border border-green-200">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2 animate-pulse" />
                Live Scraping Active
              </Badge>
              <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                <span className="font-medium">Credits:</span> {userStats?.remainingCredits?.toLocaleString() || '0'} remaining
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <SearchIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Search Filters</h4>
                    <p className="text-xs text-slate-600">Configure your lead criteria</p>
                  </div>
                </div>
                <LeadSearchForm onSearch={handleSearch} isSearching={isSearching} />
              </CardContent>
            </Card>
            
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                      <TrendingUpIcon className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Search Insights</h4>
                      <p className="text-xs text-slate-600">Optimize your search strategy</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-slate-200">
                      <div className="text-slate-500 text-xs mb-1">Most Successful</div>
                      <div className="font-medium text-slate-800">Technology + 50-200 employees</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-slate-200">
                      <div className="text-slate-500 text-xs mb-1">Best Response Rate</div>
                      <div className="font-medium text-slate-800">Marketing Directors (23%)</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-slate-200">
                      <div className="text-slate-500 text-xs mb-1">Top Location</div>
                      <div className="font-medium text-slate-800">New York, NY</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-slate-200">
                      <div className="text-slate-500 text-xs mb-1">Quality Score</div>
                      <div className="font-medium text-slate-800">4.2/5.0 average</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-green-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <ZapIcon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Quick Actions</h4>
                      <p className="text-xs text-slate-600">Common search patterns</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="text-xs h-8 px-3">
                      SaaS Companies
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs h-8 px-3">
                      Healthcare Leads
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs h-8 px-3">
                      Real Estate Agents
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs h-8 px-3">
                      Marketing Directors
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {searchResults && (
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-0">
              <div>
                <CardTitle className="text-lg font-semibold text-slate-800">Search Results</CardTitle>
                <p className="text-sm text-slate-500 mt-1">
                  Found <span className="font-medium text-slate-700">{searchResults.total}</span> leads matching your criteria
                </p>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <LeadsTable leads={searchResults.leads} total={searchResults.total} />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
