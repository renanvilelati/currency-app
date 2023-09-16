import { Card } from './styles'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

function DailyCard() {
  return (
    <Card>

      <div className='date'><span>09/03/2022</span></div>

      <div className="comparativeWrapper">
        <div className="comparative">
          <p>Open: <span>R$ 5.066</span></p>
          <p>Close: <span>R$ 5.038</span></p>
        </div>

        <div className="comparative">
          <p>Hight: <span>R$ 5.066</span></p>
          <p>Low: <span>R$ 5.038</span></p>
        </div>
      </div>

      <div className="closeDiff">
        <p>Close diff (%): <span>-1.15% <MdKeyboardArrowDown /></span>  </p>
      </div>

    </Card>
  )
}

export default DailyCard