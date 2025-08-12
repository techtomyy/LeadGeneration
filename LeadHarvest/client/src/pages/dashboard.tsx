import { useQuery } from "@tanstack/react-query";
import StatsCards from "@/components/stats-cards";
import LeadSearchForm from "@/components/lead-search-form";
import LeadsTable from "@/components/leads-table";
import { useState } from "react";

export default function Dashboard() {
  const [searchResults, setSearchResults] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const { data: userStats } = useQuery({
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
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-800">Lead Generation Dashboard</h2>
        <p className="text-slate-600 mt-1">Generate and manage your B2B leads with real-time data scraping</p>
      </div>

      <StatsCards stats={userStats} />

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-800">Lead Search & Generation</h3>
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>Live Scraping Active</span>
            </div>
          </div>
        </div>

        <LeadSearchForm onSearch={handleSearch} isSearching={isSearching} />
      </div>

      {searchResults && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">Search Results</h3>
              <p className="text-sm text-slate-500 mt-1">
                Found <span className="font-medium text-slate-700">{searchResults.total}</span> leads matching your criteria
              </p>
            </div>
          </div>

          <LeadsTable leads={searchResults.leads} total={searchResults.total} />
        </div>
      )}
    </div>
  );
}
