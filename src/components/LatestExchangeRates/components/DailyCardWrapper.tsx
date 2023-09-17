import { useContext } from 'react'
import DailyCard from './DailyCard'
import { Container } from './styles'
import { CurrencyContext } from '../../../contexts/CurrencyContext'

function DailyCardWrapper() {

  const {dailyExhangeRateList} = useContext(CurrencyContext)

  return (
    <Container>
      {
        dailyExhangeRateList.map( (cardData, index) => {

          const previousCardData = index > 0 ? dailyExhangeRateList[index - 1] : null
    
          let arrowIcon = false
          let diffPercent = null
          let closeDiffColor = ''

          if (previousCardData) {
            const closeDiaAnterior = previousCardData.close
            diffPercent = ((cardData.close - closeDiaAnterior) / closeDiaAnterior) * 100
            diffPercent = diffPercent.toFixed(3)

            if (Number(diffPercent) < 0) {
              diffPercent = `${diffPercent}%`
              closeDiffColor = 'var(--danger)'
              arrowIcon = false
            } else {
              diffPercent = `+${diffPercent}%`
              closeDiffColor = 'var(--success)'
              arrowIcon = true
            }
          }

          return (
            <DailyCard 
              key={cardData.date.toString()} 
              data={cardData} 
              diffPercent={diffPercent}
              closeDiffColor={closeDiffColor}
              arrowIcon={arrowIcon}
            />  
          )
        })}
    </Container>
  )
}

export default DailyCardWrapper