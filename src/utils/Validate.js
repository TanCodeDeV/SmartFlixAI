export const checkValidation = (name, email, password) => {
  const nameValidation = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
  const emailValidation =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const passwordValidation =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );

  if (!emailValidation) {
    return "Email is not valid";
  }

  if (!passwordValidation) {
    return "Password is not valid";
  }
  if (name && !nameValidation) {
    return "Name is not valid";
  }

  return null;
};
