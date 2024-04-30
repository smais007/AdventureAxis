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
import CountyCardPage from "../pages/CountryCardPage/CountryCardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("https://adventure-axis-server.vercel.app/places"),
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
        loader: () => fetch("https://adventure-axis-server.vercel.app/places"),
      },

      {
        path: "/country",
        element: <CountyCardPage></CountyCardPage>,
        loader: async ({ request }) => {
          const url = new URL(request.url);

          const country = new URLSearchParams(url.search).get("country");

          const response = await fetch(
            `https://adventure-axis-server.vercel.app/places?country=${country}`
          );
          const data = await response.json();

          // Filter the data based on the country

          return data;
        },
      },

      // {
      //   path: "/country/id",
      //   element: <CountyCardPage></CountyCardPage>,
      //   loader: async () => {
      //     const response = await fetch("https://adventure-axis-server.vercel.app/places");
      //     const data = await response.json();

      //     // Filter the data based on the country
      //     const filteredData = data.filter(
      //       (place) => place.country === "Indonesia"
      //     );

      //     return filteredData;
      //   },
      // },

      // {
      //   path: "/country/id",
      //   element: <CountyCardPage></CountyCardPage>,
      //   loader: () => fetch("https://adventure-axis-server.vercel.app/places"),
      // },

      {
        path: "/update-tourists-spot/:id",
        element: (
          <PrivateRoutes>
            <UpdateSpots></UpdateSpots>
          </PrivateRoutes>
        ),
        loader: ({ params }) => {
          console.log(params, "from rou");
          return fetch(
            `https://adventure-axis-server.vercel.app/places/${params.id}`
          );
        },
      },
      {
        path: "/my-list",
        element: (
          <PrivateRoutes>
            <MyList></MyList>
          </PrivateRoutes>
        ),
        loader: () => fetch("https://adventure-axis-server.vercel.app/places"),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://adventure-axis-server.vercel.app/singelPlace/${params.id}`),
      },
    ],
  },
]);
