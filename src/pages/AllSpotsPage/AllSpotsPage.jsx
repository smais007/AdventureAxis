import { useState } from "react";
import { CiClock1, CiLocationArrow1 } from "react-icons/ci";
import { Link, useLoaderData } from "react-router-dom";

export default function AllSpotsPage() {
  const places = useLoaderData();
  const [sortOrder, setSortOrder] = useState("asc");

  const parseCost = (cost) => {
    if (cost === "Free" || cost === "free") {
      return 0;
    } else {
      return parseFloat(cost.replace(/[^0-9.-]+/g, ""));
    }
  };

  const handleSort = () => {
    if (sortOrder === "asc") {
      places.sort(
        (a, b) => parseCost(a.average_cost) - parseCost(b.average_cost)
      );
      setSortOrder("desc");
    } else {
      places.sort(
        (a, b) => parseCost(b.average_cost) - parseCost(a.average_cost)
      );
      setSortOrder("asc");
    }
  };



  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Cherished your memories
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Explore World
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Are you ready to embark on a journey of discovery, adventure, and
              cultural immersion? Welcome to Explore World, your gateway to
              unforgettable travel experiences across the globe.
            </p>
          </div>
        </div>

        {/* Sort dropdown */}
        <div className="flex justify-end mb-4">
          <select
            className="px-4 py-2 border border-gray-300 rounded-md"
            onChange={handleSort}
            value={sortOrder}
          >
            <option value="asc">Sort by Cost (High to Low)</option>
            <option value="desc">Sort by Cost ( Low to High)</option>
          </select>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {places.map((place) => (
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
                <Link to={`/details/${place._id}`}>
                  <button className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">
                    View Details
                    <span className="sr-only">
                      , {place.tourists_spot_name}
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


