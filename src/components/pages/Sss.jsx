// import React from "react";
// // import "./ClientSlider.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import FounderImageFirst from "../../../Common/Img/Home/FounderImageFIrst.svg";
// import FounderImageFirst from "../img/Image.svg";

// // import FounderImageSecond from "../../../Common/Img/Home/FounderImageSecond.svg";
// import FounderImageSecond from "../img/Image.svg";

// // import StraightQuotes from "../../../Common/Img/Home/StraightQuotes.svg";
// import StraightQuotes from "../img/Image.svg";

// const Sss = () => {
//   var settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };
//   const ClientSliderData = [
//     {
//       id: 1,
//       clientImage: FounderImageFirst,
//       clientDescription:
//         "I'm convinced that Tan θ deserves all the acclodes it has received so far. Confident that this team will scale great hei I'm convinced that Tan θ deserves all the acclodes it has received so far. Confident that this team will scale great heights very soon.",
//       clientName: "Tanner Adams",
//       clientPosition: "Founder CelebVue",
//     },
//     {
//       id: 2,
//       clientImage: FounderImageSecond,
//       clientDescription:
//         "I'm convinced that Tan θ deserves all the acclodes it has received so far. Confident that this team will scale great hei I'm convinced that Tan θ deserves all the acclodes it has received so far. Confident that this team will scale great heights very soon.",
//       clientName: "Tan θ",
//       clientPosition: "CTO CelebVue       ",
//     },
//   ];
//   return (
//     <>

//       <Slider {...settings} className="z-0">

//         {ClientSliderData.map((element) => {
//           return (
//             <div
//               className="grid grid-cols-1 lg:grid-cols-3 client-details w-fit relative"
//               key={element.id}
//             >
//               <div className="m-auto mb-10 lg:mb-0 w-fit">
//                 <img
//                   src={element.clientImage}
//                   alt={element.clientName}
//                   className="w-40 md:w-52 lg:w-80"
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </Slider>
//       {/* </section> */}
//     </>
//   );
// };
// export default Sss;
