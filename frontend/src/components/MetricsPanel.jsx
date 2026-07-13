import MetricCard from "./MetricCard";

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export default function MetricsPanel({ metrics, onAddLeadClick }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800">Dashboard</h2>
        <button
          type="button"
          onClick={onAddLeadClick}
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Add Lead
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <MetricCard label="Number of Leads" value={metrics.total} />
        <MetricCard label="Estimated Annual Budget: Under $10k" value={metrics.under10k} />
        <MetricCard label="Estimated Annual Budget: $10k-$50k" value={metrics.range10k50k} />
        <MetricCard label="Estimated Annual Budget: Greater than $50k" value={metrics.greater50k} />
        <MetricCard
          label="Total Estimated Pipeline Value"
          value={currencyFormatter.format(metrics.totalPipelineValue)}
        />
      </div>
    </section>
  )
}
