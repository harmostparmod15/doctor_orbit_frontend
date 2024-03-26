import axios from "axios";
import { DELETE_BOOKING_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const BookingCard = ({
  showCancelBtn,
  patientName,
  patientMobile,
  appointmentDate,
  id,
  bookingDeleted,
}) => {
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

      bookingDeleted();
      alert(response?.data?.message);
    } catch (error) {
      alert(error?.data?.error);
    }
  };

  const dateArr = appointmentDate.split("T");
  appointmentDate = dateArr[0];

  return (
    <div className="w-5/12  flex flex-col items-center justify-center bg-slate-50 rounded-lg  ">
      <h1 className="bg-green-100 text-gray-700   py-2 px-4 mt-4">Booking</h1>
      <div className="w-9/12 mx-8 flex flex-col gap-2  py-4">
        <h1 className="w-9/12  rounded-md">Name : {patientName}</h1>
        <h1 className="w-9/12  rounded-md">Mobile Number : {patientMobile}</h1>
        <h1 className="w-9/12  rounded-md">Date : {appointmentDate}</h1>
      </div>
      {showCancelBtn && (
        <button
          onClick={() => handleDeleteBooking(id)}
          className="py-2 px-4 bg-red-300 text-white rounded-lg mb-2"
        >
          Cancel
        </button>
      )}
      {/* <button
        onClick={() => handleDeleteBooking(id)}
        className="py-2 px-4 bg-red-300 text-white rounded-lg mb-2"
      >
        Cancel
      </button> */}
    </div>
  );
};

export default BookingCard;
