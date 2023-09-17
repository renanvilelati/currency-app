import styled from 'styled-components'

export const Container = styled.header`
  background: var(--background);
  display: flex;
  align-items: center;
  padding: 1rem 0;
    text-align: center;
    border-bottom: 2px solid var(--neutral);

  .flags-container {
    display: flex;
    gap: 1rem;
    position: absolute;
    right: 1rem;

    img {
      width: 1.2rem;
      cursor: pointer;
    }
  }
`

export const Content = styled.div`
  max-width: 1170px;
  margin: 0 auto;

  padding: 0 1rem;

  img {
    width: 10rem;
  }
`