import React from "react";
import group from "../img/group.svg";
const Steps = () => {
  const data = [
    {
      id: 1,
      imageUrl: group,
      name: "Copy the URL",
      description:
        "From Facebook, copy the link of a video that you wish to download, then paste the link in SnapSave",
    },
    {
      id: 1,
      imageUrl: group,
      name: "Paste the link",
      description:
        "Go back to the browser tab, having SaveFrom window already opened, and paste the link into the input field. The Facebook video downloader usually runs automatically, if not, press the Download button.",
    },
    {
      id: 1,
      imageUrl: group,
      name: "Download",
      description: "Wait for our server to process and download your device.",
    },
  ];

  return (
    <>
      <div className="my-10 ">
        <h2 className="font-semibold text-[40px] text-center">
          How To Download From Instagram?
        </h2>
        <p className="text-[20px] text-center my-6 mx-4 ">
          You must follow these three easy steps to download photos, videos, and
          reels from Instagram. See their description below.
        </p>

        <div className="flex justify-center gap-4 flex-wrap lg:flex-nowrap">
          {data.map((item, id) => (
            <div  className="bg-[white] w-[22rem] h-[26rem] rounded-3xl drop-shadow-[0px_7px_5px_rgba(0,0,0,0.4)] mt-10 lg:mt-0"  key={id}>
            
              <img className="w-[22rem]" src={item.imageUrl} alt="first" />
              <div>
                <h2 className="text-center py-4 text-2xl font-bold" >
                  {item.name}
                </h2>
                <p className="text-center py-1 px-12 w-fit">
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

export default Steps;
