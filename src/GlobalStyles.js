import { createGlobalStyle } from "styled-components";
import { theme } from "./utils/theme";
import Grotesk from "./assets/fonts/grotesk/grotesk.otf";
import GroteskBold from "./assets/fonts/grotesk/grotesk-bold.otf";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Anton&family=Fascinate+Inline&family=Inter:wght@500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Anton&family=Fascinate+Inline&family=Inter:wght@500;700&display=swap');

    @font-face {
      font-family: Grotesk;
      src:url(${Grotesk});
    }
    @font-face {
      font-family: "Grotesk Bold";
      src:url(${GroteskBold});
    }

  body {
    background: ${({ theme }) => theme.colors.acyraBlack};
    color: ${({ theme }) => theme.colors.acyraWhite};
    font-family: ${({ theme }) => theme.font.primary};
  }

  body, #root {
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  
  `

