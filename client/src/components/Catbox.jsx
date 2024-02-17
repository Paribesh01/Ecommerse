import React from "react";

const Catbox = () => {
  return (
    <div className=" box border border-solid w-52 relative shadow-lg  ">
      <img
        className="opacity-90  w-52"
        src="https://5.imimg.com/data5/WD/MA/MY-5511146/men-s-cotton-pant-500x500.jpg"
        alt=""
      />
      <h1 className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   p-4 rounded z-10 text-3xl font-semibold ">
        PANTS
      </h1>
    </div>
  );
};

export default Catbox;
