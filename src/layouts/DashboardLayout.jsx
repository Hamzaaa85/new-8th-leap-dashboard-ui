import { Outlet } from 'react-router-dom'
import DashboardSidebar from '../features/navigation/components/DashboardSidebar'
import { currentUser } from '../features/navigation/data/navigationItems'

export default function DashboardLayout() {
  return (
    <main className="min-h-screen bg-[#EAF2FB] p-[8px] text-[#1D2634] sm:p-[12px] lg:p-[14px]">
      <div className="grid w-full grid-cols-1 gap-[6px] lg:min-h-[610px] lg:grid-cols-[160px_minmax(0,1fr)] xl:grid-cols-[160px_minmax(0,1fr)]">
        <DashboardSidebar user={currentUser} />
        <div className="min-w-0">
          <Outlet context={{ user: currentUser }} />
        </div>
      </div>
    </main>
  )
}
