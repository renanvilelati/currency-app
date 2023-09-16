import styled from 'styled-components'

export const LatestExchangeRatesSection = styled.div`

padding: 2rem 0;

.headerContent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid var(--primary);
  padding-bottom: 0.75rem;

  > h2 {
    text-transform: uppercase;
  }

  > span {
    color: var(--primary);
    font-weight: 700;
  }

  .lastDaysButton {
    border: 0;
    color: var(--primary);
    font-size: 2rem;
    background: transparent;
  }
}

  .currentValue {
    text-align: center;
    font-weight: 700;
    color: var(--primary);
    background-color: var(--primary-light);
  }
`