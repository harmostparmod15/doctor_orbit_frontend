export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid && !isPasswordValid) {
    return { email: false, pass: false };
  } else if (!isEmailValid && isPasswordValid) {
    return { email: false, pass: true };
  } else if (isEmailValid && !isPasswordValid) {
    return { email: true, pass: false };
  } else {
    return { email: true, pass: true };
  }
};

export const checkValidBookingDate = (bookingDate) => {
  const dateStr = String(new Date()).split(" ");
  const dayNumber = Number(dateStr[2]);

  bookingDate = bookingDate.split("-");
  const bookingDayNumber = Number(bookingDate[2]);

  if (bookingDayNumber < dayNumber) {
    // console.log("invalid booking");
    // alert("invalid booking date");

    return false;
  } else {
    return true;
  }
};

export const filterByPromotedDoctors = (allDoctors) => {
  const data = allDoctors?.filter((doc) => doc?.isPromoted);
  return data;
};

export const filterByFees = (allDoctors) => {
  console.log("fees called");
  const data = allDoctors?.filter((doc) => doc?.fees < 500);
  console.log("fees", data);
  return data;
};

export const filterByHighRating = (allDoctors) => {
  const data = allDoctors?.filter((doc) => doc?.rating >= 4);
  return data;
};

export const getData = (value, allDoctors) => {
  console.log("val");
  if (value === "all") {
    return allDoctors;
  } else if (value === "promoted_doctor") {
    return filterByPromotedDoctors(allDoctors);
  } else if (value === "fees_less_than_500") {
    return filterByFees(allDoctors);
  } else if (value === "more_than_4_star") {
    return filterByHighRating(allDoctors);
  }
};
