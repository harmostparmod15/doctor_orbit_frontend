import doctor1 from "../assets/images/doctor1.jpeg";
import doctor2 from "../assets/images/doctor2.jpeg";
import doctor3 from "../assets/images/doctor3.jpeg";

// TOP DOCTORS
export const ourTopDoctors = [
  {
    id: 2,
    name: "Dr. Ashok Neelam",
    speciality: "Cardiologist",
    imageLink: doctor1,
  },
  {
    id: 4,
    name: "Dr. Sushant Rai",
    speciality: "Cardiologist",
    imageLink: doctor2,
  },
  {
    id: 5,
    name: "Dr. Ashok KD",
    speciality: "Cardiologist",
    imageLink: doctor3,
  },
];

//Auth URLs
export const USER_SIGN_IN_URL = "http://localhost:3003/api/v1/user/signin";
export const USER_SIGN_UP_URL = "http://localhost:3003/api/v1/user/signup";
export const ADMIN_SIGN_IN_URL = "http://localhost:3003/api/v1/admin/signin";
export const ADMIN_DELETE_USER_URL = "http://localhost:3003/api/v1/admin/user/";
export const ADMIN_GET_ALL_USERS = "http://localhost:3003/api/v1/admin/users";

// Search URLs
export const GET_ALL_DOCTORS_URL = "http://localhost:3000/api/v1/doctors";
export const GET_DOCTOR_URL = "http://localhost:3000/api/v1/doctor/";

// Booking URLs
export const BOOKING_URL = "http://localhost:3002/api/v1/booking/new";
export const GET_USER_BOOKING_URL = "http://localhost:3002/api/v1/bookings";
export const DELETE_BOOKING_URL = "http://localhost:3002/api/v1/booking/";

export const OngoingCouponCode = "Parmod15";
