import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import DoctorCard, { withPromotedLabel } from "./DoctorCard";
import OurTopDoctorCard from "./OurTopDoctorCard";
import Shimmer from "./Shimmer";

// ASSETS
import { GET_ALL_DOCTORS_URL } from "../utils/constants";
import { ourTopDoctors } from "../utils/constants";
import { getData } from "../utils/helpers";

const Doctors = () => {
  const [allDoctors, setDoctor] = useState([]);
  const [filteredDoctor, setFilteredDoctor] = useState([]);
  const [doctorSearch, setDoctorSearch] = useState([]);
  const [showClearInputBoxBtn, setShowClearInputBoxBtn] = useState(false);

  // HOF
  const DoctorCardPromoted = withPromotedLabel(DoctorCard);

  // handle option change
  const handleOptionChange = (e) => {
    const data = getData(e?.target?.value, allDoctors);
    setFilteredDoctor(data);
  };

  // handle doctor search
  const handleSearchDoctor = () => {
    const data = allDoctors.filter((doc) =>
      doc?.name?.toLowerCase()?.includes(doctorSearch?.toLowerCase())
    );
    setFilteredDoctor(data);
    setShowClearInputBoxBtn(true);
  };

  // handle clear input box after search
  const handleClearInputBox = () => {
    setDoctorSearch([]);
    setShowClearInputBoxBtn(false);
    setFilteredDoctor(allDoctors);
  };

  // api call
  const getDoctors = async () => {
    const data = await fetch(GET_ALL_DOCTORS_URL);
    const json = await data.json();
    console.log(json);
    setDoctor(json?.data);
    setFilteredDoctor(json?.data);
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

        {/*  SEARCH & FILTER */}
        <div className=" relative -top-32 w-9/12 mt-8 flex  mx-auto  bg-white shadow-2xl rounded-xl justify-between px-4   py-6">
          {/*  FILTERS SECTION */}
          <div className="py-4 rounded-lg w-3/12 bg-slate-100 flex items-center justify-around  ">
            <h1>filters</h1>
            <select
              onChange={(e) => handleOptionChange(e)}
              className="border rounded-lg px-4"
            >
              <option value="all">All</option>

              <option value="promoted_doctor">Promoted Doctors</option>

              <option value="fees_less_than_500">Fees &lt; 500</option>

              <option value="more_than_4_star">Rating (4-5)</option>
            </select>
          </div>

          {/*  INPUT SEARCH BOX */}
          <input
            onChange={(e) => {
              setDoctorSearch(e.target.value);
            }}
            value={doctorSearch}
            className="w-7/12 py-2 rounded-lg px-8  border  bg-slate-50"
            type="text"
            placeholder="Search for Doctors"
          ></input>

          {showClearInputBoxBtn && (
            <span className="cursor-pointer  " onClick={handleClearInputBox}>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="44"
                  height="44"
                  rx="22"
                  fill="white"
                  stroke="#9BA3AF"
                />
                <line
                  x1="8.64645"
                  y1="34.7233"
                  x2="34.7233"
                  y2="8.64645"
                  stroke="#D9D9D9"
                />
                <line
                  x1="34.7233"
                  y1="35.4304"
                  x2="8.64645"
                  y2="9.35356"
                  stroke="#D9D9D9"
                />
              </svg>
            </span>
          )}
          <button
            onClick={handleSearchDoctor}
            className="bg-blue-500 rounded-lg px-8 text-white hover:bg-blue-50 hover:text-blue-400 transition-all duration-500   "
          >
            Search
          </button>
        </div>

        {/* ALL DOCTORS HERE */}
        <div className=" -mt-20 w-10/12 mx-auto justify-around      flex flex-wrap gap-10 ">
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
