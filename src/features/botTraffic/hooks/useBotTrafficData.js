import { botTrafficData } from '../data/botTrafficMockData'

export function useBotTrafficData() {
  return {
    data: botTrafficData,
    isLoading: false,
    error: null,
  }
}
