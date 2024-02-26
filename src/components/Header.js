import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// ASSETS
import titleLogo from "../assets/images/title-logo.png";
import hamburger from "../assets/images/hamburger.png";

//UTILS
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // HANDLE LOGOUT
  const handleLogOut = function () {
    alert("hope to see you soon");
    dispatch(removeUser());
    console.log("cal action");
    navigate("/");
  };

  return (
    <div className="w-[100vw] relative font-poppins shadow-md ">
      <div className="w-[100%] px-8  mx-auto py-2  flex justify-betwe gap-6">
        {/*  HEADER LOGO */}
        <Link to={"/"}>
          <div>
            <img
              alt="hamburger"
              className="w-12 md:hidden"
              src={hamburger}
            ></img>
            <h1 className="text-2xl text-blue-500 font-extrabold text-center relative top-5 hidden ">
              DoctorOrbit
            </h1>
            <img alt="logo" className="w-full h-16 " src={titleLogo}></img>
          </div>
        </Link>

        {/*  nav links */}
        <ul className="hidden w-7/12 font-extrabold   text-gray-400 pt-5  md:gap-4   px-16 md:flex justify-between  text-lg  xl:text-xl ">
          <li className="text-[#007AA3]">Home</li>
          <Link to={"/doctors"} className="cursor-pointer ">
            <li>Doctors</li>
          </Link>
          <li>About</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
        {/*  sign in btn */}
        {!user?.userName && (
          <div className=" w-3/12  flex justify-betwen px-8 py-4 ">
            <Link to="/user/signin">
              <button className=" bg-blue-500 text-white py-2 px-6 rounded-md w-32  ">
                Sign in
              </button>
            </Link>
          </div>
        )}

        {/* log out button */}
        {user?.userName && (
          <div className="w-1/12 flex flex-col justify-center items-center relative cursor-pointer ">
            <button
              onClick={handleLogOut}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md "
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
