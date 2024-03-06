import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// UTILS
import { checkValidBookingDate } from "../utils/helpers";
import { addUser } from "../utils/userSlice";

const Booking = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  // state vairables
  const [isValidBookingDate, setIsValidBookingDate] = useState(true);

  // refernce variables
  const patientName = useRef(null);
  const patientAge = useRef(null);
  const patientMobile = useRef(null);
  const appointmentDate = useRef(null);

  useEffect(() => {
    if (!user) {
      navigate("/user/signup");
    }
  });

  // booking api call
  const handleBooking = async function (e) {
    e.preventDefault();

    // checking if booking date is valid or not
    const isValidDate = checkValidBookingDate(appointmentDate?.current?.value);
    isValidDate ? setIsValidBookingDate(true) : setIsValidBookingDate(false);

    // checking if booking data is valid or not
    if (
      !patientName?.current?.value ||
      !patientAge?.current?.value ||
      !patientMobile?.current?.value ||
      !appointmentDate?.current?.value
    ) {
      alert("fill the from");
      return;
    }

    if (!isValidDate) return;

    dispatch(
      addUser({
        ...user,
        bookingData: {
          patientName: patientName?.current?.value,
          patientAge: patientAge?.current?.value,
          patientMobile: patientMobile?.current?.value,
          doctorId: user?.doctorId,
          appointmentDate: appointmentDate?.current?.value,
        },
      })
    );

    navigate("/payment");
  };

  return (
    <div className="  border border-green-400">
      <h1 className="py-4 text-2xl text-black bg-green-200 text-center  ">
        {" "}
        To book your appintment please fill the form
      </h1>

      {/*   */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Make an Appointment
          </h2>
        </div>

        {/*  booking form */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            {/*  patient name */}
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Patient Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  ref={patientName}
                  type="test"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* patient age */}
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Patient Age
              </label>
              <div className="mt-2">
                <input
                  ref={patientAge}
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {/* {!isValidEmail && <h1 className="text-red-700 ">**email not valid**</h1>  }  */}
              </div>
            </div>

            {/* patient mobile */}
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Patient Mobile
                </label>
              </div>
              <div className="mt-2">
                <input
                  ref={patientMobile}
                  type="tel"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {/* {!isValidPassword && <h1 className="text-red-700 ">**weak password**</h1> } */}
              </div>
            </div>

            {/* appointment date */}
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Appointment Date
                </label>
              </div>
              <div className="mt-2">
                <input
                  ref={appointmentDate}
                  type="date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {/* {!isValidPassword && <h1 className="text-red-700 ">**weak password**</h1> } */}
              </div>
              {/*  if booking date is in past */}
              {!isValidBookingDate && (
                <h1 className="text-red-700 ">**invalid booking date**</h1>
              )}
            </div>

            {/*  submit button */}
            <div>
              <button
                onClick={handleBooking}
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              >
                Book now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
