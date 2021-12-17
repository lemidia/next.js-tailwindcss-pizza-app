import React from "react";
import Image from "next/image";
function Navbar() {
  return (
    <div className="bg-red-500 sticky top-0">
      <div className="container mx-auto h-[100px] px-[50px] flex items-center justify-between">
        <div className="flex items-center flex-[1]">
          <div className=" bg-white rounded-xl p-2 w-12 h-12">
            <img className="" src="/img/telephone.png" alt="phone" />
          </div>

          <div className="ml-5 text-white">
            <h3 className="text-sm font-semibold">Order Now!</h3>
            <h3 className="text-lg font-bold">012 345 678</h3>
          </div>
        </div>
        <div className="flex items-center justify-center flex-[3]">
          <ul className="flex items-center text-white space-x-6 font-[500]">
            <li>Homepage</li>
            <li>Products</li>
            <li>Menu</li>
            <img className="h-[70px] w-[160px]" src="/img/logo.png" alt="" />
            <li>Events</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex items-center flex-[1] justify-end">
          <div className="relative">
            <img className="h-[30px] w-[30px]" src="/img/cart.png" alt="" />
            <div className="absolute top-[-12px] right-[-12px] bg-white rounded-full w-6 h-6 p-1 flex items-center justify-center font-bold text-red-500">
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
