const bcrypt = require("bcryptjs");
const userRepository = require("../repositories/user.repository");
const { generateToken } = require("../utils/jwt");

const registerUser = async (name, email, password, role) => {
  const existingUser = await userRepository.findUserByEmail(email);
  if (existingUser) {
    throw new Error("Email already in use");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userRepository.createUser({
    name,
    email,
    password: hashedPassword,
    role,
  });
  return user;
};
const loginUser = async (email, password) => {
  const user = await userRepository.findUserByEmail(email);
  if (!user) {
    throw new Error("Invalid email or password");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }
  const token = generateToken({ id: user.id, role: user.role });
  return { user, token };
};
module.exports = {
  registerUser,
  loginUser,
};