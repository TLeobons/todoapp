import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: background .5s ease-in-out color 1s ease-in-out;
  }

  @font-face {
    src: url("assets/fonts/OpenSans-Regular.ttf") format("ttf");
    font-family: "OpenSans";
    font-display: optional;
  }

  :root{
    --primary-light: #663399;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-size: 62.5%;
    line-height:1.5;
  }

  h1, h2{
    text-transform: capitalize
  }

  ::placeholder {
    color: #cdcbd7;
  }

  ::selection{
    background-color:pink;
  }

  a {
    color: currentColor;
    text-decoration:none;
  }

  button {
    border: none;
    border-radius: 5px;
    padding: .5rem .7rem;
    outline: none;
  }

  button:active{
    outline: initial;
  }

  input {
    border-color: #7db0fb;
    ${'' /* box-shadow: 0 0 0 4px rgba(24, 117, 225, 0.25); */}
    outline: none;
    transition:.15s;
  }

  li {
    list-style: none;
  }

  p{
    text-align:left;
    width: 50ch;
  }

  p + p {
    text-indent: 1rem;
  }

  textarea {
    resize:none;
  }
  
`

export default GlobalStyle