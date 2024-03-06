import React from "react";

const DashboardScreen = (props) => {
  const {
    titleFirstScreen,
    titleFirstScreenEnd,
    count,
    titleSecondScreen,
    count2,
    titleSecondScreenEnd,
  } = props;

  return (
    <div className=" gap-8 flex justify-between">
      {/*  all users count */}
      <div className="shadow-xl shadow-red-300 text-white  p-8 w-6/12  bg-gradient-to-r from-[rgb(246,31,73)] via-[rgb(247,107,118)] to-[rgb(249,165,147)] ">
        <h1 className="opacity-80">{titleFirstScreen}</h1>
        <h1 className=" text-7xl opacity-80 ">{count}</h1>
        <h1 className="opacity-80">{titleFirstScreenEnd}</h1>
      </div>
      {/*  all admins count */}
      <div className="shadow-xl shadow-red-300 text-white  p-8 w-6/12  bg-gradient-to-r from-[rgb(120,106,231)] via-[rgb(153,100,222)] to-[rgb(191,94,212)] ">
        <h1 className="opacity-80"> {titleSecondScreen} </h1>
        {console.log("con2", count2)}
        {count2 === "undefinedth" ? (
          <h1 className="text-7xl opacity-80">-</h1>
        ) : (
          <h1 className="text-7xl opacity-80">{count2}</h1>
        )}

        <h1 className="opacity-80">{titleSecondScreenEnd}</h1>
      </div>
    </div>
  );
};

export default DashboardScreen;
