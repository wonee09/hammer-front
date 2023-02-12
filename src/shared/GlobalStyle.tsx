import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline : none;
    font-family: 'Noto Sans KR', sans-serif;
  }

  body {
    overflow: hidden;
    display: flex;
    justify-content: center;
  }

  html {
    font-size: 10px;
  }

  #root {
    width: 390px;
    height: 100vh;
    border: 1px solid red;

  }
`;

export default GlobalStyle;
