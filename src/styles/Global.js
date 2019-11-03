import { createGlobalStyle } from "styled-components";
import Background from "../assets/background.jpg";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #000 url(${Background}) no-repeat;
  background-size: cover;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
#root {
  height: 100%;
}

`;
export default GlobalStyle;
