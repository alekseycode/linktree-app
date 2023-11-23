import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";
import Home from "../views/user-page/Home";
import Preview from "../components/preview/Preview";
import Links from "../views/links/Links";
import Appearance from "../views/appearance/Appearance";
import Settings from "../views/settings/Settings";
import Analytics from "../views/analytics/Analytics";
import SignIn from "../components/auth/SignIn";
import Register from "../components/auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
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
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
