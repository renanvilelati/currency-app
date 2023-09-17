import { useTranslation } from 'react-i18next'
import{  useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import formatDate from '../../../utils/formatDate'

function HighLowChart({ data }: any) {
  const { t } = useTranslation()  
  const chartRef = useRef<any>(null)
  const chartInstance = useRef<any>(null)

  const dataHigh = data.map( (item: {high: string}) => item.high)
  const dataLow = data.map( (item: {low: string}) => item.low)
  const dataLabels = data.map( (item: {date: string}) => formatDate(item.date))

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d')
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dataLabels,
          datasets: [
            {
              label: 'High',
              data: dataHigh,
              fill: false,
              borderColor: '#07B0FB',
              tension: 0.4,
            },
            {
              label: 'Low',
              data: dataLow,
              fill: false,
              borderColor: '#69C669',
              tension: 0.4,
            },
          ],
        },
      })
    }
  }, [data])

  return (
    <div>
      <h5>{t('label-high-low-chart')}</h5>
      <canvas style={{paddingBottom: '10rem'}} ref={chartRef} width={200} height={200}></canvas>
    </div>
  )
}

export default HighLowChart
