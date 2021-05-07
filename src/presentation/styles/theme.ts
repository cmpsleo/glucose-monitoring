export const theme = {
  font: {
    family:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    size: {
      base: "62.5%",
      medium: "1.6rem",
    },
  },
  layers: {
    base: 10,
  },
  colors: {
    page: {
      background: "#fbfcfe",
    },
    pallete: {
      primary: "#f00",
      secondary: "#ff0",
    },
  },
} as const;

export type Theme = typeof theme;
