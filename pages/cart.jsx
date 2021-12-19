import React from "react";

function Cart() {
  return (
    <div className="container mx-auto px-50px] py-20 flex items-start space-x-10">
      <div className="flex-[2]">
        <table className="w-[100%] border-b border-gray-200 shadow">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-2 text-xs text-gray-500">Product</th>
              <th className="px-6 py-2 text-xs text-gray-500">Name</th>
              <th className="px-6 py-2 text-xs text-gray-500">Extras</th>
              <th className="px-6 py-2 text-xs text-gray-500">Price</th>
              <th className="px-6 py-2 text-xs text-gray-500">Quantity</th>
              <th className="px-6 py-2 text-xs text-gray-500">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="px-6 py-4">
                <div>
                  <img className="h-10" src="/img/pizza.png" alt="" />
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                <span className="">Coralzo</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Double ingredients, spicy sauce
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">$19.90</td>
              <td className="px-6 py-4 text-sm text-gray-500">2</td>
              <td className="px-6 py-4 text-sm text-gray-500">$39.80</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-1 text-xl justify-center">
        <div className="space-y-5 shadow-lg bg-gray-700 text-white p-10">
          <h2 className="text-4xl font-bold border-b-4 pb-3">Cart Total</h2>
          <h3>Sub Total : $13.12</h3>
          <h3>DisCount : $0.00</h3>
          <h3>Total : 13.12</h3>
          <button className="text-white px-4 py-3 font-bold shadow bg-red-500 hover:bg-red-400 transition duration-200 hover:scale-105">
            Check Out Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
