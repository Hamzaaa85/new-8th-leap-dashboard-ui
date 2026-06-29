import Card from '../../../components/ui/Card'
import Icon from '../../../components/ui/Icon'
import Sparkline from '../../../components/ui/Sparkline'

function TrafficChartCard({ card }) {
  return (
    <article className="grid min-h-[96px] grid-cols-[minmax(154px,0.9fr)_minmax(120px,1fr)] items-center gap-[14px] rounded-[8px] bg-[#EAF0F8] px-[13px] py-[10px] max-sm:grid-cols-1">
      <div className="flex items-center gap-[15px]">
        <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[7px] bg-[#F8FAFE] text-[#1D2634]">
          <Icon name={card.icon} className="h-[26px] w-[26px]" />
        </span>
        <div>
          <p className="text-[11px] leading-none text-[#667185]">{card.label}</p>
          <p className="mt-[8px] text-[28px] leading-none font-medium tracking-[-0.03em] text-[#222733]">
            {card.value}
          </p>
          <p className="mt-[9px] text-[10px] leading-none text-[#667185]">{card.helper}</p>
        </div>
      </div>

      <div className="relative min-w-0">
        <span className="absolute top-[-1px] right-0 z-10 flex h-[23px] w-[23px] items-center justify-center rounded-full bg-[#17191F] text-white">
          <Icon name={card.actionIcon} className="h-[11px] w-[11px]" />
        </span>
        <div className="pt-[22px]">
          <Sparkline points={card.points} />
        </div>
      </div>
    </article>
  )
}

export default function BotTrafficSection({ traffic }) {
  return (
    <Card className="mt-[11px] px-[13px] pt-[15px] pb-[15px]">
      <h2 className="text-[12px] leading-none font-medium text-[#1D2634]">{traffic.title}</h2>
      <div className="mt-[14px] grid gap-[14px] lg:grid-cols-2">
        {traffic.cards.map((card) => (
          <TrafficChartCard key={card.id} card={card} />
        ))}
      </div>
    </Card>
  )
}
