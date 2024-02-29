import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// UTILS
import { USER_SIGN_UP_URL } from "../utils/constants";
import { checkValidData } from "../utils/helpers";
import { addUser } from "../utils/userSlice";

//ASSETS
import bgImage from "../assets/images/bg-image.jpg";
import titleLogo from "../assets/images/signin-title-logo.png";

//COMPONENTS
import Error from "./Error";

const UserSignUp = () => {
  const user = useSelector((store) => store?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // state vairables
  const [validationData, setValidationData] = useState({
    email: true,
    pass: true,
  });
  const [showErrorPage, setShowErrorPage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // refernces
  const userName = useRef(null);
  const mobileNumber = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // handle sign up function
  const useHandleSignUp = async function (e) {
    e.preventDefault();

    const responseObj = checkValidData(
      email?.current.value,
      password?.current.value
    );
    setValidationData(responseObj);
    if (!responseObj.email || !responseObj.pass) return;

    // API CALL
    try {
      const response = await axios.post(USER_SIGN_UP_URL, {
        name: userName?.current?.value,
        email: email?.current?.value,
        password: password?.current?.value,
        mobile_no: mobileNumber?.current?.value,
        role: "user",
      });
      if (response?.data?.success) {
        dispatch(
          addUser({
            ...user,
            userName: response?.data?.data?.userName,
            userID: response?.data?.data?.userId,
            token: response?.data?.data?.token,
          })
        );
      }

      navigate("/booking");
    } catch (error) {
      setErrorMessage(error?.response?.data);
      setShowErrorPage(true);
      console.log("frm signin axios", error);
    }
  };

  return (
    <div className="flex   flex-col justify-center ">
      <img
        className="w-screen h-full  left-0 top-0 bg-cover    absolute -z-20"
        alt="bg-img"
        src={bgImage}
      />
      <div className={"" + (showErrorPage && "blur-lg")}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="logo" className="w-56 mx-auto mt-20" src={titleLogo}></img>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-600">
            Sign up for your account
          </h2>
        </div>

        <div className="bg-white bg-opacity-40 p-12  rounded-lg mt-12 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            {/*  user name */}
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                UserName
              </label>
              <div className="mt-2">
                <input
                  ref={userName}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* mobile_number */}
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Mobile Number
                </label>
              </div>
              <div className="mt-2">
                <input
                  ref={mobileNumber}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* email */}
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  ref={email}
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {!validationData.email && (
                  <h1 className="text-red-700 ">**email not valid**</h1>
                )}
              </div>
            </div>

            {/* password */}
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  ref={password}
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {!validationData.pass && (
                  <h1 className="text-red-700 ">**weak password**</h1>
                )}
              </div>
            </div>

            {/*  submit button */}
            <div>
              <button
                onClick={useHandleSignUp}
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* AUTH ERROR PAGE */}
      {showErrorPage && (
        <Error
          {...errorMessage}
          origin={"signup"}
          hideErrorPage={() => setShowErrorPage(false)}
        />
      )}
    </div>
  );
};

export default UserSignUp;
