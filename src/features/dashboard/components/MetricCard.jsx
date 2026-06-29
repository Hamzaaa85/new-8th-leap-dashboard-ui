import Icon from '../../../components/ui/Icon'

export default function MetricCard({ metric }) {
  return (
    <article className={`min-h-[108px] rounded-[14px] px-[9px] pt-[15px] pb-[12px] ${metric.className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          <span className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-white/58 text-[#455061]">
            <Icon name={metric.icon} className="h-[13px] w-[13px]" />
          </span>
          <p className="text-[12px] leading-none font-medium text-[#667185]">{metric.label}</p>
        </div>
        {metric.info ? (
          <span className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-white/58 text-[#7E8898]">
            <Icon name="info" className="h-[11px] w-[11px]" />
          </span>
        ) : null}
      </div>
      <p className="mt-[18px] text-[41px] leading-none font-medium tracking-[-0.04em] text-[#222733]">
        {metric.value}
        {metric.suffix ? (
          <span className="ml-[5px] text-[12px] tracking-[-0.01em] text-[#455061]">
            {metric.suffix}
          </span>
        ) : null}
      </p>
      {metric.helper ? (
        <p className="mt-[13px] text-[11px] leading-none text-[#667185]">{metric.helper}</p>
      ) : null}
    </article>
  )
}
