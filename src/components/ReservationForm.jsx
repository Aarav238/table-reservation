import React, { useState } from "react";
import cardImg from "../card.jpg";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const countryCodes = require("country-codes-list");

const ReservationForm = () => {
  const navigate = useNavigate();
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
    navigate("/success")
    
    // Add logic to handle the form submission (e.g., send data to a server).
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
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Any Other Requirements...."
              />
            </div>
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
