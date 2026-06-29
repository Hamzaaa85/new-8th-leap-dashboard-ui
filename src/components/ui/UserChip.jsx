import Icon from './Icon'

export default function UserChip({ user, className = '' }) {
  return (
    <button
      type="button"
      className={`flex h-[39px] items-center gap-[10px] rounded-[12px] bg-[#F8FAFE] px-[13px] text-[11px] leading-none text-[#1D2634] transition-colors hover:bg-white ${className}`}
    >
      <img
        src={user.avatar}
        alt=""
        className="h-[26px] w-[26px] rounded-full bg-[#DCEBF1] object-cover object-top"
      />
      <span>{user.name}</span>
      <Icon name="chevronDown" className="h-[12px] w-[12px] text-[#7E8898]" />
    </button>
  )
}
