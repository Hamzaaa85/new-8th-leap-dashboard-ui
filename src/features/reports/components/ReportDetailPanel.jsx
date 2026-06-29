import Icon from '../../../components/ui/Icon'
import ReportPreviewThumbnail from './ReportPreviewThumbnail'

export default function ReportDetailPanel({ report }) {
  return (
    <div className="flex w-[185px] shrink-0 flex-col gap-[12px]">
      <ReportPreviewThumbnail />

      <div>
        <h3 className="text-[13px] font-semibold leading-none text-[#1D2634]">{report.title}</h3>
        <div className="mt-[7px] flex items-center gap-[5px]">
          <Icon name="calendar" className="h-[11px] w-[11px] text-[#9CA3AF]" />
          <span className="text-[11px] leading-none text-[#667185]">{report.date}</span>
        </div>
      </div>

      <div className="space-y-[8px]">
        <button
          type="button"
          className="flex h-[36px] w-full items-center justify-center gap-[6px] rounded-[8px] bg-[#1D2634] text-[11px] font-medium text-white transition-colors hover:bg-[#2D3748]"
        >
          <Icon name="eye" className="h-[13px] w-[13px]" />
          View
        </button>

        <button
          type="button"
          className="flex h-[36px] w-full items-center justify-center gap-[6px] rounded-[8px] border border-[#E2E8F0] text-[11px] font-medium text-[#455061] transition-colors hover:bg-[#F8FAFE]"
        >
          <Icon name="download" className="h-[13px] w-[13px]" />
          Download
        </button>

        <button
          type="button"
          className="flex h-[36px] w-full items-center justify-center gap-[6px] rounded-[8px] border border-[#E2E8F0] text-[11px] font-medium text-[#455061] transition-colors hover:bg-[#F8FAFE]"
        >
          <Icon name="share" className="h-[13px] w-[13px]" />
          Share
        </button>
      </div>
    </div>
  )
}
