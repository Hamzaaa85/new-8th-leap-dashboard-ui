import Icon from '../../../components/ui/Icon'

export default function PagesPagination({ total, rowsPerPage, currentPage }) {
  return (
    <div className="mt-[20px] flex flex-wrap items-center justify-between gap-[10px] border-t border-[#F1F5F9] pt-[14px]">
      <p className="text-[10px] text-[#667185]">
        Showing 1-{Math.min(rowsPerPage, total)} of {total} Results
      </p>

      <div className="flex items-center gap-[10px]">
        <div className="flex items-center gap-[6px]">
          <span className="text-[10px] text-[#667185]">Rows per page:</span>
          <button
            type="button"
            className="flex h-[26px] items-center gap-[4px] rounded-[6px] border border-[#E2E8F0] bg-white px-[8px] text-[10px] font-medium text-[#1D2634] hover:bg-[#F8FAFE]"
          >
            {rowsPerPage}
            <Icon name="chevronDown" className="h-[10px] w-[10px] text-[#9CA3AF]" />
          </button>
        </div>

        <div className="flex items-center gap-[4px]">
          <button
            type="button"
            className="flex h-[26px] w-[26px] items-center justify-center rounded-[6px] bg-[#1D2634] text-[10px] font-semibold text-white"
            aria-current="page"
          >
            {currentPage}
          </button>
        </div>
      </div>
    </div>
  )
}
