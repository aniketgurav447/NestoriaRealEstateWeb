



// import React from "react";

// const Hero = () => {
//   return (
//     <section className="relative h-screen w-screen">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-center bg-cover bg-no-repeat"
//         style={{ backgroundImage: "url('/src/assets/bg.png')" }}
//       ></div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/30"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-[1240px] mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
//         <div className="text-white max-w-3xl mt-50">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight lg:leading-tight capitalize">
//             Explore{" "}
//             <span className="bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">
//               Exceptional properties
//             </span>{" "}
//             located in stunning surroundings
//           </h2>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import { useTranslation } from "react-i18next";
import { assets } from "../assets/data";
import bgImage from "../assets/bg.png";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-screen">
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        // style={{ backgroundImage: "url('/src/assets/bg.png')" }}
          //  style={{ backgroundImage: `url(${assets.bg})` }}
            // style={{ backgroundImage: `url(${assets.bg})` }}
            style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-[1240px] mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-white max-w-3xl mt-50">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight lg:leading-tight capitalize">
            {t("exploreProperties")}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;

