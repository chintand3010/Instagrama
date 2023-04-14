import React from "react";
// import * as cheerio from "cheerio";
import { load } from "cheerio";
const Show = (props) => {
  const store = props.img;
  const $ = load(store);

  const videoString = $("meta[property='og:video']").attr("content"); // IGTV
  const imgString = $("meta[property='og:image']").attr("content"); //IMG

  //   return videoString;
  if (videoString) {
    console.log("video");
  } else {
    console.log("error");
  }
  if (imgString) {
    console.log("img");
  }

  function downloadFile(elmnt) {
    console.log("--------->>run");
    const url = store;
    const options = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    fetch(url, options).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "file";
        a.click();
      });
    });
  }
  return (
    <>
      {/* <div className="w-full"> 
        <img
          className=" h-52 w-auto"
          src={store}
          alt="img"
          style={{ objectFit: "cover" }}
        ></img>
        <button
          className="text-black cursor-pointer bg-slate-500 px-5 py-3 rounded-2xl"
          onClick={() => downloadFile()}
        >
          Download
        </button>
      </div> */}
      <div>
        <div className="grid place-items-center">
          <img src={store} alt="aaa" className="" />
        </div>
      </div>
      <button
        className="text-black cursor-pointer  bg-red-700 px-5 py-3 rounded-2xl"
        onClick={() => downloadFile()}
      >
        Download
      </button>
    </>
  );
};
export default Show;
