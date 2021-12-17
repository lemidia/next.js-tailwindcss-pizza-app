import React from "react";
import PizzaCard from "./PizzaCard";

function PizzaList() {
  return (
    <div>
      <div className="container mx-auto px-[50px] py-[30px] flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">
          The Best Pizza In Town
        </h1>
        <p className="text-xl text-gray-800 w-[80%] mb-10 text-center text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque omnis
          corrupti magni alias nulla soluta quis perspiciatis, officia sed
          inventore exercitationem esse et quibusdam nisi ducimus. Expedita
          incidunt asperiores nostrum?
        </p>
        <div className="flex flex-wrap items-center justify-center w-[100%]">
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
        </div>
      </div>
    </div>
  );
}

export default PizzaList;
