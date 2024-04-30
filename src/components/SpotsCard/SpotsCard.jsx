import { useLoaderData } from "react-router-dom";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import { CiClock1, CiLocationArrow1 } from "react-icons/ci";

export default function SpotsCard() {
  const places = useLoaderData();

  const firstEight = places.slice(0, 8);

  return (
    <div>
      <HeaderTitle></HeaderTitle>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-gray-900">
            Explor our latest places
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {firstEight.map((place) => (
              <div key={place._id}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={place.image}
                      alt={place.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {place.tourists_spot_name}
                    </h3>
                    <div className="flex justify-between">
                      <p className="mt-1 text-sm text-gray-500 flex items-center gap-1">
                        <CiLocationArrow1></CiLocationArrow1>
                        {place.location}
                      </p>
                      <p className="mt-1 text-sm text-gray-500  flex items-center gap-1">
                        <CiClock1></CiClock1>
                        {place.travel_time}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                      {place.average_cost}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={place.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    View Details
                    <span className="sr-only">
                      , {place.tourists_spot_name}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
