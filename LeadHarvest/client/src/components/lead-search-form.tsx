import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { SearchIcon, RotateCcwIcon } from "lucide-react";

interface LeadSearchFormProps {
  onSearch: (params: any) => void;
  isSearching: boolean;
}

export default function LeadSearchForm({ onSearch, isSearching }: LeadSearchFormProps) {
  const [formData, setFormData] = useState({
    industry: "all",
    location: "all",
    companySize: "all",
    jobTitle: "",
    sources: ["LinkedIn", "Google Maps", "Yellow Pages"] as string[],
  });

  const industries = [
    "Healthcare & Medical",
    "Technology & Software", 
    "Finance & Banking",
    "Real Estate",
    "Legal Services",
    "Education",
    "Retail & E-commerce",
    "Manufacturing",
  ];

  const locations = [
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL", 
    "Houston, TX",
    "Miami, FL",
    "Seattle, WA",
    "Boston, MA",
  ];

  const companySizes = [
    "1-10",
    "11-50", 
    "51-200",
    "201-500",
    "500+",
  ];

  const dataSources = [
    { id: "LinkedIn", label: "LinkedIn" },
    { id: "Google Maps", label: "Google Maps" },
    { id: "Yellow Pages", label: "Yellow Pages" },
    { id: "Company Website", label: "Company Websites" },
  ];

  const handleSourceChange = (source: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      sources: checked
        ? [...prev.sources, source]
        : prev.sources.filter(s => s !== source)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchParams = {
      industry: formData.industry === "all" ? "" : formData.industry,
      location: formData.location === "all" ? "" : formData.location,
      companySize: formData.companySize === "all" ? "" : formData.companySize,
      jobTitle: formData.jobTitle,
      sources: formData.sources,
      limit: 25,
      offset: 0,
    };
    onSearch(searchParams);
  };

  const handleReset = () => {
    setFormData({
      industry: "all",
      location: "all",
      companySize: "all",
      jobTitle: "",
      sources: ["LinkedIn", "Google Maps", "Yellow Pages"],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-3">
        <div>
          <Label htmlFor="industry" className="text-xs font-medium text-slate-700">Industry</Label>
          <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
            <SelectTrigger className="h-9 text-sm" data-testid="select-industry">
              <SelectValue placeholder="Select Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="location" className="text-xs font-medium text-slate-700">Location</Label>
          <Select value={formData.location} onValueChange={(value) => setFormData(prev => ({ ...prev, location: value }))}>
            <SelectTrigger className="h-9 text-sm" data-testid="select-location">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="companySize" className="text-xs font-medium text-slate-700">Company Size</Label>
          <Select value={formData.companySize} onValueChange={(value) => setFormData(prev => ({ ...prev, companySize: value }))}>
            <SelectTrigger className="h-9 text-sm" data-testid="select-company-size">
              <SelectValue placeholder="Any Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Size</SelectItem>
              {companySizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size} employees
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="jobTitle" className="text-xs font-medium text-slate-700">Job Title/Role</Label>
          <Input
            id="jobTitle"
            placeholder="e.g. Marketing Director, CEO"
            value={formData.jobTitle}
            onChange={(e) => setFormData(prev => ({ ...prev, jobTitle: e.target.value }))}
            className="h-9 text-sm"
            data-testid="input-job-title"
          />
        </div>
      </div>

      <div>
        <Label className="text-xs font-medium text-slate-700 mb-2 block">Data Sources</Label>
        <div className="grid grid-cols-2 gap-2">
          {dataSources.map((source) => (
            <div key={source.id} className="flex items-center space-x-2">
              <Checkbox
                id={source.id}
                checked={formData.sources.includes(source.id)}
                onCheckedChange={(checked) => handleSourceChange(source.id, checked as boolean)}
                data-testid={`checkbox-${source.id.toLowerCase().replace(/\s+/g, '-')}`}
              />
              <Label htmlFor={source.id} className="text-xs text-slate-600">
                {source.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <Button 
          type="submit" 
          disabled={isSearching}
          className="w-full bg-blue-600 text-white hover:bg-blue-700 h-9 text-sm"
          data-testid="button-start-search"
        >
          <SearchIcon className="w-4 h-4 mr-2" />
          {isSearching ? "Searching..." : "Start Lead Search"}
        </Button>
        <Button 
          type="button" 
          variant="outline" 
          onClick={handleReset}
          className="w-full mt-2 h-9 text-sm"
          data-testid="button-reset-filters"
        >
          <RotateCcwIcon className="w-4 h-4 mr-2" />
          Reset Filters
        </Button>
      </div>
      
      <div className="text-xs text-slate-500 bg-slate-100 px-3 py-2 rounded-lg text-center">
        Estimated cost: <span className="font-semibold text-slate-700">45-60 credits</span>
      </div>
    </form>
  );
}
