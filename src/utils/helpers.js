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
