import { useEffect, useState } from "react";

import { GET_DOCTOR_URL } from "./constants";

const useGetDoctorDetail = (doctorId) => {
  const [doctor, setDoctor] = useState("");

  useEffect(() => {
    getDoctorDetail();
  }, []);

  async function getDoctorDetail() {
    const response = await fetch(GET_DOCTOR_URL + doctorId);
    const result = await response.json();
    setDoctor(result.data);
  }
  return doctor;
};

export default useGetDoctorDetail;
