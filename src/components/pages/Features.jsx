import React from "react";

const Features = (props) => {
  return (
    <>
      <div>
        <h1 className="lg:text-[40px] text-[30px] text-center font-bold my-12">
          {props.h2}
        </h1>
        <div className="lg:mx-28 mx-6 grid grid-cols-1 place-items-center lg:grid-cols-2">
          <div className="flex justify-start items-center">
            <img
              className="grid place-content-start"
              src={props.img}
              alt=""
            ></img>
          </div>
          <div className="">
            <h2 className="text-center lg:text-left font-semibold text-[2rem] mb-3 ">
              {props.head}
            </h2>
            <p className="text-center text-[16px] lg:text-left">{props.para}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
