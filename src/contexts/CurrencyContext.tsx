import { IProvider } from '../types/shared'
import { toast } from 'react-toastify'
import { createContext, useState  } from 'react'
import { api } from '../services/api'
import { useTranslation } from 'react-i18next'
import { ICurrentExhangeRate, IDailyExhangeRateList } from '../types/currency'
import dailyExchangeRateData from '../data/dailyExchangeRateData.json'
import currentExchangeRateData from '../data/currentExchangeRateData.json'

interface ICurrencyContext {
  isLoading: boolean
  currentExchangeRate: ICurrentExhangeRate | undefined
  dailyExhangeRateList: IDailyExhangeRateList[]
  getCurrentExchangeRate: (fromSymbolCode: string) => Promise<void>
  get30DaysExchangeRate: (fromSymbolCode: string) => Promise<void>
  currencyCode: string
  handleSetCurrencyCode: (code: string) => void
}

export const CurrencyContext = createContext({} as ICurrencyContext)

const CurrencyProvider = ({children}: IProvider) => {
  const { t } = useTranslation()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [dailyExhangeRateList, setDailyExhangeRateList] = useState<IDailyExhangeRateList[]>([])
  const [currentExchangeRate, setCurrentExchangeRate] = useState<ICurrentExhangeRate>()
  const [currencyCode, setCurrencyCode] = useState<string>('')

  const handleSetCurrencyCode = (code: string) => {
    setCurrencyCode(code)   
  }

  const getCurrentExchangeRate = async (fromSymbolCode: string): Promise<void> => {  

    const apiKey = import.meta.env.VITE_API_KEY
    setIsLoading(true)
    
    try {
      // PARA USAR OS DADOS DA API DESCOMENTE AS DUAS LINHAS ABAIXO
      // const {data} = await api.get(`/open/currentExchangeRate?apiKey=${apiKey}&from_symbol=${fromSymbolCode}&to_symbol=BRL`)
      // setCurrentExchangeRate(data)
      setCurrentExchangeRate(currentExchangeRateData)
      setIsLoading(false)
    } catch (error) {
      toast.error(t('error-request'))
      console.error(error)       
    }
  }

  const get30DaysExchangeRate = async (fromSymbolCode: string): Promise<void> => {
    
    const apiKey = import.meta.env.VITE_API_KEY
    
    try {
      // PARA USAR OS DADOS DA API DESCOMENTE AS DUAS LINHAS ABAIXO
      // const {data} = await api.get(`/open/dailyExchangeRate?apiKey=${apiKey}&from_symbol=${fromSymbolCode}&to_symbol=BRL`)
      // setDailyExhangeRateList(data.data?.slice(0,30))      
      setDailyExhangeRateList(dailyExchangeRateData)      
   
      await getCurrentExchangeRate(fromSymbolCode)
    } catch (error) {
      toast.error(t('error-request'))
      console.error(error)       
    }
  }

  return (
    <CurrencyContext.Provider value={{
      isLoading,
      currentExchangeRate,
      dailyExhangeRateList, 
      get30DaysExchangeRate, 
      getCurrentExchangeRate,
      currencyCode,
      handleSetCurrencyCode
    }}>
      {children}
    </CurrencyContext.Provider>
  )
}
export default CurrencyProvider