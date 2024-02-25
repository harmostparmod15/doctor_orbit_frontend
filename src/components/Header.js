import titleLogo from "../assets/images/title-logo.png";
import userDashLogo from "../assets/images/user-dashboard-logo.jpeg";
import hamburger from "../assets/images/hamburger.png";

const Header = () => {
  return (
    <div className="w-[100vw] relative font-poppins shadow-md ">
      <div className="w-[100%] px-8  mx-auto py-2  flex justify-betwe gap-6">
        {/*  HEADER LOGO */}
        <div>
          <img alt="hamburger" className="w-12 md:hidden" src={hamburger}></img>
          <h1 className="text-2xl text-blue-500 font-extrabold text-center relative top-5 hidden ">
            DoctorOrbit
          </h1>
          <img alt="logo" className="w-full h-16 " src={titleLogo}></img>
        </div>

        {/*  nav links */}
        <ul className="hidden w-7/12 font-extrabold   text-gray-400 pt-5  md:gap-4   px-16 md:flex justify-between  text-lg  xl:text-xl ">
          <li className="text-[#007AA3]">Home</li>
          <li>Doctors</li>
          <li>About</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>

        {/*  sign in btn */}
        <div className=" w-3/12  flex justify-betwen px-8 py-4 ">
          <button className=" bg-blue-500 text-white py-2 px-6 rounded-md w-32  ">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
