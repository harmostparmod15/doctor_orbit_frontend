import { useSelector } from "react-redux";

import { useState, useEffect } from "react";

import BookingCard from "./BookingCard";

import { GET_USER_BOOKING_URL } from "../utils/constants";

import { Link, useNavigate } from "react-router-dom";

//  shimmer card component
const ShimmerBooking = () => {
  return (
    <div className="mx-auto w-4/12 border border-green-500 animate-pulse flex flex-col items-center bg-gradient-to-r from-slate-50 to-emerald-50  ">
      <h1 className="bg-green-100  py-2 px-4 mt-4">Booking</h1>

      <div className="w-5/12  flex flex-col justify-start items-start  gap-4 py-4">
        <h1 className="w-9/12 py-4 bg-[rgb(223,221,223)] rounded-md"></h1>

        <h1 className="w-9/12 py-4  bg-[rgb(223,221,223)] rounded-md"></h1>

        <h1 className="w-9/12 py-4  bg-[rgb(223,221,223)] rounded-md"></h1>
      </div>

      {/* <div className="w-28 h-28  bg-[rgb(223,221,223)]  rounded-full"></div> */}
    </div>
  );
};

const UserDashboardBookings = () => {
  const user = useSelector((store) => store?.user);
  const navigate = useNavigate();
  if (!user?.token) {
    navigate("/sign-in");
  }

  const [userBookings, setUserBookings] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);
  const [showBookingCard, setShowBookingCard] = useState(false);
  const [bookingDeleted, setBookingDeleted] = useState(false);

  // user appointments api call
  const getUserBookings = async function () {
    try {
      setShowBookingCard(true);
      setShowShimmer(true);

      const headers = {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `bearer ${user.token}`,
      };

      const response = await fetch(GET_USER_BOOKING_URL, {
        headers: headers,
      });
      const json = await response.json();
      //    console.log(json);
      setShowShimmer(false);
      setUserBookings(json?.data);
      console.log("usbook state", userBookings);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    getUserBookings();
  }, [bookingDeleted]);
  // modifying the upcoming date into nice structure

  // const dateArr = userBookings?.appointment_date.split("");
  // let modifyDateArr = []
  // for(let i=0;i<10 ;i++){
  //      modifyDateArr.push(dateArr[i]);
  // }
  // const finalDate = modifyDateArr.join("");

  return (
    <div className="w-9/12">
      <div className="w-full  mx-auto py-12">
        {/*  welcome title & get bookings btn */}
        <div className="flex flex-col gap-4 w-10/12 mx-auto  text-3xl ">
          <h1> Welcome , {user?.userName}</h1>
          <h1>All Bookings ({userBookings.length})</h1>
        </div>

        {/*  booking card */}
        {showBookingCard && (
          <div className="py-24">
            {/*  showing shimmer until booking data comes */}
            {showShimmer === true ? (
              <ShimmerBooking />
            ) : (
              <div className="relative  w-full flex justify-center ">
                {/*  if zero booking */}
                {userBookings.length === 0 && (
                  <div className=" absolute  mx-auto flex flex-col gap-4 ">
                    <h1 className="text-4xl ">Ahh!!</h1>
                    <h1 className="text-5xl  w-full ">
                      {" "}
                      You dont have any Bookings :(,
                      <Link
                        className="bg-blue-400 py-1 text-white px-3 rounded-md"
                        to={"/doctors"}
                      >
                        book now
                      </Link>
                    </h1>
                  </div>
                )}

                {/* if has booking  */}
                {userBookings !== 0 && (
                  <div className=" flex flex-col gap-12  justify-center items-center w-10/12">
                    {/* mapping over bookings arr */}
                    {userBookings.map((booking) => (
                      <BookingCard
                        {...booking}
                        bookingDeleted={() => setBookingDeleted(true)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboardBookings;
