import React, { useState } from "react";

function Product() {
  const [size, setSize] = useState(0);

  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "Campanola",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, distinctio um dolor sit amet, consectetur adipisicing elit. Eveniet, distinc",
  };
  return (
    <div className="container mx-auto px-[50px] flex py-20 items-center space-x-20">
      <div className="flex items-center justify-center flex-1">
        <div>
          <img src={pizza.img} alt="" />
        </div>
      </div>
      <div className="flex-1 flex flex-col space-y-5">
        <h1 className="font-bold text-5xl">{pizza.name}</h1>
        <spans className="font-semibold text-2xl text-red-600">
          $ {pizza.price[size]}
        </spans>
        <p className="text-xl text-gray-700">{pizza.desc}</p>
        <h3 className="font-semibold text-2xl">Choose the size</h3>
        <div className="flex space-x-12 text-center">
          <div className="relative" onClick={() => setSize(0)}>
            <img
              className="h-10 mb-2 cursor-pointer"
              src="/img/size.png"
              alt=""
            />
            <span className="absolute top-0 right-[-15px] text-white bg-teal-600 px-1 text-sm rounded-lg">
              Small
            </span>
          </div>
          <div className="relative" onClick={() => setSize(1)}>
            <img
              className="h-14 mb-2 cursor-pointer"
              src="/img/size.png"
              alt=""
            />
            <span className="absolute top-0 right-[-15px] text-white bg-teal-600 px-1 text-sm rounded-lg">
              Medium
            </span>
          </div>
          <div className="relative" onClick={() => setSize(2)}>
            <img
              className="h-16 mb-2 cursor-pointer"
              src="/img/size.png"
              alt=""
            />
            <span className="absolute top-0 right-[-15px] text-white bg-teal-600 px-1 text-sm rounded-lg">
              Large
            </span>
          </div>
        </div>
        <h3 className="font-semibold text-2xl">
          Choose additional ingredients
        </h3>
        <div className="space-y-3 text-lg">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="double"
              name="double"
              className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-6 w-6 rounded"
            />
            <label
              className="text-lg ml-3 font-medium text-gray-900"
              htmlFor="double"
            >
              Double Ingredients
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-6 w-6 rounded"
            />
            <label
              className="text-lg ml-3 font-medium text-gray-900"
              htmlFor="cheese"
            >
              Extra cheese
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-6 w-6 rounded"
            />
            <label
              className="text-lg ml-3 font-medium text-gray-900"
              htmlFor="spicy"
            >
              Spicy Sauce
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="Garlic"
              name="Garlic"
              className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-6 w-6 rounded"
            />
            <label
              className="text-lg ml-3 font-medium text-gray-900"
              htmlFor="Garlic"
            >
              Garlic Sauce
            </label>
          </div>
        </div>
        <div>
          <input
            className="border bg-gray-100 p-3 w-20"
            type="number"
            defaultValue={1}
          />
          <button className="ml-5 border bg-red-500 px-5 py-3 text-white font-bold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
