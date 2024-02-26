import { Link } from "react-router-dom";

const OurTopDoctorCard = ({ id, imageLink, name, speciality }) => {
  return (
    <div className=" rounded-lg  shadow-lg   bg-white  py-12  font-poppins">
      <img
        alt="logo"
        className="w-screen  h-56 rounded-t-lg relative -top-12 h- mx-auto"
        src={imageLink}
      ></img>
      <div className=" w-10/12 text-center mx-auto flex flex-col items-center -mt-10  ">
        <h1 className=" text-lg font-extrabold w-44">{name}</h1>
        <h1 className="text-sm font-bold px-2 py-1">{speciality}</h1>

        {/*  VIEW PROFILE BTN */}
        <Link to={"/doctor/" + id}>
          <button className="rounded-lg border  border-blue-400 text-blue-500  hover:bg-blue-500 hover:text-white  transition-all duration-500  px-8 py-2 ">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};
export default OurTopDoctorCard;
