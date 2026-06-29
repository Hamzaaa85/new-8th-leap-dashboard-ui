import PagesTableRow from './PagesTableRow'

const columns = [
  { key: 'url', label: 'PAGE URL / CONTENT' },
  { key: 'aiModel', label: 'AI MODEL' },
  { key: 'region', label: 'REGION' },
  { key: 'aiStatus', label: 'AI STATUS' },
  { key: 'score', label: 'SCORE' },
  { key: 'actions', label: 'ACTIONS' },
]

export default function PagesTable({ pages }) {
  return (
    <div className="mt-[18px] overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="pb-[10px] pr-[16px] text-left text-[9px] font-semibold uppercase tracking-[0.06em] text-[#667185] last:pr-0"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pages.map((page) => (
            <PagesTableRow key={page.id} page={page} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
