import logoImg from '/logo-actionlabs.svg'

import { Container, Content } from './styles'

function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Action Labs" />
      </Content>
    </Container>
  )
}

export default Header