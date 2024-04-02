import router from "@/router";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
