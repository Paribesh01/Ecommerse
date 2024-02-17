import React from "react";
import Box from "../../components/Box";

const Shop = () => {
  return (
    <div className="m-10 ">
      <h1 className=" text-5xl font-semibold ml-16 mb-10">Products: </h1>
      <div className="grid grid-cols-4 gap-5  m-6 ml-16">
        {/* prints 5 cat box */}
        {Array.from({ length: 10 }, (_, index) => (
          <Box key={index} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
