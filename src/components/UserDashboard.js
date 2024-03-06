import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// UTILS
import { GET_USER_BOOKING_URL } from "../utils/constants";

// ASSETS
import appointmentLogo from "../assets/images/appointment-logo.png";
import appointmentCancelLogo from "../assets/images/cancel-logo.jpeg";
import arrowLogo from "../assets/images/arrow-logo.png";

// COMPONENTS
import Header from "./Header";
import DashboardScreen from "./DashboardScreen";
import UserDashboardBookings from "./UserDashboardBookings";

const UserDashboard = () => {
  const user = useSelector((store) => store?.user);
  const navigate = useNavigate();

  //  if user is not signed in rediret to home
  useEffect(() => {
    if (!user) {
      navigate("/user/signin");
    }
  }, []);

  const [bookingData, setBookingData] = useState(null);
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [refreshBooking, setRefreshBooking] = useState(false);

  useEffect(() => {
    getUserBookings();
  }, [showBookingDetails]);

  // get bookings
  const getUserBookings = async function () {
    try {
      const headers = {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `bearer ${user.token}`,
      };

      const response = await fetch(GET_USER_BOOKING_URL, {
        headers: headers,
      });
      const json = await response.json();
      setBookingData(json);
      console.log(json?.data?.length);
      console.log(json);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="w-full">
      <Header />

      {/*  dash board */}
      <div className="w-full  mx-auto  px-12 flex">
        {/*  left-side  dashboard side bar */}
        <div className=" w-3/12 h-[100vh] flex flex-col border-r border-black pr-12">
          <h1 className="py-8 text-3xl text-red-600 font-bold ">DASHBOARD</h1>

          <div className="flex flex-col gap-12">
            {/*  related to bookings */}
            <div>
              <div className="flex justify-btween items-center border border-black h-22">
                <img
                  alt="logo"
                  className="w-16 h-18"
                  src={appointmentLogo}
                ></img>
                <h1 className="text-2xl font-bold  py-2  px-2   ">Bookings</h1>
              </div>

              <ul className="flex flex-col gap-4 pt-8  px-8 text-slate-700">
                <div className="flex ">
                  <img alt="logo" className="w-8 h-6" src={arrowLogo}></img>
                  <li
                    onClick={() => setShowBookingDetails(false)}
                    className="cursor-pointer font-bold "
                  >
                    Overview
                  </li>
                </div>
                <div className="flex ">
                  <img alt="logo" className="w-8 h-6" src={arrowLogo}></img>
                  <li
                    onClick={() => setShowBookingDetails(true)}
                    className="cursor-pointer font-bold  "
                  >
                    Your Bookings
                  </li>
                </div>
              </ul>
            </div>

            {/*  related to cancel booking */}
            <div>
              <div className="flex justify-btween gap-1 items-center border border-black h-22">
                <img
                  alt="logo"
                  className="w-12 h-12 ml-2 px-2 py-2 my-2"
                  src={appointmentCancelLogo}
                ></img>
                <h1 className="text-2xl font-bold  py-2  px-2  ">
                  Cancellation
                </h1>
              </div>

              <ul className="flex flex-col gap-4 py-8  px-8 text-slate-700">
                <div className="flex ">
                  <img alt="logo" className="w-8 h-6" src={arrowLogo}></img>
                  <li className="cursor-pointer font-bold  ">CancelBooking</li>
                </div>
                <div className="flex ">
                  <img alt="logo" className="w-8 h-6" src={arrowLogo}></img>
                  <li className="cursor-pointer font-bold ">
                    Cancellation Procedure
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>

        {/*  what to show ? right -side summary page   * or *  each booking detail [booking cards] */}
        {showBookingDetails === true ? (
          <UserDashboardBookings />
        ) : (
          // right side summary page
          <div className="w-9/12  flex flex-col gap-32 bg-slate-50">
            {/*  summary */}
            <div className="w-10/12  mx-auto">
              <h1 className="py-8 text-3xl text-red-600 font-bold ">SUMMARY</h1>
              {/*  booking count and days left */}
              <div className=" gap-8 flex justify-between">
                {/*  booking count */}
                {/* <div className="shadow-xl shadow-red-300 text-white  p-8 w-6/12  bg-gradient-to-r from-[rgb(246,31,73)] via-[rgb(247,107,118)] to-[rgb(249,165,147)] ">
                  <h1 className="opacity-80">Bookings</h1>
                  <h1 className=" text-7xl opacity-80 ">
                    {bookingData?.data?.length}
                  </h1>
                  <h1 className="opacity-80">Booked from DoctorOrbit</h1>
                </div> */}
                {/*  days left */}
                {/* <div className="shadow-xl shadow-red-300 text-white  p-8 w-6/12  bg-gradient-to-r from-[rgb(120,106,231)] via-[rgb(153,100,222)] to-[rgb(191,94,212)] ">
                  <h1 className="opacity-80">Upcoming Booking on </h1>
                  {bookingData?.data?.length == 0 ? (
                    <h1 className="text-7xl opacity-80">-</h1>
                  ) : (
                    <h1 className=" text-7xl opacity-80 ">
                      {
                        bookingData?.data[0].appointmentDate
                          .split("-")[2]
                          .split("T")[0]
                      }
                      <span className="text-lg relative -top-10 ">th</span>
                    </h1>
                  )}

                  <h1 className="opacity-80">Booked from DoctorOrbit</h1>
                </div> */}
              </div>

              <DashboardScreen
                titleFirstScreen="Bookings"
                count={bookingData?.data?.length}
                titleFirstScreenEnd="Booked from DoctorOrbit"
                titleSecondScreen="Upcoming Booking on"
                count2={
                  bookingData?.data[0]?.appointmentDate
                    .split("-")[2]
                    .split("T")[0] + "th"
                }
                titleSecondScreenEnd="Booked from DoctorOrbit"
              />
            </div>
            {/*  external tags */}
            <div className="w-8/12  mx-auto  py-4 bg-white rounded-md">
              <h1 className="px-4 text-3xl text-slate-500 ">DETAILS</h1>

              <div className="border-b  border-b-black py-4 flex justify-around hover:bg-slate-50 ">
                <h1>1</h1>
                <h1>Your Email </h1>
                {bookingData && <h1>{bookingData?.data[0]?.patientEmail}</h1>}
              </div>
              <div className="border-b  border-b-black py-4 flex justify-around hover:bg-slate-50 ">
                <h1>2</h1>
                <h1>Your Mobile Number</h1>
                {bookingData && <h1>{bookingData?.data[0]?.patientMobile}</h1>}
              </div>
              <div className="border-b  border-b-black py-4 flex justify-around hover:bg-slate-50 ">
                <h1>3</h1>
                <h1>Facing Any issue</h1>
                <h1>yes/no</h1>
              </div>
              <div className="border-b  border-b-black py-4 flex justify-around hover:bg-slate-50 ">
                <h1>4</h1>
                <h1>Get Done More</h1>
                <h1>if yes?</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
