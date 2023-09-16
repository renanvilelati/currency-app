import styled from 'styled-components'

export const ExchangeRateNowSection = styled.div`

border-top: 2px solid var(--neutral);
    margin-top: 3rem;
    padding-top: 2rem;

.headerContent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;

  > div h2 {
    padding-bottom: 0.2rem;
  }

  > span {
    font-size: 1.7rem;
    color: var(--primary);
    font-weight: 700;
  }
}

  .currentValue {
    padding: 1.5rem;
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    color: var(--primary);
    background-color: var(--primary-light);
  }
`