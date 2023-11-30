import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../views/admin/RootLayout";
import Home from "../views/home/Home";
import Preview from "../components/preview/Preview";
import Links from "../views/links/Links";
import Appearance from "../views/appearance/Appearance";
import Settings from "../views/settings/Settings";
import Analytics from "../views/analytics/Analytics";
import SignIn from "../components/auth/SignIn";
import Register from "../components/auth/Register";
import HomeLayout from "../views/home/HomeLayout";

const Comp = () => <>asd</>;

const RedirectToAdminHome = () => <Navigate to="preview/links" replace />;

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/:username",
    element: <Comp />,
  },
  {
    path: "/admin",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <RedirectToAdminHome />,
      },
      {
        path: "preview",
        element: <Preview />,
        children: [
          {
            path: "links",
            element: <Links />,
          },
          {
            path: "appearance",
            element: <Appearance />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "/admin/*",
        element: <RedirectToAdminHome />,
      },
    ],
  },
]);

export default router;
