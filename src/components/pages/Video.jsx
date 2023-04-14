import React from "react";

const Video = (props) => {
  return (
    <>
      <div className="lg:mx-28 mx-8 my-20 grid grid-cols-1 place-items-center lg:grid-cols-2">
        <div className="text-center lg:text-start lg:order-first order-last">
          <h2 className="font-semibold text-[2rem] mb-3">{props.head}</h2>
          <p>{props.para}</p>
        </div>
        <div className="flex justify-start items-center">
          <img
            className="grid place-content-start w-[90vh] "
            src={props.img}
            alt="abc"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Video;
