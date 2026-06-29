import Icon from '../../../components/ui/Icon'

function HeroPreview() {
  return (
    <div className="relative h-[136px] w-[clamp(220px,26vw,304px)] shrink-0 max-[640px]:hidden">
      <div className="absolute top-[9px] right-[6px] h-[96px] w-[83%] rounded-[9px] border border-white/80 bg-[#F9FAFF] p-[8px] shadow-[0_12px_24px_rgba(0,0,0,0.16)]">
        <div className="mb-[5px] flex items-center justify-between">
          <span className="text-[4px] font-semibold text-[#1D2634]">Performance Scorecard</span>
          <span className="rounded-full bg-[#E9F1FF] px-[4px] py-[2px] text-[3px] text-[#7E8898]">
            Live
          </span>
        </div>
        <div className="grid grid-cols-[1fr_44px] gap-[8px]">
          <div className="space-y-[5px]">
            {['#FF6E8A', '#7D8DFF', '#37CBB0', '#FEC84B'].map((color, index) => (
              <div key={color} className="flex items-center gap-[4px]">
                <span className="h-[4px] w-[4px] rounded-full" style={{ background: color }} />
                <span className="h-[4px] flex-1 rounded-full bg-[#E7ECF6]">
                  <span
                    className="block h-full rounded-full"
                    style={{ width: `${76 - index * 12}%`, background: color }}
                  />
                </span>
              </div>
            ))}
          </div>
          <div className="rounded-[7px] bg-[#FFF0F5] p-[5px]">
            <div className="mx-auto flex h-[32px] w-[32px] items-center justify-center rounded-full border-[4px] border-[#FF7890] bg-white text-[10px] font-semibold text-[#1D2634]">
              35
            </div>
          </div>
        </div>
        <div className="mt-[10px] grid grid-cols-3 gap-[5px]">
          <span className="h-[15px] rounded-[4px] bg-[#FFEECB]" />
          <span className="h-[15px] rounded-[4px] bg-[#FCD5DE]" />
          <span className="h-[15px] rounded-[4px] bg-[#DDF2EB]" />
        </div>
      </div>
      <div className="absolute top-0 right-0 rounded-[12px] bg-[#A8F0DB] px-[10px] py-[8px] text-center shadow-sm">
        <p className="text-[5px] text-[#1D2634]/60">Growth</p>
        <p className="mt-[2px] text-[11px] font-semibold text-[#1D2634]">+4.7%</p>
      </div>
      <div className="absolute bottom-[8px] left-[8px] rounded-[6px] bg-white px-[8px] py-[5px] text-[8px] font-semibold text-[#6B7DFF] shadow-sm">
        99.9%
      </div>
    </div>
  )
}

export default function HeroBanner({ hero }) {
  return (
    <section className="flex min-h-[164px] items-center justify-between gap-[14px] rounded-[14px] bg-[#1D2634] py-[20px] pr-[14px] pl-[18px] text-white">
      <div className="max-w-[clamp(300px,45vw,500px)]">
        <p className="text-[9px] leading-none text-white/75">{hero.eyebrow}</p>
        <h1 className="mt-[15px] text-[clamp(23px,2.55vw,32px)] leading-[1.08] font-medium tracking-[-0.03em]">
          {hero.title}
        </h1>
        <p className="mt-[14px] max-w-[440px] text-[11px] leading-[1.25] text-white/70">
          {hero.description}
        </p>
        <button
          type="button"
          className="mt-[15px] inline-flex h-[29px] items-center gap-[9px] rounded-full bg-white px-[22px] text-[9px] font-medium text-[#1D2634] transition-transform hover:-translate-y-0.5"
        >
          {hero.cta}
          <Icon name="arrowUp" className="h-[11px] w-[11px]" />
        </button>
      </div>
      <HeroPreview />
    </section>
  )
}
