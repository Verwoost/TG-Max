import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: radial-gradient(circle, rgba(161,158,241,1) 0%, rgba(76,86,212,1) 100%);
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