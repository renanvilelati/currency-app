import { useState, ChangeEvent } from 'react'
import Header from './components/Header'
import { GlobalStyle } from './styles/global'
import Footer from './components/Footer'
import ExchangeRateRow from './components/ExchangeRateRow'
import LatestExchangeRates from './components/LatestExchangeRates'

function App() {

  const [currencyCode, setCurrencyCode] = useState('')

  const handleTypeCurrencyCode = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setCurrencyCode(event.target.value)
  }

  return (
    <>
      <GlobalStyle />
      <Header />

      <main style={{padding: '0 1rem'}}>

        <h1>BRL Exchange Rate</h1>

        <label htmlFor="currency_code">Enter the currency code</label>
        <input 
          type="text" 
          id="currency_code" 
          value={currencyCode} 
          onChange={handleTypeCurrencyCode} 
          placeholder="Enter the currency code" />
        <button>Exchange result</button>

        {/* componente exchangeRateRow */}

        <ExchangeRateRow currencyCode={currencyCode} />

        <LatestExchangeRates />

      </main>

      <Footer />
    </>
  )
}

export default App
