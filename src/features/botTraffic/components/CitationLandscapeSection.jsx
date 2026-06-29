import Card from '../../../components/ui/Card'
import CitationMetricCard from './CitationMetricCard'

export default function CitationLandscapeSection({ landscape }) {
  return (
    <Card className="px-[14px] pt-[20px] pb-[22px]">
      <div>
        <h1 className="text-[14px] leading-none font-medium tracking-[-0.01em] text-[#1D2634]">
          {landscape.title}
        </h1>
        <p className="mt-[12px] text-[10px] leading-none text-[#667185]">{landscape.description}</p>
      </div>

      <div className="mt-[16px] grid gap-[8px] md:grid-cols-3">
        {landscape.totals.map((metric) => (
          <CitationMetricCard key={metric.id} metric={metric} />
        ))}
      </div>

      <h2 className="mt-[21px] text-[14px] leading-none font-medium tracking-[-0.01em] text-[#1D2634]">
        {landscape.breakdownTitle}
      </h2>
      <div className="mt-[12px] grid gap-[8px] sm:grid-cols-2 xl:grid-cols-4">
        {landscape.breakdown.map((metric) => (
          <CitationMetricCard key={metric.id} metric={{ ...metric, tone: 'slate' }} compact />
        ))}
      </div>
    </Card>
  )
}
