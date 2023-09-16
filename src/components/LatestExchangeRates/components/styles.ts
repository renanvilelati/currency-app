import styled from 'styled-components'

export const Container = styled.div`
  background: var(--neutral);
  padding: 0.7rem;
`

export const Card = styled.article`
  background: var(--background);
  padding: 1rem;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.10);
  gap: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  .date {
    color: var(--primary);
    font-weight: 700;
    padding-bottom: 0.25rem;
  }

  .comparativeWrapper {
    display: flex;
    justify-content: space-between;
  }

  .comparative {    
    p {
      
      padding-bottom: 0.4rem;
      font-size: 0.75rem;

      span {
        font-weight: 700;
        font-size: 1rem;
        padding-left: 1rem;
      }

    }
        
  }

  .closeDiff {    
    font-size: 0.75rem;
    p {
      display: flex;
      align-items: center;
      gap: .5rem;
    }

    span {
        font-weight: 700;
        font-size: 1rem;
        display: flex;
        align-items: center;
        
              svg {
                font-size: 1.5rem;
              }
      }
  }
`