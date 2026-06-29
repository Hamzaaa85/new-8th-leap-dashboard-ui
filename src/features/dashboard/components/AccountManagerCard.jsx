import Card from '../../../components/ui/Card'
import Icon from '../../../components/ui/Icon'

function ContactLine({ icon, children }) {
  return (
    <a
      href="#contact"
      className="flex items-center gap-[15px] text-[10px] leading-none text-[#1D2634] transition-colors hover:text-[#111827]"
    >
      <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#1D2634] text-white">
        <Icon name={icon} className="h-[11px] w-[11px]" />
      </span>
      {children}
    </a>
  )
}

export default function AccountManagerCard({ manager }) {
  return (
    <Card className="min-h-[216px] rounded-[14px] bg-[#E4E8FF] px-[9px] pt-[11px] pb-[11px]">
      <div className="flex gap-[10px] px-[1px]">
        <img
          src={manager.avatar}
          alt={manager.name}
          className="h-[47px] w-[47px] rounded-[8px] bg-[#DCEBF1] object-cover object-top"
        />
        <div className="pt-[2px]">
          <h2 className="text-[12px] leading-none font-medium text-[#1D2634]">{manager.name}</h2>
          <p className="mt-[10px] text-[10px] leading-none text-[#667185]">{manager.role}</p>
        </div>
      </div>

      <p className="mt-[18px] border-b border-white/45 pb-[13px] text-[10px] leading-none text-[#455061]">
        {manager.bio}
      </p>

      <div className="mt-[16px] space-y-[12px]">
        <ContactLine icon="mail">{manager.email}</ContactLine>
        <ContactLine icon="phone">{manager.phone}</ContactLine>
      </div>

      <div className="mt-[17px] space-y-[8px]">
        <button
          type="button"
          className="h-[27px] w-full rounded-full bg-[#1D2634] text-[10px] font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          {manager.primaryAction}
        </button>
        <button
          type="button"
          className="h-[27px] w-full rounded-full bg-white text-[10px] font-medium text-[#1D2634] transition-transform hover:-translate-y-0.5"
        >
          {manager.secondaryAction}
        </button>
      </div>
    </Card>
  )
}
