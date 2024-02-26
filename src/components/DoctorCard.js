import { Link } from "react-router-dom";

// ASSETS
import doctorThumbnail from "../assets/images/doctor-image-thumbnail.jpg";
import starLogo from "../assets/images/rating-star.jpg";
import locationLogo from "../assets/images/location-logo.png";

// HOF
export const withPromotedLabel = (DoctorCard) => {
  return (props) => {
    return (
      <div className="relative ">
        <h1 className="bg-green-300 font-extrabold text-white py-2 px-4 w-4/12 top-4 absolute rounded-md shadow-xl   ">
          Promoted
        </h1>
        <DoctorCard {...props} />
      </div>
    );
  };
};

const DoctorCard = ({
  id,
  name,
  speciality,
  fees,
  description,
  rating,
  address,
}) => {
  return (
    <div className=" shadow-lg   bg-white  py-12  font-poppins">
      <img
        alt="logo"
        className="w-full px-4 mx-auto"
        src={doctorThumbnail}
      ></img>
      <div className=" w-10/12 text-center mx-auto flex flex-col items-center gap-1 ">
        <h1 className=" w-44">{name}</h1>
        <h1 className="text-sm bg-blue-100 px-2 py-1">{speciality}</h1>
        <div className="flex">
          <img alt="logo" className="-ml-2 w-8 h-6" src={starLogo}></img>
          <h1>{rating}</h1>
        </div>
        <div className="flex  ">
          <img alt="logo" className="-ml-2 w-8 h-6" src={locationLogo}></img>
          <h1 className="h-12 text-xs">{address}</h1>
        </div>

        {/*  VIEW PROFILE BTN */}
        <Link to={"/doctor/" + id}>
          <button className="bg-blue-500 text-white  hover:bg-blue-50 hover:text-blue-400  hover:rounded-md  transition-all duration-500  px-8 py-2 rounded-sm">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
