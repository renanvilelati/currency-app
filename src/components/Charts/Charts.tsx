import { CurrencyContext } from '../../contexts/CurrencyContext'
import { IDailyExhangeRateList } from '../../types/currency'
import HighLowChart from './HighLowChart'
import OpenCloseChart from './OpenCloseChart'
import { useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Chart() {
  const { t } = useTranslation()
  const [chartData, setChartData] = useState<IDailyExhangeRateList[]>([])
  const { dailyExhangeRateList } = useContext(CurrencyContext)

  useEffect( () => {
    setChartData(dailyExhangeRateList)   
  }, [dailyExhangeRateList])

  return (
    <div>
      <h2>{t('label-charts')}</h2>
      {
        dailyExhangeRateList?.length > 0 ? (

          <div>
            <OpenCloseChart data={chartData} />
            <HighLowChart data={chartData} />
          </div>
        ) : (
          <p>{t('label-no-data-moment')}</p>
        )
      }
    </div>
  )
}

export default Chart