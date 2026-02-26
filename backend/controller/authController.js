import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/Users.js";
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExist = await User.findOne({ where: { email } });
    if (userExist) return res.status(400).json("user already Exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ id: user.id, name: user.name, email: user.email });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const pass = await bcrypt.compare(password, user.password);

    if (!pass) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const Usertoken = {
      name: user.name,
      userId: user.id,
    };
    const token = jwt.sign(Usertoken, process.env.SECRET);

    res.send({ token, name: user.name });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Error User Login" });
  }
};

export { loginUser, registerUser };
