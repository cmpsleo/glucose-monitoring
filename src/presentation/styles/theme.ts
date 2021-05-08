export const theme = {
  font: {
    family:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    size: {
      base: "62.5%",
      medium: "1.6rem",
      large: "2.2rem",
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
      primary: "#009afa",
      secondary: "#faaa0d",
      success: "#39e586",
      warning: "#f3a75e",
      danger: "#e05d69",
    },
  },
} as const;

export type Theme = typeof theme;
