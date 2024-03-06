import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

// import UserDashboard from "./UserDashboard";

import appointmentLogo from "../assets/images/appointment-logo.png";
import appointmentCancelLogo from "../assets/images/appointment-cancel-logo.png";

import arrowLogo from "../assets/images/arrow-logo.png";

import { ADMIN_GET_ALL_USERS, ADMIN_DELETE_USER_URL } from "../utils/constants";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import UserList from "./UserList";
import { removeUser } from "../utils/userSlice";
import DashboardScreen from "./DashboardScreen";

const AdminDashboard = () => {
  const user = useSelector((store) => store?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //  if admin is not signed in redirect to home
  useEffect(() => {
    if (!user) {
      navigate("/admin/signin");
    }
  }, []);

  const [showAllUsers, setShowAllUsers] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [userDeleted, setUserDeleted] = useState(false);

  useEffect(() => {
    getAllUsers();
  }, [userDeleted]);

  // get all users
  const getAllUsers = async function () {
    try {
      const headers = {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `bearer ${user?.token}`,
      };
      const response = await axios.get(ADMIN_GET_ALL_USERS, {
        headers: headers,
      });
      console.log("get all users response ", response?.data);
      setUserDetails(response?.data);
    } catch (error) {
      console.log("get all users error", error);
    }
  };

  // log out the admin
  const logOutAdmin = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <div className="w-full">
      {/*  dash board */}
      <div className="w-full  mx-auto  px-12 flex">
        {/*  left-side  dashboard side bar */}
        <div className=" w-3/12 h-[100vh] flex flex-col border-r border-black pr-12">
          <h1 className="py-8 text-3xl text-red-600 font-bold ">DASHBOARD</h1>

          <div className="flex flex-col gap-12">
            {/*  related to users details */}
            <div>
              <div className="flex justify-btween items-center border border-black h-22">
                <h1 className="text-2xl font-bold  py-2  px-2   ">USERS</h1>
              </div>

              <ul className="flex flex-col gap-4 pt-8  px-8 text-slate-700">
                {/*  admin overview */}
                <div className="flex ">
                  <img className="w-8 h-6" src={arrowLogo}></img>

                  <li
                    onClick={() => setShowAllUsers(false)}
                    className="cursor-pointer font-bold "
                  >
                    Overview
                  </li>
                </div>
                {/*  users details */}
                <div className="flex ">
                  <img className="w-8 h-6" src={arrowLogo}></img>

                  <li
                    onClick={() => setShowAllUsers(true)}
                    className="cursor-pointer font-bold "
                  >
                    All User Details
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>

        {/* // what to load ??? right side summary page or user details page  */}
        {!showAllUsers ? (
          <div className="w-9/12  flex flex-col gap-32 bg-slate-50">
            {/*  summary */}
            <div className="w-10/12  mx-auto">
              <h1 className="py-8 text-3xl text-red-600 font-bold ">
                ADMIN PANEL
              </h1>
              <button
                onClick={logOutAdmin}
                className="bg-blue-600 px-8 py-2 text-white font-bold rounded-md my-4 "
              >
                Log Out
              </button>

              {/*  booking count and days left */}
              <div className=" ">
                <DashboardScreen
                  titleFirstScreenAdmin="No. Of Users"
                  userCountAdmin={userDetails?.data?.length}
                  titleFirstScreenEndAdmin="Currently Joined"
                  titleSecondScreenAdmin="No. Of Admins"
                  adminCountAdmin="1"
                  titleSecondScreenEndAdmin="Currently Signed"
                />
              </div>
            </div>
            {/*  no of users circle animation  */}
            <div className="w-8/12  mx-auto  py-4 bg-white rounded-md">
              <h1 className="px-4 text-3xl text-slate-500 ">User Number</h1>
              <div className="flex justify-center items-center py-12">
                {/*  usercount > 5 */}
                {userDetails?.data?.length < 5 && (
                  <div className=" flex justify-center items-center border-4 border-b-8 border-b-red-300  border-[#f3f3f3]     w-56 h-56 rounded-full  ">
                    <h1 className="text-7xl text-slate-500  ">
                      {" "}
                      {userDetails?.data?.length}
                    </h1>
                  </div>
                )}

                {/*  usercount > 10 */}
                {userDetails?.data?.length < 20 &&
                  userDetails?.data?.length > 6 && (
                    <div className=" flex justify-center items-center border-4 border-b-8 border-b-red-300  border-[#f3f3f3]     w-56 h-56 rounded-full  ">
                      <h1 className="text-7xl text-slate-500  ">
                        {" "}
                        {userDetails?.data?.length}
                      </h1>
                    </div>
                  )}
              </div>
            </div>
          </div>
        ) : (
          //  user detail apge
          <div className="w-9/12 px-4 flex flex-col gap-4 bg-slate-50 ">
            <h1 className="text-center text-3xl py-12 font-bold ">ALL USERS</h1>
            <div className=" flex justify-etween text-2xl">
              <h1 className=" w-1/12 ">UserId </h1>
              <h1 className="pl-4  w-3/12 ">Name</h1>
              <h1 className="pl-4  w-5/12 ">E-mail</h1>
              <h1 className="pl-4  w-3/12 ">Mobile</h1>
            </div>
            {userDetails?.data.map((user) => (
              <UserList
                {...user}
                isUserDeleted={() => setUserDeleted(!userDeleted)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
