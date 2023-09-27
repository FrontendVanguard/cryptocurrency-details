import { createGlobalStyle } from "styled-components";

import { colors } from "./constants/colors";

const GlobalStyle = createGlobalStyle`

   body {
    margin: 0;
    background-color: ${colors.DARK_LIGHT_400};
    color: ${colors.GRAY_100};
    font-family: Roboto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
