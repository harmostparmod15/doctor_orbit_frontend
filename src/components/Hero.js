// ASSETS
import heroDoctorImage from "../assets/images/hero-logo.jpg";
import testimonialLogo1 from "../assets/images/testimonial-image-1.jpeg";
import buildingLogo from "../assets/images/building.png";
import computerPersonLogo from "../assets/images/computer-boy.jpeg";
import bookingDoctorLogo from "../assets/images/booking-doctor.jpeg";

const HeroSection = () => {
  return (
    <div id="root" className=" w-full relative font-poppins overflow-hidden  ">
      {/*  hero section */}
      <div className=" relative bg-gradient-to-b from-[#007AA3] via-[#0084AC] to-[#007AA3] pb-64  md:pb-14 lg:pb-12 flex justify-between *:">
        {/*  right side image  */}
        <img
          alt="doc-logo"
          className="relative -right-[43%] top-20 md:top-10  lg:top-0   hidden sm:block  w-7/12"
          src={heroDoctorImage}
        ></img>

        {/*  headings n sub-headings  */}
        <div className="flex flex-col gap-6 lg:gap-8 relative sm:absolute top-28 sm:left-32  text-white mx-auto  w-9/12 md:w-6/12">
          {/*  heading */}
          <ul className="text-3xl lg:text-5xl font-extrabold  sm:flex flex-col gap-2 hidden  ">
            <li>Book And Meet</li>
            <li> Your Doctor</li>
          </ul>
          <h1 className="text-3xl block sm:hidden lg:text-5xl font-extrabold     ">
            Book And Meet Your Doctor
          </h1>
          {/*  sub - heading */}
          <p className="w-72 lg:w-96 text:md lg:text-lg opacity-80 ">
            Best Online Appointment Scheduling Platform
          </p>
          {/*  buttons */}
          <div className="sm:w-8/12 w-11/12 flex  gap-4 pt-4 ">
            <button className="w-6/12 bg-white text-[#0084AC] py-2  rounded-md font-[1000] text-lg hover:scale-95  transition-all duration-500 ">
              Get Started
            </button>

            <button className="w-6/12 border border-white text-white bg-[#0084AC] py-2  rounded-md font-[1000] text-lg   ">
              Call Now
            </button>
          </div>
        </div>
      </div>

      {/* how it works */}
      <div className="py-4 w-full flex flex-col overflow-hidden ">
        {/* HEADING */}
        <div className=" py-12 gap-4 flex flex-col mx-auto text-center">
          <h1 className="text-5xl font-bold"> How It Works!</h1>
          <p className="text-xl  mx-auto  w-9/12">
            A step-by-step guide to build an on-demand appointment for patients
          </p>
        </div>
        {/* HELPERS CARDS */}
        <div className="card-section transition-all duration-[2s]  flex  flex-col lg:flex-row items-center  relative w-11/12   gap-2 mx-auto ">
          {/*  1st card */}
          <div className=" hover:scale-90 transition-all duration-800   w-5/12 flex flex-col  items-center  justify-between justify-items-center ">
            <img
              alt="building-logos"
              className="shadow-xl rounded-xl w-32"
              src={buildingLogo}
            ></img>
            <div className="h-32 text-center py-4 ">
              <h1 className="text-lg  font-extrabold  pb-2  ">Find A Doctor</h1>
              <p className="text-sm font-bold w-64 leading-5">
                With more than 20+ doctors and on mission to provide best care
                Health Care Service
              </p>
            </div>
          </div>
          {/*  2nd card */}
          <div className="hover:scale-90 transition-all duration-800 bg-white w-5/12 flex flex-col items-center justify-between justify-items-center ">
            <img
              alt="computer-logo"
              className="shadow-xl rounded-xl w-32 px-4 pb-4 pt-4"
              src={computerPersonLogo}
            ></img>
            <div className="h-32 text-center py-4 ">
              <h1 className="text-xl font-extrabold pb-2">View Doctor</h1>
              <p className="text-sm font-bold w-64 leading-5">
                Share your health concern here and we shall assign you a top
                doctor across the Country
              </p>
            </div>
          </div>
          {/* 3rd card */}
          <div className="hover:scale-90 transition-all duration-800 bg-white w-5/12 flex flex-col  items-center justify-between  ">
            <img
              alt="logo"
              className="shadow-xl rounded-xl py-4 w-32 pt-4"
              src={bookingDoctorLogo}
            ></img>
            <div className="h-32  py-4 text-center ">
              <h1 className="text-xl font-extrabold pb-2">Book A Visit</h1>
              <p className="text-sm font-bold w-64 leading-5 ">
                Book your time slot with doctor from your comfort zone at very
                reasonable prices
              </p>
            </div>
          </div>
        </div>
        {/* find doctor button */}
        <button
          className="font-bold text-center mt-12 mx-auto bg-blue-500 py-4 px-8
              hover:bg-slate-200 hover:text-[#0084AC] transition-all duration-400  text-white"
        >
          Find Doctor
        </button>
      </div>

      {/* testimonials section */}
      <div className="w-full  py-12">
        <h1 className="text-5xl font-bold text-center  testimonial-heading transition-all duration-300 ">
          Testimonials
        </h1>
        {/*  testimonial container */}
        <div className="testimonial    transition-all duration-500  py-12  w-11/12 gap-8  mx-auto flex justify-between">
          {/*  testimonial - 1  */}
          <div className="relative mx-auto bg-slate-100 p-4 lg:flex-row flex-col flex justify-between items-center  w-6/12">
            {/* testimonial image */}
            <div className="p-4 ">
              <img
                alt="test-logo"
                className="w-[58rem] rounded-full lg:rounded-none "
                src={testimonialLogo1}
              ></img>
            </div>
            {/* <img
              className="absolute top-[18.5rem]   left-0 b lg:-top-0 w-16 lg:left-[15rem] ro "
              src={quotesImage}
            ></img> */}
            {/*  details or text  */}
            <div className="font-extrabold flex flex-col gap-4 p-8">
              <h1 className="w-12/12">
                "I'm a big fan of DoctorOrbit because it makes it so much easier
                for me to find any doctor and book an appointment without any
                hassle !"
              </h1>
              <p>-John Akon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
