export const BUDGET_RANGES = {
  UNDER_10K: 'Under $10k',
  RANGE_10K_50K: '$10k-$50k',
  GREATER_50K: 'Greater than $50k',
}

// Midpoint dollar estimate used to represent each range when summing pipeline value.
// "Greater than $50k" has no upper bound, so its floor ($50,000) is used instead.
const BUDGET_MIDPOINT_VALUE = {
  [BUDGET_RANGES.UNDER_10K]: 5000,
  [BUDGET_RANGES.RANGE_10K_50K]: 30000,
  [BUDGET_RANGES.GREATER_50K]: 50000,
}

export function computeMetrics(leads) {
  return leads.reduce(
    (acc, lead) => {
      acc.total += 1
      if (lead.estimated_annual_budget === BUDGET_RANGES.UNDER_10K) {
        acc.under10k += 1
      } else if (lead.estimated_annual_budget === BUDGET_RANGES.RANGE_10K_50K) {
        acc.range10k50k += 1
      } else if (lead.estimated_annual_budget === BUDGET_RANGES.GREATER_50K) {
        acc.greater50k += 1
      }
      acc.totalPipelineValue += BUDGET_MIDPOINT_VALUE[lead.estimated_annual_budget] ?? 0
      return acc
    },
    { total: 0, under10k: 0, range10k50k: 0, greater50k: 0, totalPipelineValue: 0 },
  )
}
