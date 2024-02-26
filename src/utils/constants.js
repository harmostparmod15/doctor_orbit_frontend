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
export const SIGN_IN_URL = "http://localhost:3003/api/v1/user/signin";

// Search URLs

export const GET_ALL_DOCTORS_URL = "http://localhost:3000/api/v1/doctors";
