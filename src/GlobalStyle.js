import { createGlobalStyle } from "styled-components";
import background from "./images/currencies.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: 'Montserrat', sans-serif;
  background: center / cover no-repeat url(${background});
  background-attachment: fixed;
}
`;
