/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CountryCard() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://adventure-axis-server.vercel.app/country"
        );
        if (response.ok) {
          const data = await response.json();
          setCountryData(data);
        } else {
          console.error("Failed to fetch country data");
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div>
          <div className="bg-white px-10  sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Enjoy with your love
              </p>
              <h2 className="mt-2 text-xl pb-10 lg:text-2xl font-bold tracking-tight text-gray-900 sm:">
                Find your best destinations
              </h2>
            </div>
          </div>
        </div>
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {countryData.map((data) => (
            <div
              key={data._id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <img
                  src={data.image}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={data.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {data.country_Name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{data.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm italic text-gray-500">{data.options}</p>
                  <p className="text-base font-medium text-gray-900">
                    {data.a}
                  </p>
                </div>
                <div>
                  <div className="mt-6">
                    <Link to={data.url}>
                      <button className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">
                        View Details
                        <span className="sr-only"></span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
