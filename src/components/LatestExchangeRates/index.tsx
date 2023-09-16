import { LatestExchangeRatesSection } from './styles'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { useState } from 'react'
import DailyCardWrapper from './components/DailyCardWrapper'

function LatestExchangeRates() {

  const [isLastDaysOpen, setiIsLastDaysOpen] = useState(false)

  const handleOpenLastDaysSection = () => {
    setiIsLastDaysOpen(!isLastDaysOpen)
  }

  return (
    <LatestExchangeRatesSection>
      <div className='headerContent'>
        <h2>Last 30 days</h2>
        <button className='lastDaysButton' onClick={handleOpenLastDaysSection}> 
          {isLastDaysOpen ? <AiOutlineMinus /> : <AiOutlinePlus />} 
        </button>
      </div>

      { isLastDaysOpen && <DailyCardWrapper /> }

    </LatestExchangeRatesSection>
  )
}

export default LatestExchangeRates