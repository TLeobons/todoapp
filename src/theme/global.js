import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  a {
    text-decoration:none;
  }
  li {
    list-style: none;
  }
`
export const lightTheme = {
  background: "#fff"
}
export const darkTheme = {
  background: "#ccc"
}

export default GlobalStyle