import React from "react";

const Question = () => {
  const data = [
    {
      id: 1,
      que: "what is Instagram video Downloder?",
      icon: "+",
    },
    {
      id: 2,
      que: "What type of file formats does inlifa support for downloadeing?",
      icon: "+",
    },
    {
      id: 3,
      que: "What device are compatible with the inlifa Downloder?",
      icon: "+",
    },
    {
      id: 4,
      que: "Are there any limits on the number of videos I can download?",
      icon: "+",
    },
    {
      id: 5,
      que: "Can I save other than video content on this site?",
      icon: "+",
    },
    {
      id: 6,
      que: "How to Download Instagram Photos and Videos Online?",
      icon: "+",
    },
    {
      id: 7,
      que: "Can I Download Photos and Videos from Any User?",
      icon: "+",
    },
    {
      id: 8,
      que: "What is the highest quality of images and videos I can download?",
      icon: "+",
    },
    {
      id: 9,
      que: "Instagram Reels download is allowed?",
      icon: "+",
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-6 flex flex-col items-center justify-center relative overflow-hidden sm:py-12">
        <div className="lg:text-[40px] text-[30px] text-center font-bold my-12 text-lg sm:text-sm ">
          <h1>Frquenty asked questions</h1>
        </div>
        {data.map((item, index) => (
          <div
            className="border-2 w-9/12 border-black-300 my-3 mx-40 py-2  px-3 rounded-md font-semibold text-[14px] flex justify-between"
            key={index}
          >
            <span>{item.que}</span>
            <span>{item.icon}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Question;
