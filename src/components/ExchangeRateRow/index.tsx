import { useTranslation } from 'react-i18next'
import { ExchangeRateNowSection } from './styles'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import { useContext } from 'react'
import formatDate from '../../utils/formatDate'
import formatHour from '../../utils/formatHour'
import formatValue from '../../utils/formatValue'
import i18n from '../../utils/i18n'

function ExchangeRateNow() {
  const { t } = useTranslation()

  const {currentExchangeRate, currencyCode, isLoading} = useContext(CurrencyContext)

  const currentDate = currentExchangeRate?.lastUpdatedAt?.toString()
  const formattedDate = formatDate(currentDate as string)
  const formattedHour = formatHour(currentDate  as string)   

  const replaceFormat = i18n.language.replace('_', '-')
  const languageSymbol = replaceFormat.substring(0, 2).toLowerCase() + replaceFormat.substring(2)  

  return (
    <ExchangeRateNowSection>
      <div className='headerContent'>
        <div>
          <h2>{t('label-exchange-rate-now')}</h2>
          {currentExchangeRate && <p>{formattedDate} - {formattedHour}</p>}          
        </div>

        <span>
          {currencyCode}/BRL
        </span>
      </div>

      <div className='currentValue'>
        
        {!isLoading && currentExchangeRate && formatValue(currentExchangeRate.exchangeRate?.toString(), languageSymbol)}
      </div>
    </ExchangeRateNowSection>
  )
}

export default ExchangeRateNow