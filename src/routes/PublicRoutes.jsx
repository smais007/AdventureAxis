import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import HomePage from "../pages/HomePage/HomePage";
import LogInPage from "../pages/LogInPage/LogInPage";
import SignUpPage from "../pages/SignInPage/SignInPage";
import AddSpotsPage from "../pages/AddSpots/AddSpotsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/sign-up",
        element: <SignUpPage></SignUpPage>,
      },
      {
        path: "/log-in",
        element: <LogInPage></LogInPage>,
      },
      {
        path: "/add-tourists-spot",
        element: <AddSpotsPage></AddSpotsPage>,
      },
    ],
  },
]);
