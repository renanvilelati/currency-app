import { FooterComponent } from './styles'

function Footer() {

  const currentYear = new Date().getFullYear()

  return (
    <FooterComponent>Copyright {currentYear} - Action Labs</FooterComponent>
  )
}

export default Footer