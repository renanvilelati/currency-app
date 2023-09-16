import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
  --white: #FFF;
  --background: #FFF;
  --primary: #07B0FB;
  --primary-light: #07b0fb24;
  --success: #69C669;
  --danger: #E54E4E;
  --neutral: #F4F4F4;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
  height: 100vh;
}

body {
  background: var(--background);
  --webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

h1.title {
  color: #07B0FB;
    padding: 2rem 0;
    text-transform: uppercase;
    text-align: center;
}

h2 {
  font-size: 1.125rem
}

`
