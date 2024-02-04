import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";
// export const TEST_API = `${BASE_API}/test`;

//findDonations
export const getAllListings = async () => {
  const response = await axios.get(`${BASE_API}/listings`);
  console.log("response", response.data);
  return response.data;
};

//specified search
export const getSearchedListings = async ({what, where}) => {
  
  try{
    const response = await axios.get(`${BASE_API}/listings`, {
    params: {what, where}
  });
  console.log("response", response.data);
  return response.data;

  } catch (error) {
    console.log('Error data :', error);
  }
  
};


//volunteer with us



