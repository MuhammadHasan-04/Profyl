import axios from "axios";

const baseUrl = "http://localhost:3000/api/auth";

const RegisterUser = async ({ name, email, password }) => {
  try {
    const response = await axios.post(
      `${baseUrl}/register`,
      { name, email, password },
      {
        headers: { "Content-Type": "application/json" },
      },
    );
    return response.data;
  } catch (err) {
    console.error("Registration error:", err.message);
    throw err;
  }
};

const LoginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { email, password });

    const { token, name } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("name", name);

    console.log("user logged in");
  } catch (err) {
    console.error("Login error:", err.message);
    throw err;
  }
};
