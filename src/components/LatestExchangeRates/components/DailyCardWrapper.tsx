import DailyCard from './DailyCard'
import { Container } from './styles'

function DailyCardWrapper() {
  return (
    <Container>
      <DailyCard />
      <DailyCard />
      <DailyCard />
      <DailyCard />
      <DailyCard />
    </Container>
  )
}

export default DailyCardWrapper