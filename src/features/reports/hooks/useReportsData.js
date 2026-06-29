import { reportsData } from '../data/reportsMockData'

export function useReportsData() {
  return {
    data: reportsData,
    isLoading: false,
    error: null,
  }
}
