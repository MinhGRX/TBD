import axios from "axios";

const VITE_APP_BASE_URL = "http://localhost:5000/api";

const baseUrl = VITE_APP_BASE_URL + "/auth";

const login = async (email, password) => {
  const response = await axios.post(`${baseUrl}/sign-in`, { email, password });
  return response.data;
};

const signup = async (data) => {
  const response = await axios.post(`${baseUrl}/sign-up`, data);
  return response.data;
};


export default { login, signup };