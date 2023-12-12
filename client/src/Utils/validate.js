export const validateFormData = (email, password) => {
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  if (!validEmail) return "Invalid Email";
  if (!validPassword) return "Password should contain 8 letter, Uppercase, Lowercase, special Character and Numeric";
  return null;
};
