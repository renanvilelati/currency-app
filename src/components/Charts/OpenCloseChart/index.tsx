import { useTranslation } from 'react-i18next'
import{  useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import formatDate from '../../../utils/formatDate'

function OpenCloseChart({data}: any) {   
  const { t } = useTranslation()
  const chartRef = useRef<any>(null)
  const chartInstance = useRef<any>(null)

  const dataOpen = data.map( (item: {open: string}) => item.open)
  const dataClose = data.map( (item: {close: string}) => item.close)
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
              label: t('label-open'),
              data: dataOpen,
              fill: false,
              borderColor: '#07B0FB',
              tension: 0.4,
            },
            {
              label: t('label-close'),
              data: dataClose,
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
      <h5>{t('label-open-close-chart')}</h5>
      <canvas style={{paddingBottom: '10rem'}} ref={chartRef}></canvas>
    </div>
  )
}

export default OpenCloseChart
