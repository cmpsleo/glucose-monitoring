import { ReactNode } from "react";
import { ThemeProvider as Provider } from "styled-components";

import { theme } from "./theme";
import { GlobalStyles } from "./global";

export type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <Provider theme={theme}>
      <GlobalStyles />
      {children}
    </Provider>
  );
}
