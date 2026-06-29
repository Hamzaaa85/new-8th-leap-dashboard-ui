import { useOutletContext } from 'react-router-dom'
import Card from '../../../components/ui/Card'
import UserChip from '../../../components/ui/UserChip'
import PagesHeader from '../components/PagesHeader'
import PagesTable from '../components/PagesTable'
import PagesPagination from '../components/PagesPagination'
import { usePagesData } from '../hooks/usePagesData'

export default function PagesPage() {
  const { user } = useOutletContext()
  const { data, error, isLoading } = usePagesData()

  if (isLoading) {
    return (
      <section className="flex min-h-[610px] items-center justify-center rounded-[14px] bg-[#F8FAFE] text-[#1D2634]">
        Loading pages...
      </section>
    )
  }

  if (error) {
    return (
      <section className="flex min-h-[610px] items-center justify-center rounded-[14px] bg-[#F8FAFE] text-[#1D2634]">
        Unable to load pages.
      </section>
    )
  }

  return (
    <div className="min-h-[610px]">
      <div className="mb-[8px] flex justify-end">
        <UserChip user={user} />
      </div>

      <Card className="px-[20px] pt-[20px] pb-[20px]">
        <PagesHeader website={data.website} />

        <div className="mt-[14px] rounded-[10px] bg-[#EEF3FA] px-[13px] py-[11px]">
          <div className="mb-[10px] flex items-center justify-between text-[10px] leading-none text-[#1D2634]">
            <span className="font-medium">{data.usage.label}</span>
            <span className="text-[#667185]">
              {data.usage.current} / {data.usage.total} {data.usage.description}
            </span>
          </div>
          <div className="h-[7px] overflow-hidden rounded-full bg-[#D8E4F0]">
            <div
              className="h-full rounded-full bg-[#1D2634]"
              style={{ width: `${(data.usage.current / data.usage.total) * 100}%` }}
              aria-label={`${data.usage.current} of ${data.usage.total} ${data.usage.description}`}
            />
          </div>
        </div>

        <PagesTable pages={data.pages} />

        <PagesPagination
          total={data.pagination.total}
          rowsPerPage={data.pagination.rowsPerPage}
          currentPage={data.pagination.currentPage}
        />
      </Card>
    </div>
  )
}
