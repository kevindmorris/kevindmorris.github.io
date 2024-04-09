import Layout from "@/components/layout";
import { HomePage } from "@/pages";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];

export default routes;
