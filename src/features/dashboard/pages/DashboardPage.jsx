import AccountManagerCard from '../components/AccountManagerCard'
import HeroBanner from '../components/HeroBanner'
import InsightCard from '../components/InsightCard'
import MetricCard from '../components/MetricCard'
import PerformanceScorecard from '../components/PerformanceScorecard'
import UsageBar from '../components/UsageBar'
import { useDashboardData } from '../hooks/useDashboardData'

export default function DashboardPage() {
  const { data, error, isLoading } = useDashboardData()

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#EAF2FB] text-[#1D2634]">
        Loading dashboard...
      </main>
    )
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#EAF2FB] text-[#1D2634]">
        Unable to load dashboard.
      </main>
    )
  }

  return (
    <div className="grid w-full grid-cols-1 gap-[6px] lg:min-h-[610px] lg:grid-cols-[minmax(488px,1fr)_260px]">
      <div className="min-w-0">
        <HeroBanner hero={data.hero} />
        <UsageBar usage={data.usage} />
        <InsightCard insight={data.insight} />
        <PerformanceScorecard scorecard={data.scorecard} />
      </div>

      <aside className="grid gap-[6px] md:grid-cols-2 lg:grid-cols-1">
        <AccountManagerCard manager={data.accountManager} />
        {data.railMetrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </aside>
    </div>
  )
}
