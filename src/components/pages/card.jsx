import React from "react";
import image1 from "../image/Group 11.png";
import image2 from "../image/grop_1.png";
import image3 from "../image/Group 13.png";

const Card = () => {
  const data = [
    {
      id: 1,
      imageUrl: image1,
      name: "Copy the URL",
      description:
        "Open the Instagram application or website, and copy the URL of the photo, video, reels, carousel, or IGTV.",
    },
    {
      id: 1,
      imageUrl: image2,
      name: "Paste the link",
      description:
        "Go back to iGram, paste the link into the field and click the Download button.",
    },
    {
      id: 1,
      imageUrl: image3,
      name: "Download",
      description:
        "Quickly you will get the results with several quality options. Download what fits your needs.",
    },
  ];

  return (
    <>
      <div className=" py-10  ">
        <h2 className="next1 font-semibold text-[40px] text-center ">
          How To Download From Instagram?
        </h2>
        <p className="text-[20px] text-center my-6 mx-4 ">
          You must follow these three steps to downlode photos, videos, and
          reels from instagram. See their description below.
        </p>

        <div className="flex justify-center gap-4 flex-wrap lg:flex-nowrap py-10 animate-pulse ">
          {data.map((item, id) => (
            <div
              className="bg-[white] w-[21rem] h-[23rem] rounded-3xl drop-shadow-[0px_7px_5px_rgba(0,0,0,0.4)] mt-10 lg:mt-0"
              key={id}
            >
              <img className="w-[22rem]" src={item.imageUrl} alt="first" />
              <div>
                <h2 className="text-center py-6  text-2xl font-bold">
                  {item.name}
                </h2>
                <p className="text-center py-3  px-14  w-full justify-items-stretch">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
