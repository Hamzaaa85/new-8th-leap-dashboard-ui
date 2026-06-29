import { NavLink } from 'react-router-dom'
import Icon from '../../../components/ui/Icon'
import { navigationSections } from '../data/navigationItems'

function SidebarNavItem({ item }) {
  return (
    <NavLink
      to={item.to}
      end
      className={({ isActive }) =>
        `flex h-[28px] items-center gap-[11px] rounded-[7px] px-[14px] text-[11px] leading-none transition-colors ${
          isActive
            ? 'bg-[#E9EEF6] font-medium text-[#1D2634]'
            : 'text-[#455061] hover:bg-[#EEF3FA] hover:text-[#1D2634]'
        }`
      }
    >
      <Icon name={item.icon} className="h-[15px] w-[15px]" />
      <span>{item.label}</span>
    </NavLink>
  )
}

function SidebarSection({ section }) {
  return (
    <div>
      <p className="mb-[13px] text-[9px] leading-none font-medium tracking-[-0.01em] text-[#7E8898]">
        {section.label}
      </p>
      <nav className="space-y-[9px]" aria-label={section.label}>
        {section.items.map((item) => (
          <SidebarNavItem key={item.to} item={item} />
        ))}
      </nav>
    </div>
  )
}

export default function DashboardSidebar({ user }) {
  return (
    <aside className="flex flex-col rounded-[14px] bg-[#F8FAFE] px-[14px] pt-[18px] pb-[18px] lg:min-h-[610px] lg:pt-[31px] lg:pb-[54px]">
      <div className="pl-[12px]">
        <img src="/split_iq_logo_black.png" alt="SplitIQ" className="h-auto w-[92px]" />
        <p className="mt-[8px] text-[9px] leading-none text-[#7E8898] lg:mt-[10px]">Admin panel</p>
      </div>

      <div className="mt-[22px] grid gap-[20px] sm:grid-cols-3 lg:mt-[29px] lg:block lg:space-y-[32px]">
        {navigationSections.map((section) => (
          <SidebarSection key={section.label} section={section} />
        ))}
      </div>

      <div className="mt-[20px] grid gap-[12px] sm:grid-cols-[1fr_auto] sm:items-center lg:mt-auto lg:block lg:space-y-[14px]">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-[8px] px-[12px] py-[6px] text-left text-[10px] leading-none text-[#455061] transition-colors hover:bg-[#EEF3FA]"
        >
          <span className="flex items-center gap-[8px]">
            <img
              src={user.avatar}
              alt=""
              className="h-[18px] w-[18px] rounded-full bg-[#DCEBF1] object-cover object-top"
            />
            {user.name}
          </span>
          <Icon name="chevronDown" className="h-[12px] w-[12px] text-[#7E8898]" />
        </button>

        <button
          type="button"
          className="flex items-center gap-[10px] px-[12px] text-[11px] leading-none text-[#FF6E6E] transition-colors hover:text-[#E24747]"
        >
          <Icon name="logout" className="h-[15px] w-[15px]" />
          Logout
        </button>
      </div>
    </aside>
  )
}
