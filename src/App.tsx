import { useState, ChangeEvent } from 'react'
import Header from './components/Header'
import { GlobalStyle } from './styles/global'
import Footer from './components/Footer'
import ExchangeRateRow from './components/ExchangeRateRow'
import LatestExchangeRates from './components/LatestExchangeRates'
import InputCurrencyCode from './components/InputCurrencyCode'

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />

      <main style={{padding: '0 1rem'}}>

        <h1 className='title'>BRL Exchange Rate</h1>

        <InputCurrencyCode />

        <ExchangeRateRow />

        <LatestExchangeRates />

      </main>

      <Footer />
    </>
  )
}

export default App
