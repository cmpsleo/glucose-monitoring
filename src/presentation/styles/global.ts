import { createGlobalStyle, css } from "styled-components";

import reset from "./reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  ${({ theme }) => css`
    html {
      height: 100%;

      font-size: ${theme.font.size.base};
    }

    body {
      min-height: 100%;

      font-family: ${theme.font.family};
      font-size: ${theme.font.size.medium};

      background-color: ${theme.colors.page.background};
    }
  `}
`;
