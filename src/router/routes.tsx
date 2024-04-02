import Layout from "@/components/layout";
import { AboutPage, HomePage } from "@/pages";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
];

export default routes;
