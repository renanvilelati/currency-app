import { ExchangeRateNowSection } from './styles'


function ExchangeRateNow() {
  return (
    <ExchangeRateNowSection>
      <div className='headerContent'>
        <div>
          <h2>Exchange rate now</h2>
          <p>09/03/2022 - 15h09</p>
        </div>

        <span>
          {/* {currencyCode}/BRL */}
          /BRL
        </span>
      </div>

      <div className='currentValue'>
        R$ 5,00
      </div>
    </ExchangeRateNowSection>
  )
}

export default ExchangeRateNow