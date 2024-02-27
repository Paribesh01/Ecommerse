import React, { useEffect } from "react";
import Catbox from "../../components/Catbox";
import Box from "../../components/Box";
// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "./redux/slices/counter/index";

// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "./redux/slices/counter/index";
// import { user } from "../../redux/slices/user/index";
// import verifyToken from "../../util/verify";
// import { convert } from "../../redux/slices/counter/index";
import { Navigate, useNavigate } from "react-router-dom";
import verifyToken from "../../util/verify";
import axios from "axios";

const Home = () => {

const navigate = useNavigate();
  // const isUser = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  // console.log("1 "+email)
  useEffect(()=>{

    // const verifyToken = async () => {
    //   try {
    //     const response = await axios.post(
    //       "http://localhost:4000/verify",
    //       {},
    //       { withCredentials: true }
    //     );
    //     console.log("responce is " + response);
    //     if (response.data.user) {
    //       console.log("welcome");
    //       return response.data.user.email;
    //     } else {
    //       console.log("error while verifying ");
    //       navigate("/login");
          
    //     }
    //   } catch (error) {
    //     console.error("Error verifying token:", error);
        
    //     navigate("/login");
    //   }
    // };


   const checkToken = async () => {
    const result = await verifyToken();
    if (result === "no") {
      navigate("/login");
    } else {
      console.log("User email:", result);
      // Proceed with rendering the home page content for authenticated users
    }
  };

  checkToken();
    }




  ,[navigate])
  

 
  
  return (
    <div>
      <div className=" hero flex  h-full w-full items-center justify-center">
        <div className=" w-2/5">
          <p className=" text-3xl font-normal my-4">Smart Products</p>
          <h1 className=" text-7xl font-semibold  my-4 tracking-wide">
            Winter Offer 2024 Collections
          </h1>
          <button className="p-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-6 border border-blue-500 hover:border-transparent rounded my-4">
            SHOP NOW
          </button>
        </div>
        <img
          className=""
          src="https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-hm1-2.png"
          alt="image"
        />
      </div>
      <div className=" below-hero m-10">
        <div className="catagory">
          <h1 className="text-3xl">Browse By Category:</h1>
          <div className="grid grid-cols-5 gap-4 m-6">
            {/* prints 5 cat box */}
            {Array.from({ length: 5 }, (_, index) => (
              <Catbox key={index} />
            ))}
          </div>
        </div>
        <div className="Products mt-16">
          <h1 className="text-3xl mb-10">Products:</h1>
          <div className="grid grid-cols-4 gap-11">
            {Array.from({ length: 4 }, (_, index) => (
              <Box key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
