import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle(
  () => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scrollbar-width: thin;
      scrollbar-color: #b8b8b8 #ededed;
      &::-webkit-scrollbar {
        width: 12px;
      }
      &::-webkit-scrollbar-track {
        background: #ededed;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #b8b8b8;
        border-radius: 0px;
      }
    }

    body {
      font-family: 'Poppins', sans-serif;
    }

    button,
    textarea,
    input {
      font-family: inherit;
      font-size: 1rem;
      border: none;
    }

    button {
      cursor: pointer;
    }
  `
);
