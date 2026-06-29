import Icon from '../../../components/ui/Icon'

const tagStyles = {
  'AI generated': 'bg-[#DCFCE7] text-[#16A34A]',
  Manual: 'bg-[#F1F5F9] text-[#64748B]',
}

const aiModelStyles = {
  Active: 'bg-[#DBEAFE] text-[#2563EB]',
  Inactive: 'bg-[#F1F5F9] text-[#64748B]',
}

const regionStyles = {
  Content: 'bg-[#DBEAFE] text-[#2563EB]',
  Intent: 'bg-[#EDE9FE] text-[#7C3AED]',
  Activation: 'bg-[#FEF9C3] text-[#A16207]',
}

const aiStatusStyles = {
  'AI optimised': 'text-[#1D2634]',
  'Pending review': 'text-[#D97706]',
  'Not optimised': 'text-[#DC2626]',
}

function ScoreBar({ score }) {
  return (
    <div className="flex items-center gap-[8px]">
      <div className="h-[5px] w-[54px] overflow-hidden rounded-full bg-[#E5E7EB]">
        <div
          className="h-full rounded-full bg-[#22C55E]"
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-[11px] font-medium text-[#1D2634]">{score}</span>
    </div>
  )
}

export default function PagesTableRow({ page }) {
  return (
    <tr className="border-t border-[#F1F5F9] hover:bg-[#F8FAFE]">
      <td className="py-[14px] pr-[16px]">
        <a
          href={page.url}
          target="_blank"
          rel="noreferrer"
          className="block text-[11px] font-medium leading-snug text-[#1D2634] hover:underline"
        >
          {page.url}
        </a>
        <span
          className={`mt-[5px] inline-block rounded-full px-[8px] py-[2px] text-[9px] font-medium leading-none ${tagStyles[page.tag] ?? 'bg-[#F1F5F9] text-[#64748B]'}`}
        >
          {page.tag}
        </span>
      </td>

      <td className="py-[14px] pr-[16px]">
        <span
          className={`inline-block rounded-full px-[9px] py-[3px] text-[10px] font-medium leading-none ${aiModelStyles[page.aiModel] ?? 'bg-[#F1F5F9] text-[#64748B]'}`}
        >
          {page.aiModel}
        </span>
      </td>

      <td className="py-[14px] pr-[16px]">
        <span
          className={`inline-block rounded-full px-[9px] py-[3px] text-[10px] font-medium leading-none ${regionStyles[page.region] ?? 'bg-[#F1F5F9] text-[#64748B]'}`}
        >
          {page.region}
        </span>
      </td>

      <td className="py-[14px] pr-[16px]">
        <span className={`text-[11px] font-medium ${aiStatusStyles[page.aiStatus] ?? 'text-[#1D2634]'}`}>
          {page.aiStatus}
        </span>
      </td>

      <td className="py-[14px] pr-[16px]">
        <ScoreBar score={page.score} />
      </td>

      <td className="py-[14px]">
        <div className="flex items-center gap-[6px]">
          <button
            type="button"
            className="rounded-[6px] border border-[#E2E8F0] bg-white px-[12px] py-[5px] text-[10px] font-medium text-[#1D2634] hover:bg-[#F8FAFE]"
          >
            Begin
          </button>
          <button
            type="button"
            className="flex h-[26px] w-[26px] items-center justify-center rounded-[6px] text-[#9CA3AF] hover:bg-[#EEF3FA] hover:text-[#1D2634]"
          >
            <Icon name="dotsVertical" className="h-[14px] w-[14px]" strokeWidth={2.5} />
          </button>
        </div>
      </td>
    </tr>
  )
}
