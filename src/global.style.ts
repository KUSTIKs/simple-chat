import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle(
  () => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Poppins', sans-serif;
    }

    button,
    input {
      font-family: inherit;
      font-size: 1rem;
      border: none;
    }
  `
);
