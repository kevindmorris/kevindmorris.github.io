import router from "@/router";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
