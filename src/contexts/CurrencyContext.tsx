import { IProvider } from '../types/shared'
import { createContext, useState  } from 'react'

interface ICurrencyContext {
  isLoading: boolean
}

export const CurrencyContext = createContext({} as ICurrencyContext)

const CurrencyProvider = ({children}: IProvider) => {

  //  RVZG0GHEV2KORLNA

  const get30DaysExchangeRate = () => {
    // 
  }

  const [isLoading, setIsLoading] = useState(false)

  return (
    <CurrencyContext.Provider value={{isLoading}}>
      {children}
    </CurrencyContext.Provider>
  )
}
export default CurrencyProvider