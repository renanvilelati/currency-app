import { useTranslation } from 'react-i18next'
import { Card } from './styles'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { IDailyExhangeRateList } from '../../../types/currency'
import formatDate from '../../../utils/formatDate'
import formatHour from '../../../utils/formatHour'

interface IDailyCard {
  data: IDailyExhangeRateList, 
  diffPercent: string | null
  closeDiffColor: string 
  arrowIcon: boolean
}

function DailyCard({ data, diffPercent, closeDiffColor, arrowIcon }: IDailyCard) {
  const { open, close, high, low, date } = data
  const { t } = useTranslation()

  const formattedDate = formatDate(date.toString())
  const formattedHour = formatHour(date.toString()) 

  return (
    <Card>

      <div className='date'><span>{formattedDate} - {formattedHour}</span></div>

      <div className="comparativeWrapper">
        <div className="comparative">
          <p>{t('label-open')}: <span>{open}</span></p>
          <p>{t('label-close')}: <span>{close}</span></p>
        </div>

        <div className="comparative">
          <p>{t('label-high')}: <span>{high}</span></p>
          <p>{t('label-low')}: <span>{low}</span></p>
        </div>
      </div>

      <div className="closeDiff">
        <p>
          {t('label-close-diff')}(%): 
          <span style={{color: closeDiffColor}}> 
            {diffPercent} 
            {arrowIcon ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}          
          </span>  
        </p>
      </div>

    </Card>
  )
}

export default DailyCard