import { useState } from "react";
import LeadSearchForm from "@/components/lead-search-form";
import LeadsTable from "@/components/leads-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LeadFinder() {
  const [searchResults, setSearchResults] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchHistory, setSearchHistory] = useState<any[]>([]);

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
      
      // Add to search history
      setSearchHistory(prev => [{
        ...searchParams,
        results: data.total,
        timestamp: new Date(),
        creditsUsed: data.creditsUsed
      }, ...prev.slice(0, 9)]);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-800">Lead Finder</h2>
        <p className="text-slate-600 mt-1">Search and generate high-quality B2B leads from multiple sources</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Lead Search & Generation
                <div className="flex items-center space-x-2 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Live Scraping Active</span>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <LeadSearchForm onSearch={handleSearch} isSearching={isSearching} />
            </CardContent>
          </Card>

          {searchResults && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>
                  Search Results
                  <p className="text-sm font-normal text-slate-500 mt-1">
                    Found <span className="font-medium text-slate-700">{searchResults.total}</span> leads matching your criteria
                  </p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <LeadsTable leads={searchResults.leads} total={searchResults.total} />
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Searches</CardTitle>
            </CardHeader>
            <CardContent>
              {searchHistory.length === 0 ? (
                <p className="text-sm text-slate-500 text-center py-4">No searches yet</p>
              ) : (
                <div className="space-y-3">
                  {searchHistory.map((search, index) => (
                    <div key={index} className="p-3 border rounded-lg hover:bg-slate-50">
                      <div className="text-sm font-medium text-slate-800">
                        {search.industry || "All Industries"}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        {search.location || "All Locations"} • {search.results} results
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {search.creditsUsed} credits • {new Date(search.timestamp).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
