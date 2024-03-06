import axios from "axios";
import { DELETE_BOOKING_URL } from "../utils/constants";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const BookingCard = ({
  patientName,
  patientMobile,
  appointmentDate,
  id,
  bookingDeleted,
}) => {
  // const [isBookingDeleted , setIsBookingDeleted ] = useState(false);

  const user = useSelector((store) => store?.user);

  const handleDeleteBooking = async function (id) {
    try {
      const headers = {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `bearer ${user?.token}`,
      };
      const response = await axios.delete(DELETE_BOOKING_URL + id, {
        headers: headers,
      });

      console.log(response);
      console.log(response?.data?.success);
      bookingDeleted();
      alert(response?.data?.message);
      // alert("please refresh page");
    } catch (error) {
      console.log("frm signin axios", error);
    }
  };

  return (
    <div className="w-5/12  flex flex-col items-center justify-center bg-slate-50 rounded-lg  ">
      <h1 className="bg-green-100 text-gray-700   py-2 px-4 mt-4">Booking</h1>
      <div className="w-9/12 mx-8 flex flex-col gap-2  py-4">
        <h1 className="w-9/12  rounded-md">Name : {patientName}</h1>
        <h1 className="w-9/12  rounded-md">Mobile Number : {patientMobile}</h1>
        <h1 className="w-9/12  rounded-md">Date : {appointmentDate}</h1>
      </div>
      <button
        onClick={() => handleDeleteBooking(id)}
        className="py-2 px-4 bg-red-300 text-white rounded-lg mb-2"
      >
        Cancel
      </button>
    </div>
  );
};

export default BookingCard;
