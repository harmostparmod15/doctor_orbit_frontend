import { useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//  ASSETS
import logo from "../assets/images/signin-title-logo.png";
import bgImage from "../assets/images/bg-image.jpg";

// UTILS
import { addUser } from "../utils/userSlice";
import { USER_SIGN_IN_URL } from "../utils/constants";

//COMPONENTS
import Error from "./Error";

const UserSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // STATE VARS
  const [showErrorPage, setShowErrorPage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // REFERNCE VARS
  const email = useRef(null);
  const password = useRef(null);

  // SIGN IN
  const handleSignIn = async function (e) {
    e.preventDefault();
    try {
      const headers = {
        "Content-type": "application/json; charset=UTF-8",
        email: email?.current?.value,
        password: password?.current?.value,
      };
      const response = await axios.post(
        USER_SIGN_IN_URL,
        {},
        {
          headers: headers,
        }
      );

      if (response?.data?.success === true) {
        navigate("/user/me");
        dispatch(
          addUser({
            userName: response?.data?.response?.userName,
            token: response?.data?.response?.token,
          })
        );
      }
    } catch (error) {
      setErrorMessage(error?.response?.data);
      setShowErrorPage(true);
    }
  };

  return (
    <div className="h-screen overflow-hidden relative flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <img
        className="w-screen h-full  left-0 top-0 bg-cover    absolute -z-20"
        alt="bg-img"
        src={bgImage}
      />
      <div className={"" + (showErrorPage && "blur-xl")}>
        {/* HEADING */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm relative -top-12">
          <Link to={"/"}>
            <img
              className="mx-auto  w-56 relative "
              src={logo}
              alt="Your Company"
            />
          </Link>

          <h2 className="text-blue-600 font-semibold  mt-10 text-center text-2xl  leading-9 tracking-tight ">
            Sign in to your account
          </h2>
        </div>

        {/*  SIGNIN FROM */}
        <div className="p-12 bg-opacity-40 bg-white rounded-lg mt-4 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form className="space-y-6">
            {/*  EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  ref={email}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  ref={password}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/*  SUBMIT BTN */}
            <div>
              <button
                onClick={handleSignIn}
                type="submit"
                className="mt-8 flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-200 hover:text-black transition-all transition-duration-1000"
              >
                Sign in
              </button>
            </div>
          </form>
          {/*  ADMIN SINGIN LINK */}
          <Link to={"/admin/signin"}>
            <div className="cursor-pointer mt-12 py-2 rounded-lg text-blue-400 bg-slate-100 bg-opacity-75   mx-auto text-center">
              <h1>Are you Admin ?</h1>
            </div>
          </Link>
        </div>
      </div>

      {/* AUTH ERROR PAGE */}
      {showErrorPage && (
        <Error
          {...errorMessage}
          origin={"signin"}
          hideErrorPage={() => setShowErrorPage(false)}
        />
      )}
    </div>
  );
};

export default UserSignIn;
