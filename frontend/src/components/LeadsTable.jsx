export default function LeadsTable({ leads, loading, error }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-10">
      <h2 className="mb-4 text-lg font-semibold text-slate-800">All Leads</h2>
      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-slate-500">Lead ID</th>
              <th className="px-4 py-3 text-left font-medium text-slate-500">First Name</th>
              <th className="px-4 py-3 text-left font-medium text-slate-500">Last Name</th>
              <th className="px-4 py-3 text-left font-medium text-slate-500">Corporate Email</th>
              <th className="px-4 py-3 text-left font-medium text-slate-500">Company Name</th>
              <th className="px-4 py-3 text-left font-medium text-slate-500">Estimated Annual Budget</th>
              <th className="px-4 py-3 text-left font-medium text-slate-500">Created At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading && (
              <tr>
                <td colSpan={7} className="px-4 py-6 text-center text-slate-500">
                  Loading leads...
                </td>
              </tr>
            )}
            {!loading && error && (
              <tr>
                <td colSpan={7} className="px-4 py-6 text-center text-red-600">
                  {error}
                </td>
              </tr>
            )}
            {!loading && !error && leads.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-6 text-center text-slate-500">
                  No leads yet. Click "Add Lead" to create one.
                </td>
              </tr>
            )}
            {!loading &&
              !error &&
              leads.map((lead) => (
                <tr key={lead.lead_id}>
                  <td className="px-4 py-3 text-slate-700">{lead.lead_id}</td>
                  <td className="px-4 py-3 text-slate-700">{lead.first_name}</td>
                  <td className="px-4 py-3 text-slate-700">{lead.last_name}</td>
                  <td className="px-4 py-3 text-slate-700">{lead.corporate_email}</td>
                  <td className="px-4 py-3 text-slate-700">{lead.company_name}</td>
                  <td className="px-4 py-3 text-slate-700">{lead.estimated_annual_budget}</td>
                  <td className="px-4 py-3 text-slate-700">
                    {new Date(lead.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
