import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Lexend Deca', sans-serif;
    text-decoration: none;
  }

  input, button {
    border: 2px solid black;
    padding: 8px 12px;
    font-size: 16px;
    margin: 5px;
  }
`

export default GlobalStyle