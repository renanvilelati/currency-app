import logoImg from '/logo-actionlabs.svg'
import { Container, Content } from './styles'
import I18n from '../../utils/I18n/I18n'

function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Action Labs" />
      </Content>
      <I18n />
    </Container>
  )
}

export default Header