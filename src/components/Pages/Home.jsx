import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Categories";

export default function Home() {
  const categories = useLoaderData();
//   console.log(categories);
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-[#9538E2] to-[#9538E2] rounded-2xl pb-28">
        <h1 className="text-5xl font-bold mb-4 text-white">
          Welcome to GadgetHeaven!
        </h1>
        <p className="text-lg font-normal mb-8 text-white">
          Your go-to destination for the latest and greatest gadgets.
        </p>

        <a href='#shopNow' className="btn px-6 py-3 bg-white text-[#9538E2] font-semibold rounded-full transition">
          Shop Now
        </a>
      </div>

      <div className="w-8/12 mx-auto relative bottom-16 rounded-2xl z-50">
        <img
          className="rounded-2xl border-2 p-8  w-[80%] mx-auto"
          src="../banner.jpg"
        />
      </div>

      <div>
        <h1 id="shopNow" className="text-center font-bold text-4xl mb-14">
          Explore Cutting-Edge Gadgets
        </h1>

        <div className="lg:flex">
          <div className="w-[20%]">
          <Categories categories={categories}></Categories>
          </div>
         <div className="w-[80%]">
         <Outlet></Outlet>
         </div>
        </div>
      </div>
    </div>
  );
}
