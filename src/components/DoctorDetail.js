import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//UTILS
import { addUser } from "../utils/userSlice";
import useGetDoctorDetail from "../utils/useGetDoctorDetail";

//ASSETS
import doctorThumbnail from "../assets/images/doctor-image-thumbnail.jpg";

//COMPONENTS
import Header from "./Header";
import Footer from "./Footer";

const DoctorDetail = () => {
  const user = useSelector((store) => store?.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // EXRTACTING DOCTOR ID
  const params = useParams();
  const id = params.id;
  const doctor = useGetDoctorDetail(id);

  // HANDLE REDIRECTION TO BOOKING PAGE
  const redirectToBooking = () => {
    if (!user?.token) {
      dispatch(
        addUser({
          ...user,
          doctorId: id,
        })
      );
      navigate("/user/signup");
    } else {
      dispatch(
        addUser({
          doctorId: id,
          userName: user?.userName,
          token: user?.token,
        })
      );
      navigate("/booking");
      console.log("navigating to booking page user is signed up");
    }
  };

  return (
    <div className="w-full   font-poppins relative">
      <Header />
      {/* DOCTOR CARD  */}
      <div className="border doctor-card relative py-12 w-10/12 mx-auto  flex justify-between gap-4 transition-all duration-500">
        {/* DOCTOR DETAILS */}
        <div className="w-7/12  flex flex-col gap-5 p-8">
          <h1 className="text-2xl">{doctor?.name}</h1>
          <h1 className="text-xl bg-green-200 w-44">{doctor?.speciality}</h1>
          <h1 className="text-xl">Feess - {doctor?.fees}</h1>
          <h1 className="w-10/12 text-lg">{doctor?.description}</h1>
          <h1 className="text-xl">{doctor?.rating} Avg. Ratings</h1>
          <h1 className="text-xl">Clinic - {doctor?.address}</h1>
          <button
            onClick={redirectToBooking}
            className="w-32 py-2 text-white bg-green-500 hover:text-green-500 hover:bg-white transition-all duration-500"
          >
            Book Now
          </button>
        </div>

        {/*  DOCTOR IMAGE */}
        <div className=" w-4/12 ">
          <img alt="logo" className="w-full h-full" src={doctorThumbnail}></img>
        </div>
      </div>

      {/*  EXTRA LINES */}
      <div className=" w-10/12 mx-auto text-xl leading-8 py-12 flex flex-col gap-8 ">
        <h1>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet,
        </h1>
        <h1>
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?"
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorDetail;
