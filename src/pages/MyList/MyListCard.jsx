// /* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

export default function MyListCard() {
  const [places, setPlaces] = useState(useLoaderData());
  // const places = useLoaderData();
  const { user } = useContext(AuthContext);
  const [currentUserEmail, setCurrentUserEmail] = useState(null);

  useEffect(() => {
    setCurrentUserEmail(user.email);
  }, [user.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://adventure-axis-server.vercel.app/places/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              // Remove the deleted item from places array
              setPlaces(places.filter((place) => place._id !== _id));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto pt-20">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            My Added places
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all place in your account including name, title, email
            etc.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <a href="/add-tourists-spot">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add new place
            </button>
          </a>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                Spots Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Average Cost
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Duration
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Session
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Email
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span className="flex justify-end">Action</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {places.map(
              (place) =>
                place.email === user.email && (
                  <tr key={place._id}>
                    <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                      {place.tourists_spot_name}
                      <dl className="font-normal lg:hidden">
                        <dt className="sr-only">Title</dt>
                        <dd className="mt-1 truncate text-gray-700">
                          <span className="text-gray-700 font-medium">
                            {" "}
                            Avg Cost:
                          </span>{" "}
                          {place.average_cost}
                        </dd>
                        <dt className="sr-only sm:hidden">Email</dt>
                        <dd className="mt-1 truncate text-gray-500 sm:hidden">
                          <span className="text-gray-700 font-medium">
                            {" "}
                            Duration:
                          </span>{" "}
                          {place.travel_time}
                        </dd>
                      </dl>
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      {place.average_cost}
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                      {place.travel_time}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {place.seasonality}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {place.email}
                    </td>
                    <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <div className="flex flex-col md:flex-row justify-end gap-5">
                        <Link
                          to={`/update-tourists-spot/${place._id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Update<span className="sr-only"> {place.name}</span>
                        </Link>
                        <button onClick={() => handleDelete(place._id)}>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
