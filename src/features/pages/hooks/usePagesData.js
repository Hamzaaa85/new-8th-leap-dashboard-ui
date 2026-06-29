import { pagesData } from '../data/pagesMockData'

export function usePagesData() {
  return {
    data: pagesData,
    isLoading: false,
    error: null,
  }
}
