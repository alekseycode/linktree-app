export const fixErrorMessage = (err) => {
  const stripErr = err.replace("auth/", "").replaceAll("-", " ");
  let newErr = stripErr.charAt(0).toUpperCase() + stripErr.slice(1);
  newErr === "Weak password" &&
    (newErr = "Password should be at least 6 characters");

  return newErr;
};
