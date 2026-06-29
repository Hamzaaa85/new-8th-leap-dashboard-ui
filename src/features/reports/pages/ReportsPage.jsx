import { useOutletContext } from 'react-router-dom'
import Card from '../../../components/ui/Card'
import UserChip from '../../../components/ui/UserChip'
import ReportsHeader from '../components/ReportsHeader'
import ReportMetricRow from '../components/ReportMetricRow'
import ReportDetailPanel from '../components/ReportDetailPanel'
import { useReportsData } from '../hooks/useReportsData'

export default function ReportsPage() {
  const { user } = useOutletContext()
  const { data, error, isLoading } = useReportsData()

  if (isLoading) {
    return (
      <section className="flex min-h-[610px] items-center justify-center rounded-[14px] bg-[#F8FAFE] text-[#1D2634]">
        Loading reports...
      </section>
    )
  }

  if (error) {
    return (
      <section className="flex min-h-[610px] items-center justify-center rounded-[14px] bg-[#F8FAFE] text-[#1D2634]">
        Unable to load reports.
      </section>
    )
  }

  return (
    <div className="min-h-[610px]">
      <div className="mb-[8px] flex justify-end">
        <UserChip user={user} />
      </div>

      <Card className="px-[20px] pb-[24px] pt-[20px]">
        <ReportsHeader period={data.period} />

        <div className="flex gap-[20px]">
          {/* Metric rows */}
          <div className="min-w-0 flex-1 divide-y divide-[#F1F5F9] border-t border-[#F1F5F9]">
            {data.metrics.map((metric) => (
              <ReportMetricRow key={metric.id} metric={metric} />
            ))}
          </div>

          {/* Report detail panel (preview + info + actions) */}
          <ReportDetailPanel report={data.selectedReport} />
        </div>
      </Card>
    </div>
  )
}
