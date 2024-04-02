import Layout from "@/components/layout";
import { EducationPage, ExperiencePage, HomePage, ProjectsPage } from "@/pages";

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
        path: "/experience",
        element: <ExperiencePage />,
      },
      {
        path: "/education",
        element: <EducationPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
    ],
  },
];

export default routes;
