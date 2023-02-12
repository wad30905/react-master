import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Root from "./Root";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
])

export default router;