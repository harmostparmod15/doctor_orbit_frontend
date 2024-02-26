import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import DoctorCard, { withPromotedLabel } from "./DoctorCard";
import OurTopDoctorCard from "./OurTopDoctorCard";
import Shimmer from "./Shimmer";

// ASSETS
import { GET_ALL_DOCTORS_URL } from "../utils/constants";
import { ourTopDoctors } from "../utils/constants";

const Doctors = () => {
  const [doctorSearch, setDoctorSearch] = useState([]);
  const [allDoctors, setDoctor] = useState([]);
  const [filteredDoctor, setFilteredDoctor] = useState([]);

  const DoctorCardPromoted = withPromotedLabel(DoctorCard);

  // api call
  const getDoctors = async () => {
    const data = await fetch(GET_ALL_DOCTORS_URL);
    const json = await data.json();
    console.log(json);
    setFilteredDoctor(json.data);
  };

  useEffect(() => {
    getDoctors();
  }, []);

  if (!filteredDoctor) return;

  return filteredDoctor.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="overflow-x-hidden w-full relative font-poppins ">
      <div className=" mx-auto flex flex-col ">
        {/*  our top doctors component */}
        <div className="pt-12 bg-slate-200">
          {/*  heading */}
          <div className="w-9/12 mx-auto py-12">
            <h1 className="text-5xl font-extrabold ">Our Top Doctors</h1>
          </div>
          {/*  MAPPING OVER TOP DOCS */}
          <div className=" flex justify-between gap-8 w-9/12 mx-auto">
            {ourTopDoctors.map((doc) => (
              <OurTopDoctorCard key={doc?.id} {...doc} />
            ))}
          </div>

          {/*  top-doctors features */}
          <div className=" px-48 bg-blue-500 text-white flex justify-between py-24 my-12">
            <div className="flex flex-col gap-2 ">
              <h1 className="text-3xl font-extrabold ">2000+</h1>
              <p>Satisfied Patients</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h1 className="text-3xl font-extrabold">50+</h1>
              <p>Specialized Services</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h1 className="text-3xl font-extrabold">80+</h1>
              <p>Nursing Staff</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h1 className="text-3xl font-extrabold">24/7</h1>
              <p>Emergency Care</p>
            </div>
          </div>
        </div>

        {/* INPPUT SEARCH */}
        <div className=" relative -top-32 w-9/12 mt-8 flex  mx-auto  bg-white shadow-2xl rounded-xl justify-between px-4   py-6">
          <div className="py-4 rounded-lg w-3/12 bg-slate-100 flex items-center justify-center">
            <h1>filters</h1>
          </div>
          <input
            onChange={(e) => {
              setDoctorSearch(e.target.value);
            }}
            className="w-7/12 py-2 rounded-lg px-8  border  bg-slate-50"
            type="text"
            placeholder="Search for Doctors"
          ></input>
          <button
            // onClick={() =>
            //   useDoctorFilter(doctorSearch, allDoctors, setFilteredDoctor)
            // }
            className="bg-blue-500 rounded-lg px-8 text-white hover:bg-blue-50 hover:text-blue-400 transition-all duration-500   "
          >
            Search
          </button>
        </div>

        {/* ALL DOCTORS HERE */}
        <div className=" -mt-20 w-10/12 mx-auto justify-between flex flex-wrap gap-10 ">
          {/*  prmoted label or simple card */}

          {filteredDoctor.map((doc) => (
            <Link className=" w-3/12" to={"/doctor/" + doc.id} key={doc.id}>
              {doc?.isPromoted ? (
                <DoctorCardPromoted {...doc} />
              ) : (
                <DoctorCard {...doc} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
