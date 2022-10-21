import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  button{
    background-color: #ffc917;
    border: 1px solid black;
    padding: 1rem 1.5rem; 
    width: 12rem;
    margin: 0.5rem;
  }

  
`;
 
export default GlobalStyle;