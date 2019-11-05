import { createGlobalStyle } from "styled-components";
import "rc-slider/assets/index.css";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #181818;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  text-rendering: optimizeLegibility;
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
