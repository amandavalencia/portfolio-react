import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Cv } from "./pages/Cv";
import { Projects } from "./pages/Projects";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/cv",
          element: <Cv />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);
