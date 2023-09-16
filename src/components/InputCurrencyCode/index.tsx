import { useState, ChangeEvent } from 'react'
import { CurrencyCodeContainer } from './styles'

function InputCurrencyCode() {

  const [currencyCode, setCurrencyCode] = useState('')

  const handleTypeCurrencyCode = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setCurrencyCode(event.target.value)
  }

  return (
    <CurrencyCodeContainer>
      <input 
        type="text" 
        className="currencyCode" 
        value={currencyCode} 
        onChange={handleTypeCurrencyCode} 
        placeholder="Enter the currency code" />
      <button>Exchange result</button>
    </CurrencyCodeContainer>
  )
}

export default InputCurrencyCode