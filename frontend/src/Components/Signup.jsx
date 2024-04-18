import React, { useState } from "react";
import logo from "../images/logonew.png";

function Signup() {
  const [sourceValue, setSourceValue] = useState("");

  const handleInputChange = (event) => {
    setSourceValue(event.target.value);
  };

  return (
    <>
      <div className="bg-white rounded-3xl h-max w-11/12 mt-8 mx-12">
        <div className="flex flex-row">
          <div className="mx-32 my-auto w-2/5">
            <img src={logo} alt="Funda Logo" />
          </div>
          
          <div className="flex flex-col items-center my-auto">
            <div className="text-dullGreen text-3xl mx-8 mb-5 mt-2">
              <p>Create your account</p>
            </div>
            <div className="bg-limeyellow rounded-3xl h-max mb-3">
              <p className="flex justify-center text-lg text-dullGreen py-5">
                <input
                  type="text"
                  placeholder="Username"
                  value={sourceValue}
                  onChange={handleInputChange}
                  className="w-3/4 focus:outline-none text-center bg-limeyellow"
                />
              </p>
            </div>
            <div className="bg-limeyellow rounded-3xl h-max mb-3">
              <p className="flex justify-center text-lg text-dullGreen py-5">
                <input
                  type="number"
                  placeholder="Monthly Income"
                  value={sourceValue}
                  onChange={handleInputChange}
                  className="w-3/4 focus:outline-none text-center bg-limeyellow"
                />
              </p>
            </div>
            <div className="bg-limeyellow rounded-3xl h-max mb-3">
              <p className="flex justify-center text-lg text-dullGreen py-5">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={sourceValue}
                  onChange={handleInputChange}
                  className="w-3/4 focus:outline-none text-center bg-limeyellow"
                />
              </p>
            </div>
            <div className="bg-limeyellow rounded-3xl h-max mb-3">
              <p className="flex justify-center text-lg text-dullGreen py-5">
                <input
                  type="email"
                  placeholder="Email-id"
                  value={sourceValue}
                  onChange={handleInputChange}
                  className="w-3/4 focus:outline-none text-center bg-limeyellow"
                />
              </p>
            </div>
            <div className="bg-limeyellow rounded-3xl h-max mb-3">
              <p className="flex justify-center text-lg text-dullGreen py-5">
                <input
                  type="text"
                  placeholder="Password"
                  value={sourceValue}
                  onChange={handleInputChange}
                  className="w-3/4 focus:outline-none text-center bg-limeyellow"
                />
              </p>
            </div>
            <button type="button" className="text-white hover:text-darkGreen bg-darkGreen hover:bg-white border rounded-2xl hover:border-darkGreen hover:border-2 py-2 px-auto text-xl w-1/4 mb-5">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
