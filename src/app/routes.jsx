import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import LoginPage from '../features/auth/pages/LoginPage'
import BotTrafficPage from '../features/botTraffic/pages/BotTrafficPage'
import DashboardPage from '../features/dashboard/pages/DashboardPage'
import PagesPage from '../features/pages/pages/PagesPage'
import ReportsPage from '../features/reports/pages/ReportsPage'

function PlaceholderPage({ title }) {
  return (
    <section className="flex min-h-[610px] items-center justify-center rounded-[14px] bg-[#F8FAFE] text-center">
      <div>
        <p className="text-[18px] font-medium text-[#1D2634]">{title}</p>
        <p className="mt-[10px] text-[12px] text-[#667185]">This page is ready for its feature module.</p>
      </div>
    </section>
  )
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/bot-traffic" element={<BotTrafficPage />} />
        <Route path="/pages" element={<PagesPage />} />
        <Route path="/pages/new" element={<PlaceholderPage title="Add Page" />} />
        <Route path="/prompts" element={<PlaceholderPage title="Prompts" />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/notifications" element={<PlaceholderPage title="Notifications" />} />
        <Route path="/messages" element={<PlaceholderPage title="Messages" />} />
        <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
        <Route path="/profile" element={<PlaceholderPage title="Profile" />} />
      </Route>
    </Routes>
  )
}
