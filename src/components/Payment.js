import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

// UTILS
import { addUser } from "../utils/userSlice";
import { BOOKING_URL, OngoingCouponCode } from "../utils/constants";

// ASSETS
import paymentLogo from "../assets/images/payment-gtways-logo.jpeg";

const Payment = () => {
  const user = useSelector((store) => store?.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const couponCode = useRef(null);

  const [couponCalculation, setCouponCalculation] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  // api call
  const handleBooking = async function () {
    try {
      const data = {
        patientName: user?.bookingData?.patientName,
        patientAge: user?.bookingData?.patientAge,
        patientMobile: user?.bookingData?.patientMobile,
        doctorId: user?.bookingData?.doctorId,
        appointmentDate: user?.bookingData?.appointmentDate,
      };

      const headers = {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `bearer ${user?.token}`,
      };

      const response = await axios.post(BOOKING_URL, data, {
        headers: headers,
      });

      alert(response?.data?.message);
      dispatch(
        addUser({
          userName: user?.userName,
          token: user?.token,
        })
      );
      navigate("/user/me");
    } catch (error) {
      alert(error?.response?.data?.error);
      alert("try once more");
      navigate(`/doctor/ ${user?.bookingData?.doctorId}`);
    }
  };

  // handle payment
  const handlePayment = () => {
    if (couponCode?.current?.value === OngoingCouponCode) {
      setCouponCalculation(!couponCalculation);
      handleBooking();
    } else if (couponCode?.current?.value === "") {
      setCouponCalculation(false);
      alert("use coupon code Parmod15");
    } else {
      setCouponCalculation(false);
      alert("invalid coupon");
    }
  };

  // handle coupon code
  const handleCouponCode = () => {
    if (couponCode?.current?.value === OngoingCouponCode) {
      setCouponCalculation(!couponCalculation);
    } else if (couponCode?.current?.value === "") {
      setCouponCalculation(false);
      alert("use coupon code Parmod15");
    } else {
      setCouponCalculation(false);
      alert("invalid coupon");
    }
  };

  return (
    <div className="bg-green-50 w-[100vw] relative  flex flex-col justify-center     ">
      <h1 className="drop-shadow-lg rounded-br-2xl rounded-tl-xl      w-7/12 mx-auto text-center text-sm font-bold py-4 mb-4 bg-yellow-300 ">
        Enter Code <span className="underline text-slate-500 ">Parmod15</span>{" "}
        for free Booking
      </h1>
      <div className="bg-white rounded-lg  w-5/12 h-4/5 p-12 mx-auto flex flex-col gap-8  ">
        {/*  total price section */}
        <div className="w-11/12 mx-auto flex justify-between text-4xl font-semibold">
          <h1>TOTAL</h1>
          <h1>300$</h1>
        </div>
        {/* name section */}
        <div className=" w-11/12 mx-auto flex justify-between ">
          <input
            className="py-2 rounded-md px-4 border border-gray-400"
            type="text "
            placeholder="First Name"
          ></input>
          <input
            className="py-2 rounded-md px-4 border border-gray-400"
            type="text "
            placeholder="Last Name"
          ></input>
        </div>
        {/* card details section */}
        <div className="w-11/12 mx-auto flex justify-between">
          <input
            className="py-2 rounded-md px-4 border border-gray-400"
            type="text "
            placeholder="Card Number"
          ></input>
          <input
            className="py-2 rounded-md px-4 border border-gray-400"
            type="text "
            placeholder="CVV "
          ></input>
        </div>
        {/* card logo section */}
        <div className="w-11/12 mx-auto  items-start  flex justify-between ">
          <img className="h-16 w-6/12 " src={paymentLogo}></img>
          <input
            className=" py-2 rounded-md px-4 border border-gray-400"
            type="text "
            placeholder="MM/YY "
          ></input>
        </div>

        {/* coupon section   */}
        <div className="w-11/12 mx-auto gap-4  items-start  flex flex-col justify-between ">
          <h1 className="text-slate-500 ">Have a Coupon ?</h1>
          <div className="flex justify-between items-center">
            <input
              ref={couponCode}
              className=" py-2 rounded-md px-4 border border-gray-400"
              type="text "
              placeholder="Enter Code "
            ></input>
            <svg
              onClick={handleCouponCode}
              className="h-14"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#c8e6c9"
                d="M36,42H12c-3.314,0-6-2.686-6-6V12c0-3.314,2.686-6,6-6h24c3.314,0,6,2.686,6,6v24C42,39.314,39.314,42,36,42z"
              ></path>
              <path
                fill="#4caf50"
                d="M34.585 14.586L21.014 28.172 15.413 22.584 12.587 25.416 21.019 33.828 37.415 17.414z"
              ></path>
            </svg>
          </div>
        </div>

        {/*  coupon calculation */}
        {couponCalculation && (
          <div className="w-11/12 mx-auto gap-2 flex flex-col justify-between items-center ">
            <div className="w-6/12 border-b border-black pb-2 flex justify-between">
              <h1> Fees - </h1>
              <h1>300$</h1>
            </div>
            <div className="w-6/12 border-b border-black  pb-2 flex justify-between">
              <h1 className="text-xs text-red-400 font-bold ">
                Coupon Applied
              </h1>
              <h1 className="text-xs font-bold text-red-400">-300$</h1>
            </div>
            <div className="w-6/12 border-b border-black pb-2 flex justify-between">
              <h1>Your Saving </h1>
              <h1 className="text-green-400">+300$</h1>
            </div>
            <div className="w-6/12  flex justify-between bg-green-100 px-4 py-2 rounded-lg">
              <h1>Total Fees -</h1>
              <h1>0$</h1>
            </div>
          </div>
        )}

        {/*  submit btn */}
        <button
          onClick={handlePayment}
          className="w-full text-white py-2 px-8 bg-green-500 rounded-lg text-2xl  "
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Payment;
