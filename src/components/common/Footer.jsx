import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white mt-16">
        <div className=" grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col lg:ml-10 gap-7 my-5">
            <div className="text-3xl lg:text-start text-center">inlifa</div>
          </div>
          <div className="flex justify-around items-center flex-wrap my-10 list-none">
            <div className="">
              <li>photo</li>
              <li>video</li>
              <li>IGTV</li>
            </div>
            <div className="">
              <li>Reels</li>
              <li>Story</li>
            </div>
            <div className="text-right">
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms $ Conditions</li>
            </div>
          </div>
        </div>
        <div className=" text-center pb-5">
          © 2020-2022 iGram. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
