import styled from 'styled-components'

export const ExchangeRateNowSection = styled.div`

padding: 2rem 0;

.headerContent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > div h2 {
    padding-bottom: 0.2rem;
  }

  > span {
    color: var(--primary);
    font-weight: 700;
  }
}

  .currentValue {
    text-align: center;
    font-weight: 700;
    color: var(--primary);
    background-color: var(--primary-light);
  }
`