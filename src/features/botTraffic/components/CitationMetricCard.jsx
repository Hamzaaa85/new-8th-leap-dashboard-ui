import Icon from '../../../components/ui/Icon'

const toneClasses = {
  cream: 'bg-[#FFECCB]',
  pink: 'bg-[#F8CBD5]',
  purple: 'bg-[#E9CEF4]',
  slate: 'bg-[#EAF0F8]',
}

export default function CitationMetricCard({ metric, compact = false }) {
  return (
    <article
      className={`flex items-start gap-[16px] rounded-[9px] px-[14px] py-[20px] ${
        toneClasses[metric.tone] ?? toneClasses.slate
      }`}
    >
      <span className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[5px] bg-white/52 text-[#667185]">
        <Icon name={metric.icon} className="h-[13px] w-[13px]" />
      </span>

      <div className="min-w-0 flex-1">
        <p className={`${compact ? 'text-[32px]' : 'text-[40px]'} leading-none font-medium tracking-[-0.03em] text-[#222733]`}>
          {metric.value}
        </p>
        <p className="mt-[12px] text-[13px] leading-none text-[#667185]">{metric.label}</p>
      </div>

      <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#17191F] text-white">
        <Icon name="info" className="h-[10px] w-[10px]" strokeWidth={1.7} />
      </span>
    </article>
  )
}
