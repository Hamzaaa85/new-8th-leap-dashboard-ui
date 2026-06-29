import { dashboardData } from '../data/dashboardData'

export function useDashboardData() {
  return {
    data: dashboardData,
    isLoading: false,
    error: null,
  }
}
