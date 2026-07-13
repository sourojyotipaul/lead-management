import AddLeadModal from "./components/AddLeadModal";
import Header from "./components/Header";
import LeadsTable from "./components/LeadsTable";
import MetricsPanel from "./components/MetricsPanel";
import { useMemo, useState } from "react";
import { useLeads } from "./hooks/useLeads";
import { computeMetrics } from "./utils/metrics";

function App() {
  const { leads, loading, error, addLead } = useLeads()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const metrics = useMemo(() => computeMetrics(leads), [leads])

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <MetricsPanel metrics={metrics} onAddLeadClick={() => setIsModalOpen(true)} />
      <LeadsTable leads={leads} loading={loading} error={error} />
      {isModalOpen && (
        <AddLeadModal onClose={() => setIsModalOpen(false)} onSubmit={addLead} />
      )}
    </div>
  )
}

export default App
