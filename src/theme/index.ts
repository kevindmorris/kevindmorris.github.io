import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      gray: {
        50: "#F5F5F5",
        100: "#A89F8E",
        200: "#6E7B8B",
        300: "#333333",
      },
      blue: {
        50: "#1F2A44",
      },
      red: {
        50: "#800020",
      },
      green: {
        50: "#556B2F",
      },
      purple: {
        50: "#4E2A5F",
      },
    },
  },
  styles: { global: { body: { bg: "brand.gray.50" } } },
});

export default theme;
