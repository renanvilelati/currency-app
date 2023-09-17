export interface IDailyExhangeRateList {
  high: number
  low: number
  open: number
  close: number
  date: string
}

export interface ICurrentExhangeRate {
  exchangeRate: number
  fromSymbol: string
  lastUpdatedAt: string
  rateLimitExceeded: boolean
  success: boolean
  toSymbol: string
}