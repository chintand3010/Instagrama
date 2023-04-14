import React, { useState } from "react";
import axiosInstance from "../../apiInstances/axiosInstance";
import Features from "./Features";
import Video from "./Video";
import Card from "./card";
import pho from "../image/73 1.png";
import phone from "../image/Screenshot 2023-01-17 151816 1.png";
import createaccount from "../image/https___later 1.png";
import phone1 from "../image/instagram-reels-removebg-preview 1.png";
import createaccount1 from "../image/hero-image-removebg-preview 1.png";
import Question from "./Question";

const Head = (props) => {
  const [DownloadLink, setDownloadLink] = useState("");
  const [TypeUrl, setTypeUrl] = useState("");
  // -------------------------apicalling
  const GetDownloadData = async () => {
    await axiosInstance
      .post("api/download", {
        url: TypeUrl,
      })
      .then((res) => {
        console.log("res ------->>>", res);
        setDownloadLink(res?.data?.downloadLink);
      })
      .catch((err) => {
        console.log("err --->", err);
      });
    props.abc(DownloadLink);
  };

  console.log("------->> DownloadLink", DownloadLink);

  return (
    <>
      <div className="main">
        <div className="background bg-gradient-to-r ">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div className="py-10 mx-5">
            <div className="lg:mx-32 mx-10 flex justify-between items-center  text-white ">
              <div className=" fontsy lg:text-[45px] text-[20px] text-center ">
                inlifa
              </div>
              <div className="lg:text-[20px] text-[15px] text-center">
                Language
              </div>
            </div>
          </div>
          <div className=" py-20 mx-5">
            <div className=" py-5 text-white">
              <div>
                <div className="flex justify-center text-[40px]">
                  <h6 className="font-semibold animate-bounce text-center text-3xl ">
                    Instagram Video Download
                  </h6>
                </div>
                <div className="flex justify-center text-[22px] text-center text-xl">
                  <p>
                    Downlode Video Instagram, Photo, Reels, Stories, IGTV online
                  </p>
                </div>
              </div>
            </div>
            <div
              id="form"
              className="mx-auto  max-w-full border-white hover:shadow-lg md:flex md:max-w-2xl md:rounded-lg md:border-5 md:bg-white md:shadow"
            >
              <div className="relative flex flex-nowrap items-stretch w-full mb-6 md:mb-0 rounded-lg h-10 shadow-lg md:shadow-none">
                <input
                  id="url"
                  type="text"
                  placeholder=" Paste URL Instagram "
                  className="url flex-shrink flex-grow h-full leading-normal w-px flex-1 p-4 text-lg relative mb-4 focus:outline-none md:mb-0 rounded-l-lg text-black"
                  onChange={(e) => {
                    setTypeUrl(e.target.value);
                  }}
                />
                <div className="flex select-none">
                  <span
                    id="paste"
                    className="paste flex items-center bg-orange-400 hover:bg-gray-300 border-2 border-gray-200 leading-normal px-4 pl-6  whitespace-nowrap rounded-r-lg md:rounded-lg cursor-pointer"
                  >
                    Paste
                  </span>
                </div>
              </div>

              <button
                className="w-full appearance-none rounded-lg bg-gradient-to-tl from-green-400 to-blue-600 px-4 py-2 text-xl font-semibold text-white  focus:outline-none md:w-3/12 md:rounded-r-lg "
                type="submit"
                id="submit"
                onClick={(e) => {
                  GetDownloadData(TypeUrl);
                }}
              >
                Download
              </button>
            </div>
          </div>
        </div>
        <Card />
        <Features
          h2="All features of fbgrama.App"
          head="Photos Downloader"
          para="Instagram Photo Downloder from inlifa allows you to save any photo or collage from instagram without any difficulty. With inlifa you can downlode a single post as well as download multipal instagram photos."
          img={pho}
        />
        <Video
          head="Videos Downloader"
          para=" inlifa is created to enable you to download videos for any purpose you want, inlita supports video downloading for singular videos and multiple videos from carousels."
          img={phone}
        />
        <Features
          head="IGTV Downloder"
          para="IGTV is a long video type. If you can watch it now, you can download IGTV videos to your device to be sure that you can return to watching later, without the need to be online or in case the IGTV can be deleted."
          img={createaccount}
        />
        <Video
          head="Reels Downloder"
          para="Reels is a new video format that clones the principle of Instagram, Download Instagram Reels videos with the help of inlifa. Our Instagram Reel downloader can help you to save your favorite Roels videos."
          img={phone1}
        />
        <Features
          head="Instagram Story Downloder"
          para="Instagram stories are a unique way for anyone to share their everyday life with photos and videos with everyone Sometimes you want to archive a story you like but the feature is not supported in the app, inlifa was created to solve that problem; to help people download Instagram stories and watch them online."
          img={createaccount1}
        />
      </div>
      <Question />
    </>
  );
};

export default Head;
