const formatHour = (dataISO: string) => {
  const data = new Date(dataISO)
  const horas = String(data.getHours()).padStart(2, '0')
  const minutos = String(data.getMinutes()).padStart(2, '0')
  return `${horas}:${minutos}`
}

export default formatHour