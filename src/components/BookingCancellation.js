import React from "react";

const BookingCancellation = () => {
  return (
    <div className="w-full border py-12 ">
      <h1 className="text-5xl font-bold text-center opacity-50 ">
        Cancellation procedure
      </h1>
      <div className="w-7/12 mx-auto border p-20 bg-slate-50 my-12 rounded-lg">
        <p className=" text-xl py-4   ">
          Below is step by step guide to walk you throught our booking
          cancellation process :
        </p>
        <ul className="  mx-auto flex flex-col gap-4 list-decimal ">
          <li>You have to have a booking first to cancel it</li>
          <li>You can cancel booking at any time with no hassle</li>
          <li>just go to your profile section </li>
          <li>Then under cancellation . Go to Cancel Booking </li>
          <li>
            Click on cancel button and you are informed if process was
            successfull{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookingCancellation;
