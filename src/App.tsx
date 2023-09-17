import Header from './components/Header'
import { GlobalStyle } from './styles/global'
import Footer from './components/Footer'
import ExchangeRateRow from './components/ExchangeRateRow'
import LatestExchangeRates from './components/LatestExchangeRates'
import InputCurrencyCode from './components/InputCurrencyCode'
import './utils/i18n'
import { useTranslation } from 'react-i18next'

function App() {  

  const { t } = useTranslation()

  return (
    <>
      <GlobalStyle />
      <Header />

      <main style={{padding: '0 1rem'}}>

        <h1 className='title'>{t('label-title')}</h1>

        <InputCurrencyCode />

        <ExchangeRateRow />

        <LatestExchangeRates />

      </main>

      <Footer />
    </>
  )
}

export default App
