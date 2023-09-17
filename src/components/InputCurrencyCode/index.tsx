import { useState, useContext, ChangeEvent, FormEvent } from 'react'
import { CurrencyCodeContainer } from './styles'
import { useTranslation } from 'react-i18next'
import { CurrencyContext } from '../../contexts/CurrencyContext'

function InputCurrencyCode() {

  const { t } = useTranslation()

  const { get30DaysExchangeRate, handleSetCurrencyCode, currencyCode } = useContext(CurrencyContext)

  // const [currencyCode, setCurrencyCode] = useState('')

  // const handleTypeCurrencyCode = (event: ChangeEvent<HTMLInputElement>) => {
  //   setCurrencyCode(event.target.value)
  // }

  const handleGet30DaysExchangeRate = async (e: FormEvent) => {
    e.preventDefault()    
    const res = await get30DaysExchangeRate(currencyCode)   
  }

  return (
    <CurrencyCodeContainer>
      <form onSubmit={handleGet30DaysExchangeRate}>
        <input 
          type="text" 
          className="currencyCode" 
          value={currencyCode} 
          onChange={ e => handleSetCurrencyCode(e.target.value)} 
          placeholder={t('placeholder-currency-code')} />
        <button>
          {t('label-exchange-result')}
        </button>

      </form>
    </CurrencyCodeContainer>
  )
}

export default InputCurrencyCode