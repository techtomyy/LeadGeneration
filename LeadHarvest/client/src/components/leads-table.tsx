import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  DownloadIcon, 
  FileSpreadsheetIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "lucide-react";
import { exportToCsv } from "@/lib/export-utils";

interface Lead {
  id: string;
  company: string;
  contactName: string;
  contactTitle: string;
  email: string;
  emailStatus: string;
  phone?: string;
  industry: string;
  location: string;
  source: string;
  qualityScore: number;
}

interface LeadsTableProps {
  leads: Lead[];
  total: number;
}

export default function LeadsTable({ leads, total }: LeadsTableProps) {
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 25;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedLeads(leads.map(lead => lead.id));
    } else {
      setSelectedLeads([]);
    }
  };

  const handleSelectLead = (leadId: string, checked: boolean) => {
    if (checked) {
      setSelectedLeads(prev => [...prev, leadId]);
    } else {
      setSelectedLeads(prev => prev.filter(id => id !== leadId));
    }
  };

  const handleExportCsv = () => {
    const selectedData = leads.filter(lead => selectedLeads.includes(lead.id));
    exportToCsv(selectedData.length > 0 ? selectedData : leads, 'leads-export.csv');
  };

  const handleExportExcel = async () => {
    const selectedData = leads.filter(lead => selectedLeads.includes(lead.id));
    const exportData = selectedData.length > 0 ? selectedData : leads;
    
    try {
      const response = await fetch('/api/leads/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadIds: exportData.map(lead => lead.id),
          format: 'excel'
        })
      });
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'leads-export.xlsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Export failed:', error);
    }
  };

  const getEmailStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'invalid':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'LinkedIn':
        return 'bg-blue-100 text-blue-700';
      case 'Google Maps':
        return 'bg-green-100 text-green-700';
      case 'Yellow Pages':
        return 'bg-yellow-100 text-yellow-700';
      case 'Company Website':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const renderStars = (score: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`w-3 h-3 ${
            i <= Math.floor(score) 
              ? 'text-yellow-500 fill-current' 
              : 'text-slate-300'
          }`}
        />
      );
    }
    return stars;
  };

  const totalPages = Math.ceil(total / leadsPerPage);

  return (
    <div className="space-y-4">
      {/* Compact summary bar */}
      <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-2">
        <div className="text-xs text-slate-600">
          {selectedLeads.length > 0 ? (
            <span>
              {selectedLeads.length} selected • Export or refine filters
            </span>
          ) : (
            <span>Tip: Select rows to export only the leads you need</span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Button
            onClick={handleExportCsv}
            className="bg-green-600 text-white hover:bg-green-700 h-8 px-3"
            data-testid="button-export-csv"
          >
            <DownloadIcon className="w-3.5 h-3.5" />
            <span className="text-xs">CSV</span>
          </Button>
          <Button
            onClick={handleExportExcel}
            variant="outline"
            className="h-8 px-3"
            data-testid="button-export-excel"
          >
            <FileSpreadsheetIcon className="w-3.5 h-3.5" />
            <span className="text-xs">Excel</span>
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200">
              <th className="text-left py-2.5 px-4 font-medium text-slate-600">
                <Checkbox
                  checked={selectedLeads.length === leads.length && leads.length > 0}
                  onCheckedChange={handleSelectAll}
                  data-testid="checkbox-select-all"
                />
              </th>
              <th className="text-left py-2.5 px-4 font-medium text-slate-600">Company</th>
              <th className="text-left py-2.5 px-4 font-medium text-slate-600">Contact</th>
              <th className="text-left py-2.5 px-4 font-medium text-slate-600">Email Status</th>
              <th className="text-left py-2.5 px-4 font-medium text-slate-600">Location</th>
              <th className="text-left py-2.5 px-4 font-medium text-slate-600">Source</th>
              <th className="text-left py-2.5 px-4 font-medium text-slate-600">Quality</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, idx) => (
              <tr key={lead.id} className={`border-b border-slate-100 ${idx % 2 === 1 ? 'bg-slate-50/40' : ''} hover:bg-slate-50`}>
                <td className="py-3 px-4">
                  <Checkbox
                    checked={selectedLeads.includes(lead.id)}
                    onCheckedChange={(checked) => handleSelectLead(lead.id, checked as boolean)}
                    data-testid={`checkbox-lead-${lead.id}`}
                  />
                </td>
                <td className="py-3 px-4">
                  <div>
                    <div className="font-medium text-slate-800" data-testid={`text-company-${lead.id}`}>
                      {lead.company}
                    </div>
                    <div className="text-xs text-slate-500">{lead.industry}</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div>
                    <div className="font-medium text-slate-800" data-testid={`text-contact-${lead.id}`}>
                      {lead.contactName}
                    </div>
                    <div className="text-xs text-slate-500">{lead.contactTitle}</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="space-y-1">
                    <Badge className={getEmailStatusColor(lead.emailStatus)}>
                      {lead.emailStatus}
                    </Badge>
                    <div className="text-[11px] text-slate-500" data-testid={`text-email-${lead.id}`}>
                      {lead.email}
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="text-xs text-slate-600" data-testid={`text-location-${lead.id}`}>
                    {lead.location}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <Badge className={getSourceColor(lead.source)}>
                    {lead.source}
                  </Badge>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {renderStars(lead.qualityScore)}
                    </div>
                    <span className="text-[11px] text-slate-500">{lead.qualityScore.toFixed(1)}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between rounded-xl bg-white border border-slate-200 px-3 py-2">
        <div className="text-xs text-slate-600">
          Showing <span className="font-medium">1-{Math.min(leadsPerPage, leads.length)}</span> of {" "}
          <span className="font-medium">{total}</span>
        </div>
        
        <div className="flex items-center space-x-1.5">
          <Button
            variant="outline"
            size="sm"
            className="h-8 px-2"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            data-testid="button-prev-page"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </Button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const pageNum = i + 1;
            return (
              <Button
                key={pageNum}
                variant={currentPage === pageNum ? "default" : "outline"}
                size="sm"
                className="h-8 px-3"
                onClick={() => setCurrentPage(pageNum)}
                data-testid={`button-page-${pageNum}`}
              >
                {pageNum}
              </Button>
            );
          })}
          
          {totalPages > 5 && (
            <>
              <span className="px-2 text-slate-500">...</span>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3"
                onClick={() => setCurrentPage(totalPages)}
              >
                {totalPages}
              </Button>
            </>
          )}
          
          <Button
            variant="outline"
            size="sm"
            className="h-8 px-2"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            data-testid="button-next-page"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
