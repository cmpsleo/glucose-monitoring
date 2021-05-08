export const theme = {
  font: {
    family:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    size: {
      base: "62.5%",
      small: "1.2rem",
      medium: "1.6rem",
      large: "2rem",
    },
    weight: {
      bold: 700,
    },
  },
  layers: {
    base: 10,
  },
  colors: {
    page: {
      background: "#f8f9fd",
    },
    pallete: {
      primary: "#009afa",
      secondary: "#faaa0d",
      success: "#39e586",
      warning: "#f3a75e",
      danger: "#e05d69",
    },
    text: {
      low: "#3f486b",
      default: "#20253a",
    },
  },
} as const;

export type Theme = typeof theme;
