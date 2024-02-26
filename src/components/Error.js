import React from "react";

const Error = ({ error, message, origin, hideErrorPage }) => {
  // HANDLE  ERROR RETRY
  const handleErrorRetry = () => {
    if (origin === "signin") {
      console.log("yes its signin error");
      hideErrorPage();
    }
  };

  return (
    <div className=" absolute w-full animate-tiltShaking  ">
      <div className="text-center  w-6/12 mx-auto   bg-white px-12 py-24 rounded-lg bg-opacity-70  ">
        <h1 className="text-9xl font-extrabold  text-violet-900  ">oops!</h1>
        <div className="py-8 text-xl text-violet-900 ">
          <h1>{error}</h1>
          <h1>{message}</h1>
          <button
            onClick={handleErrorRetry}
            className="py-2 bg-violet-900 px-8 my-4 text-white rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
