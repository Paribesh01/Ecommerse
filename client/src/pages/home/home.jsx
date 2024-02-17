import React from "react";
import Catbox from "../../components/Catbox";
import Box from "../../components/Box";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "./redux/slices/counter/index";
import { convert } from "../../redux/slices/counter/index";

const Home = () => {
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
          alt=""
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
