import React, { useState } from "react";
import Dashboard from "./Dashboard";
import bg_image from "../images/landing-page.png";

const HomePage = () => {
  return (
    <>
      <div className="relative z-10">
        <img
          src={bg_image}
          className="h-svh w-[100%] absolute inset-0"
          alt="background_image"
        />
      </div>

      <div className="relative z-20 flex">
        <Dashboard />
        <div className="h-auto w-[140vh] bg-white border rounded-3xl ml-7 mt-16 my-7">
          <div className="flex flex-row min-h-[65%] px-8 py-6">
            <div className="flex flex-col min-w-[60%] bg-slate-300 rounded-3xl m-4">
              Graph
            </div>
            <div className="flex flex-col min-w-[35%] m-4">
              <div className="min-w-[35%] text-center text-2xl">
                Recent Transaction
              </div>
              <div className="bg-darkGreen rounded-3xl m-4 min-h-[87%] flex-col justify-center ">
                <div className="bg-slate-200 rounded-3xl h-max mb-3 max-w-[87%] flex">
                  <p className="flex justify-center text-lg text-slate-200 py-5 text-center">
                    <div
                      // value={sourceValue}
                      // onChange={handleInputChange}
                      className=" focus:outline-none text-center bg-slate-200 text-black text-xl"
                    >
                      Total Income: 50,000
                    </div>
                  </p>
                </div>
                <div className="bg-slate-200 rounded-3xl h-max mb-3 max-w-[87%] flex">
                  <p className="flex justify-center text-lg text-slate-200 py-5">
                    <div
                      // value={sourceValue}
                      // onChange={handleInputChange}
                      className=" focus:outline-none text-center bg-slate-200 text-black text-xl"
                    >
                      Total Income: 50,000
                    </div>
                  </p>
                </div>
                <div className="bg-slate-200 rounded-3xl h-max mb-3 max-w-[87%] flex">
                  <p className="flex justify-center text-lg text-slate-200 py-5">
                    <div
                      // value={sourceValue}
                      // onChange={handleInputChange}
                      className=" focus:outline-none text-center bg-slate-200 text-black text-xl"
                    >
                      Total Income: 50,000
                    </div>
                  </p>
                </div>
                <div className="bg-slate-200 rounded-3xl h-max mb-3 max-w-[87%] flex">
                  <p className="flex justify-center text-lg text-slate-200 py-5">
                    <div
                      // value={sourceValue}
                      // onChange={handleInputChange}
                      className=" focus:outline-none text-center bg-slate-200 text-black text-xl"
                    >
                      Total Income: 50,000
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row px-8 py-2 min-h-[30%]">
            <div className="flex flex-col min-w-[50%] m-4">
              <div className="bg-darkGreen rounded-3xl h-max mb-3 max-w-[87%]">
                <p className="flex justify-center text-lg text-darkGreen py-5">
                  <div
                    // value={sourceValue}
                    // onChange={handleInputChange}
                    className=" focus:outline-none text-center bg-darkGreen text-white text-xl"
                  >
                    Total Income: 50,000
                  </div>
                </p>
              </div>
              <div className="bg-darkGreen rounded-3xl h-max mb-3 max-w-[87%]">
                <p className="flex justify-center text-lg text-darkGreen py-5">
                  <div
                    // value={sourceValue}
                    // onChange={handleInputChange}
                    className=" focus:outline-none text-center bg- text-white text-xl"
                  >
                    Estimated Expense: 8,000
                  </div>
                </p>
              </div>
            </div>
            <div className="flex flex-col min-w-[50%] m-4">
              <div className="bg-darkGreen rounded-3xl h-max mb-3 max-w-[87%]">
                <p className="flex justify-center text-lg text-darkGreen py-5">
                  <div
                    // value={sourceValue}
                    // onChange={handleInputChange}
                    className=" focus:outline-none text-center bg-darkGreen text-white text-xl"
                  >
                    Total Expense: 15,000
                  </div>
                </p>
              </div>
              <div className="bg-darkGreen rounded-3xl h-max mb-3 max-w-[87%]">
                <p className="flex justify-center text-lg text-darkGreen py-5">
                  <div
                    // value={sourceValue}
                    // onChange={handleInputChange}
                    className=" focus:outline-none text-center bg-darkGreen text-white text-xl"
                  >
                    Total Savings: 35,000
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
