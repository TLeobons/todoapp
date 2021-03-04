import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: background .5s ease-in-out color 1s ease-in-out;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  a {
    text-decoration:none;
    color: currentColor;
  }

  li {
    list-style: none;
  }
  
  button {
    border: none;
  }
`

export default GlobalStyle