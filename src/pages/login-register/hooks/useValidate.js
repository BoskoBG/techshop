export const useValidate = () => {
  const isEmpty = (input) => input.trim() === "";

  const validEmail = (email) => {
    if (isEmpty(email)) return "empty";

    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };
  const validPassword = (password) => {
    if (isEmpty(password)) return "empty";

    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/.test(
      password
    );
  };

  const validRepeatedPassword = () => {};

  const passwordsMatch = (password, repeatedPassword) => {
    return password === repeatedPassword;
  };

  const validName = (name) => {
    if (isEmpty(name)) return "empty";

    return /^[a-zA-Z]+$/.test(name);
  };

  return [validEmail, validPassword, passwordsMatch, validName];
};
