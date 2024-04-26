import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import HomePage from "../pages/HomePage/HomePage";
import LogInPage from "../pages/LogInPage/LogInPage";
import SignUpPage from "../pages/SignInPage/SignInPage";
import AddSpotsPage from "../pages/AddSpots/AddSpotsPage";
import AllSpotsPage from "../pages/AllSpotsPage/AllSpotsPage";
import MyList from "../pages/MyList/MyList";
import UpdateSpots from "../pages/UpdateSpots/UpdateSpots";
import Contact from "../pages/Contact/Contact";
import Details from "../pages/Details/Details"

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
      {
        path: "/all-tourists-spot",
        element: <AllSpotsPage></AllSpotsPage>,
      },
      {
        path: "/update-tourists-spot",
        element: <UpdateSpots></UpdateSpots>,
      },
      {
        path: "/my-list",
        element: <MyList></MyList>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/details",
        element: <Details></Details>
      }
    ],
  },
]);
