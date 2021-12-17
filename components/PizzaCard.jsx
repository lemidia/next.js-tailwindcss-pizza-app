import React from "react";

function PizzaCard() {
  return (
    <div className="w-[250px] py-5 px-10 flex items-center justify-center flex-col text-center space-y-3">
      <img src="/img/pizza.png" alt="" />
      <h3 className="text-2xl font-bold text-red-500">Furi Du Zaco</h3>
      <span className="text-lg font-bold text-gray-600">$19.90</span>
      <p className="text-gray-800 font-light text">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </p>
    </div>
  );
}

export default PizzaCard;
