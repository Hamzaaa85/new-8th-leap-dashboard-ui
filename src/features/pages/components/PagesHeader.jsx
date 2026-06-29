import Icon from '../../../components/ui/Icon'

export default function PagesHeader({ website }) {
  return (
    <div className="mb-[18px] flex flex-wrap items-start justify-between gap-[12px]">
      <div>
        <h1 className="text-[18px] font-semibold leading-none text-[#1D2634]">Pages</h1>
        <p className="mt-[6px] text-[11px] leading-none text-[#667185]">
          Selected website: <span className="text-[#1D2634]">{website}</span>
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-[8px]">
        <div className="relative flex items-center">
          <span className="pointer-events-none absolute left-[10px] text-[#9CA3AF]">
            <Icon name="search" className="h-[13px] w-[13px]" />
          </span>
          <input
            type="text"
            placeholder="Search pages (url, intent, activation, content)"
            className="h-[32px] w-[290px] rounded-[7px] border border-[#E2E8F0] bg-white pl-[30px] pr-[10px] text-[11px] text-[#1D2634] placeholder:text-[#9CA3AF] focus:border-[#1D2634] focus:outline-none"
          />
        </div>

        <button
          type="button"
          className="flex h-[32px] items-center gap-[6px] rounded-[7px] border border-[#E2E8F0] bg-white px-[12px] text-[11px] font-medium text-[#455061] hover:bg-[#F8FAFE]"
        >
          All status
          <Icon name="chevronDown" className="h-[12px] w-[12px] text-[#9CA3AF]" />
        </button>

        <button
          type="button"
          className="flex h-[32px] items-center gap-[6px] rounded-[7px] border border-[#E2E8F0] bg-white px-[12px] text-[11px] font-medium text-[#455061] hover:bg-[#F8FAFE]"
        >
          All AI model
          <Icon name="chevronDown" className="h-[12px] w-[12px] text-[#9CA3AF]" />
        </button>

        <button
          type="button"
          className="flex h-[32px] items-center gap-[6px] rounded-[7px] border border-[#E2E8F0] bg-white px-[12px] text-[11px] font-medium text-[#455061] hover:bg-[#F8FAFE]"
        >
          Bulk Import
          <Icon name="download" className="h-[13px] w-[13px]" />
        </button>

        <button
          type="button"
          className="flex h-[32px] items-center gap-[6px] rounded-[7px] bg-[#1D2634] px-[14px] text-[11px] font-medium text-white hover:bg-[#2D3748]"
        >
          <Icon name="plus" className="h-[13px] w-[13px]" />
          Add Page
        </button>
      </div>
    </div>
  )
}
