import axios from "axios";
import useAuth from "../Hooks/useAuth";

export const registerUsers = async (data) => {
  const { setLoading } =  useAuth();

  try {
    setLoading(true);
    const response = await axios.post("http://localhost:3000/users", data); // Send `data` directly without wrapping it in an object
    setLoading(false);
    return response.data;
  } catch (error) {
    console.error("Error in user registration:", error);
    setLoading(false);
  }  
};
