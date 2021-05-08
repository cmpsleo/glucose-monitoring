import { ThemeProvider, theme } from "@/presentation/styles";

export const parameters = {
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: theme.colors.page.background,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
