interface ExportLead {
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

export function exportToCsv(leads: ExportLead[], filename: string) {
  const headers = [
    'Company',
    'Contact Name',
    'Title',
    'Email',
    'Email Status',
    'Phone',
    'Industry',
    'Location',
    'Source',
    'Quality Score'
  ];

  const csvContent = [
    headers.join(','),
    ...leads.map(lead => [
      `"${lead.company}"`,
      `"${lead.contactName}"`,
      `"${lead.contactTitle}"`,
      `"${lead.email}"`,
      `"${lead.emailStatus}"`,
      `"${lead.phone || ''}"`,
      `"${lead.industry}"`,
      `"${lead.location}"`,
      `"${lead.source}"`,
      lead.qualityScore.toString()
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

export async function exportToExcel(leads: ExportLead[], filename: string) {
  try {
    const response = await fetch('/api/leads/export', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        leadIds: leads.map((_, index) => index.toString()),
        format: 'excel'
      })
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }
  } catch (error) {
    console.error('Excel export failed:', error);
    throw error;
  }
}
