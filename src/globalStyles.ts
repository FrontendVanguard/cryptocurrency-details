import { grey, purple } from "@mui/material/colors";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

   body {
    margin: 0;
    margin: 0;

    background-color: ${grey[100]};
    color: ${grey[900]};
    font-family: 'Roboto', sans-serif;

    .app {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GlobalStyle;
