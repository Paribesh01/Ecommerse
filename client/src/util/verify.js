import axios from "axios";

const verifyToken = async () => {
  try {
    const response = await axios.post(
      "http://localhost:4000/verify",
      {},
      { withCredentials: true }
    );

    console.log("responce is " + response);
    if (response.data.user.email) {
      console.log("welcome " + response.data.user.email);
      return response.data.user.email;
      // navigate("/");
    } else {
      console.log("error while verifying ");
      return "no";
    }
  } catch (error) {
    console.error("Error verifying token:", error);
    return "no";
  }
};

export default verifyToken;
