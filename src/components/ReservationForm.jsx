import React, { useState } from "react";
import cardImg from "../card.jpg";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const countryCodes = require("country-codes-list");

const ReservationForm = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const myCountryCodesObject = countryCodes.customList(
    "countryCode",
    "+{countryCallingCode} {countryNameEn} "
  );
  const myCountryCodesArray = Object.values(myCountryCodesObject);
  const countryOptions = myCountryCodesArray.map((code, key) => ({
    value: code,
    label: code,
  }));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    country: "+49 Germany",
    guestCount: 2,
    date: "",
    time: "12:00",
    comment: "",
  });

  const handleCountryChange = (selectedOption) => {
    setFormData({
      ...formData,
      country: selectedOption.value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    localStorage.setItem("reserve", JSON.stringify(formData));
    setAlert(true);
    setTimeout(() => {
      navigate("/success");
    }, 1000);

  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full bg-white rounded-lg shadow-lg flex">
        <div className="p-6 w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            <p> Reserve Your Table</p>
            <span className="text-sm">Your table awaits!</span>
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 space-y-4"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
              ></input>
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <div className="relative flex space-x-2">
                <Select
                  options={countryOptions}
                  value={{ value: formData.country, label: formData.country }}
                  onChange={handleCountryChange}
                  className="w-1/4 focus:ring-blue-500 focus:border-blue-500 rounded-sm"
                />

                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="123-456-7890"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="guestCount"
              >
                Number of Guests
              </label>
              <select
                name="guestCount"
                className="input-field"
                value={formData.guestCount}
                onChange={handleInputChange}
              >
                {[...Array(11).keys()].slice(2).map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="date"
              >
                Reservation Date
              </label>

              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 cursor-pointer "
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="time"
              >
                Reservation Time
              </label>

              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5  cursor-pointer"
                placeholder="123-456-7890"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="comment"
              >
                Comment (Optional)
              </label>

              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Any Other Requirements...."
              />
            </div>
            {alert && (
              <div
                id="alert-border-3"
                class="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-400"
                role="alert"
              >
                <svg
                  class="flex-shrink-0 w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div class="ml-3 text-sm font-medium">
                  Successfully Reserved. Thank you!!
                </div>
                <button
                  onClick={() => setAlert(false)}
                  type="button"
                  class="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8"
                  data-dismiss-target="#alert-border-3"
                  aria-label="Close"
                >
                  <span class="sr-only">Dismiss</span>
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
            )}
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full w-full focus:outline-none focus:ring focus:ring-blue-300 cursor-pointer"
                type="submit"
              >
                Reserve Table
              </button>
            </div>
          </form>
        </div>
        <div
          className="w-full bg-cover bg-center hidden md:flex"
          style={{ backgroundImage: `url(${cardImg})` }}
        ></div>
      </div>
    </div>
  );
};

export default ReservationForm;
