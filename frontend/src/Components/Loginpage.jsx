import React, { useState } from "react";
import logo from "../images/logonew.png";

function Loginpage() {
  const [sourceValue, setSourceValue] = useState("");

  const handleInputChange = (event) => {
    setSourceValue(event.target.value);
  };

  return (
    <>
      <div className="bg-white rounded-3xl h-max w-11/12 mt-12 mx-12">
        <div className="flex flex-row">
          <div className="mx-20 my-auto w-2/5">
            <img src={logo} alt="Funda Logo" />
          </div>
          
          <div className="flex flex-col items-center mt-24 my-auto">
            <div className="text-dullGreen text-3xl mx-20">
              <p>Sign in to your account</p>
            </div>
            <div className="bg-limeyellow rounded-3xl h-max my-7">
              <p className="flex justify-center text-xl text-dullGreen py-5">
                <input
                  type="text"
                  placeholder="Usename"
                  value={sourceValue}
                  onChange={handleInputChange}
                  className="w-3/4 focus:outline-none text-center bg-limeyellow"
                />
              </p>
            </div>
            <div className="bg-limeyellow rounded-3xl h-max">
              <p className="flex justify-center text-xl text-dullGreen py-5">
                <input
                  type="text"
                  placeholder="Password"
                  value={sourceValue}
                  onChange={handleInputChange}
                  className="w-3/4 focus:outline-none text-center bg-limeyellow"
                />
              </p>
            </div>
            <button type="button" className="text-white hover:text-darkGreen bg-darkGreen hover:bg-white border rounded-2xl hover:border-darkGreen hover:border-2 px-6 py-2 text-xl w-1/4 mb-20 my-7">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
