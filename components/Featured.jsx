import React from "react";

function Featured() {
  const images = ["/img/bg.png"];
  return (
    <div className="bg-red-500">
      <div className="container mx-auto px-[50px] flex flex-col md:flex-row items-center py-20 space-x-14">
        <div className="text-white text-5xl font-bold text-center space-y-5 flex-1">
          <h3>HOT & SPICY</h3>
          <h1 className="text-8xl">PIZZA</h1>
          <h3 className="border-t-4 border-white w-[10%] mx-auto"></h3>
          <h3 className="">50% OFF</h3>
          <h3 className="text-6xl">ORDER NOW!</h3>
        </div>
        <div className="flex-1">
          <img
            className="object-contain max-h-[1200px]"
            src="/img/pizza-7957.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Featured;
