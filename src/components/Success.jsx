import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const reserveData = JSON.parse(localStorage.getItem("reserve"));
  const handleClick = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const reserveData = JSON.parse(localStorage.getItem("reserve"));
    if (!reserveData) {
      console.log("Nothin");
      navigate("/");
    }
  }, [navigate, reserveData]);

  return (
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        Thank You For Taking Our Service!!
      </h5>
      <p class="mb-3 font-semibold text-gray-700 ">
        Here are the details of your reservation:{" "}
      </p>
      {reserveData && (
        <>
          <p className="font-semibold">
            Name: <span className="font-bold ">{reserveData.name}</span>
          </p>
          <p className="font-semibold">
            Email: <span className="font-bold ">{reserveData.email}</span>
          </p>
          <p className="font-semibold">
            Total Guests:{" "}
            <span className="font-bold ">{reserveData.guestCount}</span>
          </p>
          <p className="font-semibold">
            Contact:{" "}
            <span className="font-bold ">  {reserveData.country.split(" ")[0] + "-" +  reserveData.phoneNumber}</span>
          </p>
          <p className="font-semibold">
            Date: <span className="font-bold ">{reserveData.date}</span>
          </p>
        </>
      )}

      <p
        onClick={handleClick}
        class="mt-2 cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Reserve Again
        <svg
          class="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </p>
    </div>
  );
};

export default Success;
