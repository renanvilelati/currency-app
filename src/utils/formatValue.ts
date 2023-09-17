const formatValue = (value: string, locale: string) => {

  switch (locale) {
  case 'pt-BR':
    return Number(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    })
  case 'en-US':
    return Number(value).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    })

  default:
    return Number(value).toLocaleString(locale, {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    })
  }


}

export default formatValue 