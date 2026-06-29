const BAR_DATA = [
  { h: 55, color: '#60A5FA' },
  { h: 38, color: '#FCD34D' },
  { h: 72, color: '#60A5FA' },
  { h: 48, color: '#FCD34D' },
  { h: 64, color: '#60A5FA' },
]

export default function ReportPreviewThumbnail() {
  return (
    <div className="relative overflow-hidden rounded-[10px] border border-[#E2E8F0] bg-white p-[12px] shadow-sm">
      {/* PDF badge */}
      <span className="absolute left-[10px] top-[10px] rounded-[4px] bg-[#EF4444] px-[6px] py-[2px] text-[8px] font-bold leading-none tracking-wide text-white">
        PDF
      </span>

      {/* Document text lines */}
      <div className="mb-[12px] mt-[26px] space-y-[5px]">
        <div className="h-[3px] rounded-full bg-[#D1D5DB]" />
        <div className="h-[3px] w-[75%] rounded-full bg-[#D1D5DB]" />
        <div className="h-[3px] rounded-full bg-[#D1D5DB]" />
        <div className="h-[3px] w-[88%] rounded-full bg-[#D1D5DB]" />
      </div>

      {/* Charts row */}
      <div className="flex items-end gap-[10px]">
        {/* Donut chart */}
        <div
          className="h-[52px] w-[52px] shrink-0 rounded-full"
          style={{
            background: 'conic-gradient(#3B82F6 0% 55%, #FCD34D 55% 80%, #E5E7EB 80% 100%)',
            WebkitMask: 'radial-gradient(circle, transparent 38%, black 38%)',
            mask: 'radial-gradient(circle, transparent 38%, black 38%)',
          }}
          aria-hidden="true"
        />

        {/* Bar chart */}
        <div className="flex flex-1 items-end gap-[3px]" style={{ height: 52 }}>
          {BAR_DATA.map((bar, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-[2px]"
              style={{ height: bar.h, backgroundColor: bar.color }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
