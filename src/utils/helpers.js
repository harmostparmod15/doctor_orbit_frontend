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
