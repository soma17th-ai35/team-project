import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

export const router = createBrowserRouter([
  { path: "/signup", Component: Signup },
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "profile", Component: Profile },
    ],
  },
]);
