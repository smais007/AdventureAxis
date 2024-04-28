// /* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

// import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../Context/AuthProvider";

// const MyListCard = ({ place }) => {
//   const {
//     _id,
//     tourists_spot_name,
//     location,
//     seasonality,
//     average_cost,
//     travel_time,
//     totaVisitorsPerYear,
//     name,
//     email,
//   } = place;

//   console.log(_id);

//   const { user } = useContext(AuthContext);
//   const [currentUserEmail, setCurrentUserEmail] = useState(null);

//   useEffect(() => {
//     setCurrentUserEmail(user.email);
//   }, [user.email]);

//   // setCurrentUserEmail(user.email);
//   // console.log(currentUserEmail);

//   const currentDbUser = currentUserEmail === email;

const handleDelete = (_id) => {
  console.log(_id);
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
      fetch(`http://localhost:5000/places/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
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

//   return (
//     <>
//       {currentDbUser && (
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="sm:flex sm:items-center">
//             <div className="sm:flex-auto">
//               <h1 className="text-base font-semibold leading-6 text-gray-900">
//                 Users
//               </h1>
//               <p className="mt-2 text-sm text-gray-700">
//                 A list of all the users in your account including their name,
//                 title, email and role.
//               </p>
//             </div>
//             <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
//               <button
//                 type="button"
//                 className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Add Spots
//               </button>
//             </div>
//           </div>
//           <div className="-mx-4 mt-8 sm:-mx-0">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th
//                     scope="col"
//                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
//                   >
//                     Spots Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
//                   >
//                     Location
//                   </th>
//                   <th
//                     scope="col"
//                     className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
//                   >
//                     average_cost
//                   </th>
//                   <th
//                     scope="col"
//                     className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
//                   >
//                     seasonality
//                   </th>
//                   <th
//                     scope="col"
//                     className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
//                   >
//                     travel_time
//                   </th>
//                   <th
//                     scope="col"
//                     className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
//                   >
//                     totaVisitorsPerYear
//                   </th>
//                   <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
//                     <span className="sr-only">Edit</span>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200 bg-white">
//                 <tr>
//                   <td className="w-full max-w-0 py-4 p//   const { user } = useContext(AuthContext);
//   const [currentUserEmail, setCurrentUserEmail] = useState(null);

//   useEffect(() => {
//     setCurrentUserEmail(user.email);
//   }, [user.email]);

//   // setCurrentUserEmail(user.email);
//   // console.log(currentUserEmail);

//   const currentDbUser = currentUserEmail === email;l-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
//                     {tourists_spot_name}
//                     <dl className="font-normal lg:hidden">
//                       <dt className="sr-only">Title</dt>
//                       <dd className="mt-1 truncate text-gray-700">{}</dd>
//                       <dt className="sr-only sm:hidden">Email</dt>
//                       <dd className="mt-1 truncate text-gray-500 sm:hidden">
//                         {location}
//                       </dd>
//                       <dd className="mt-1 truncate text-gray-500 sm:hidden">
//                         {average_cost}
//                       </dd>
//                       <dd className="mt-1 truncate text-gray-500 sm:hidden">
//                         {seasonality}
//                       </dd>
//                       <dd className="mt-1 truncate text-gray-500 sm:hidden">
//                         {travel_time}
//                       </dd>
//                       <dd className="mt-1 truncate text-gray-500 sm:hidden">
//                         {totaVisitorsPerYear}
//                       </dd>
//                     </dl>
//                   </td>
//                   <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
//                     {location}
//                   </td>
//                   <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
//                     {average_cost}
//                   </td>
//                   <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
//                     {seasonality}
//                   </td>
//                   <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
//                     {travel_time}
//                   </td>
//                   <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
//                     {totaVisitorsPerYear}
//                   </td>
//                   <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
//                     <div className="flex gap-8 justify-end">
//                       <Link
//                         to={`/update-tourists-spot/${_id}`}
//                         className="text-indigo-600 hover:text-indigo-900"
//                       >
//                         Update<span className="sr-only">, {name}</span>
//                       </Link>
//                       <button
//                         onClick={() => handleDelete(_id)}
//                         className="text-indigo-600 hover:text-indigo-900"
//                       >
//                         Delete<span className="sr-only">, {name}</span>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MyListCard;

// MyListCard;

export default function MyListCard() {
  const places = useLoaderData();
  const { user } = useContext(AuthContext);
  const [currentUserEmail, setCurrentUserEmail] = useState(null);

  useEffect(() => {
    setCurrentUserEmail(user.email);
  }, [user.email]);
  console.log(currentUserEmail);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Users
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
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
                        <button
                          onClick={() => {
                            const _id = place._id; // Replace with actual ID
                            console.log(_id);
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
                                fetch(`http://localhost:5000/places/${_id}`, {
                                  method: "DELETE",
                                })
                                  .then((res) => res.json())
                                  .then((data) => {
                                    console.log(data);
                                    if (data.deletedCount > 0) {
                                      Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success",
                                      });
                                    }
                                  });
                              }
                            });
                          }}
                        >
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
