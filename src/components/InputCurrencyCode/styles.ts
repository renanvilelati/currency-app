import styled from 'styled-components'

export const CurrencyCodeContainer = styled.div`

  .currencyCode {
    display: block;
    border: 0;
    background: var(--neutral);
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 2rem;
    width: 100%;
    outline: none;

    &:focus {
      border-bottom: 2px solid var(--primary)
    }
  }

  > button {
    color: #FFF;
    background: var(--primary);
    border: 0;
    width: 100%;
    border-radius: 32px;
    padding: 1rem 0;
    text-transform: uppercase;
    font-size: 1rem;
  }
`