import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";
export const TEST_API = `${BASE_API}/test`;

export const getUser = async () => {
  const response = await axios.get(`${TEST_API}`);
  console.log("response", response);
  return response.data;
};