import {createBrowserRouter, Outlet} from "react-router-dom";
import About from "./pages/About";
import Root from "./Root";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import Followers from "./components/molecules/Followers";
import Following from "./components/molecules/Following";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <NotFound />
      },
      {
        path: "about",
        element: <About />,
        errorElement: <NotFound />
      },
      {
        path: "user",
        element: <User />,
        children: [
           {
            path: "followers",
            element: <Followers />,
            errorElement: <NotFound />
           },
           {
            path: "following",
            element: <Following />,
            errorElement: <NotFound />
           },
        ]
      }
    ],
    errorElement: <NotFound />
  }
])

export default router;