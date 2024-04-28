import { useState } from "react";
import { toast } from "sonner";

const AddSpotsPage = () => {
  const [region, setRegion] = useState("");

  // Function to handle region selection
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };
  const handleAddPlace = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const country = form.country.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const seasonality = form.seasonality.value;
    const average_cost = form.average_cost.value;
    const travel_time = form.travel_time.value;
    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const region = form.region.value;


    const name = form.name.value;
    const email = form.email.value;

    const addPlace = {
      image,
      tourists_spot_name,
      country,
      region,
      location,
      short_description,
      seasonality,
      average_cost,
      travel_time,
      totaVisitorsPerYear,
      name,
      email,
    };
    // Sending data to localhost
    fetch("http://localhost:5000/places", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addPlace),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("New Place has been added");
        }
      });
    console.log(addPlace);
  };
  return (
    <>
      <div className="bg-white px-6  py-10 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            Get the help you need
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Add New Tourist Spots
          </h2>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <form onSubmit={handleAddPlace}>
          <div className="space-y-12">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Add New Spots
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>

              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Image URL
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                        http://
                      </span> */}
                      <input
                        type="text"
                        name="image"
                        id="image"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="www.example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tourists Spot Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="tourists_spot_name"
                      name="tourists_spot_name"
                      type="text"
                      autoComplete="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Region
                  </label>
                  <div className="mt-2">
                    <select
                      id="region"
                      name="region"
                      autoComplete="region-name"
                      onChange={handleRegionChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Region</option>
                      <option value="Southeast Asia">Southeast Asia</option>
                      <option value="Europe">Europe</option>
                      <option value="America">America</option>
                      <option value="Africa">Africa</option>
                      <option value="Middle East">Middle East</option>
                      <option value="Central Asia">Central Asia</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      {region === "Southeast Asia" ? (
                        <>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Vietnam">Vietnam</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Malaysia">Malaysia</option>
                        </>
                      ) : region === "Europe" ? (
                        <>
                          <option value="Germany">Germany</option>
                          <option value="France">France</option>
                          <option value="Italy">Italy</option>
                          <option value="Spain">Spain</option>
                          <option value="England">England</option>
                          <option value="Switzerland">Switzerland</option>
                        </>
                      ) : region === "America" ? (
                        <>
                          <option value="United States of America ">
                            United States of America
                          </option>
                          <option value="Canada">Canada</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Argentina">Argentina</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Peru">Peru</option>
                        </>
                      ) : region === "Africa" ? (
                        <>
                          <option value="Nigeria">Nigeria</option>
                          <option value="South Africa">South Africa</option>
                          <option value="Tanzania">Tanzania</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Morocco">Morocco</option>
                          <option value="Egypt">Egypt</option>
                        </>
                      ) : region === "Middle East" ? (
                        <>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="United Arab Emirates">
                            United Arab Emirates
                          </option>
                          <option value="Jordan">Jordan</option>
                          <option value="Iran">Iran</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Kuwait">Kuwait</option>
                        </>
                      ) : region === "Central Asia" ? (
                        <>
                          <option value="Kazakhstan">Kazakhstan</option>
                          <option value="Uzbekistan">Uzbekistan</option>
                          <option value="Turkmenistan">Turkmenistan</option>
                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                          <option value="Mongolia">Mongolia</option>
                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                        </>
                      ) : (
                        <option>Please select a region first</option>
                      )}
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Location
                  </label>
                  <div className="mt-2">
                    <input
                      id="location"
                      name="location"
                      type="text"
                      autoComplete="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Short Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="short_description"
                      name="short_description"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about yourself.
                  </p>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Seasonality
                  </label>
                  <div className="mt-2">
                    <input
                      id="seasonality"
                      name="seasonality"
                      type="text"
                      autoComplete="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Average Cost
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="average_cost"
                      id="average_cost"
                      autoComplete="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Travel Time
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="travel_time"
                      id="travel_time"
                      autoComplete="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tota Visitors Per Year
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="totaVisitorsPerYear"
                      id="totaVisitorsPerYear"
                      autoComplete="number"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Information for who added this place
                </p>
              </div>

              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              // onSubmit={handleAddPlace}
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Place
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddSpotsPage;
