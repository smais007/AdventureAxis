import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import HomePage from "../pages/HomePage/HomePage";
import LogInPage from "../pages/LogInPage/LogInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AddSpotsPage from "../pages/AddSpots/AddSpotsPage";
import AllSpotsPage from "../pages/AllSpotsPage/AllSpotsPage";
import MyList from "../pages/MyList/MyList";
import UpdateSpots from "../pages/UpdateSpots/UpdateSpots";
import Contact from "../pages/Contact/Contact";
import Details from "../pages/Details/Details";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch('http://localhost:5000/places'),
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
        element: (
          <PrivateRoutes>
            <AddSpotsPage></AddSpotsPage>
          </PrivateRoutes>
        ),
      },
      {
        path: "/all-tourists-spot",
        element: <AllSpotsPage></AllSpotsPage>,
        loader: () => fetch("http://localhost:5000/places"),
      },
      {
        path: "/update-tourists-spot/:id",
        element: (
          <PrivateRoutes>
            <UpdateSpots></UpdateSpots>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/places/${params.id}`),
      },
      {
        path: "/my-list",
        element: (
          <PrivateRoutes>
            <MyList></MyList>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/places"),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/details",
        element: <Details></Details>,
      },
    ],
  },
]);
