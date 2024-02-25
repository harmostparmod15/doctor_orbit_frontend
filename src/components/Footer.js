const Footer = () => {
  return (
    <div className="transition-all duration-[2s] gap-4 footer bg-gradient-to-b from-[#007AA3] via-[#0084AC] to-[#007AA3] py-12 w-[100vw] font-poppins px-12 flex  items-center   sm:justify-between  flex-col sm:flex-row">
      <div className="text-white w-11/12 leading-8 lg:w-3/12">
        <h1 className="py-3 text-lg lg:text-2xl font-bold">DoctorOrbit</h1>
        <p className="py-2 w-full ">
          DoctorOrbit is a registered start up company empanelled with 20 plus
          doctors and 100's patients lives touched.
        </p>
        <div className="py-4 flex gap-4">
          <i class="fa-brands fa-twitter fa-xl"></i>
          <i class="fa-brands fa-linkedin fa-xl"></i>
          <i class="fa-brands fa-facebook fa-xl"></i>
          <i class="fa-regular fa-address-book fa-xl"></i>
        </div>
      </div>

      <div className="text-white w-11/12 lg:w-3/12">
        <h1 className="py-3 text-lg lg:text-2xl font-bold">For Information</h1>
        <div className="flex flex-col gap-2 ">
          <p>About Us</p>
          <p>Bookig Guide</p>
          <p>Pharmacy</p>
          <p>Careers</p>
          <p>Press Release</p>
          <p>FAQs</p>
        </div>
      </div>

      <div className="text-white w-11/12 lg:w-3/12">
        <h1 className="py-3 text-lg lg:text-2xl font-bold">Helpfull Links</h1>
        <div className="flex flex-col gap-2">
          <p>Book Appointment Us</p>
          <p>Franchise Register </p>
          <p>SMS Booking</p>
          <p>Services</p>
        </div>
      </div>

      <div className="text-white w-11/12 lg:w-3/12">
        <h1 className="py-3 text-lg lg:text-2xl font-bold">Contact Us</h1>
        <div className="flex flex-col gap-2">
          <p>DoctorOrbit Consultancy Pvt. Ltd. Jammu , Jammu And Kashmir</p>
          <p>+91 2343332333</p>
          <p>Contact Support</p>
          <p>support@gmail.com</p>
          <p>Official Queries </p>
          <p>support@doctororbit.com</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
