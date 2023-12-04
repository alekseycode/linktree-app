export const fixErrorMessage = (err) => {
  const stripErr = err.replace("auth/", "").replaceAll("-", " ");
  let fixedErr = stripErr.charAt(0).toUpperCase() + stripErr.slice(1);
  fixedErr === "Weak password" &&
    (fixedErr = "Password should be at least 6 characters");

  return fixedErr;
};
