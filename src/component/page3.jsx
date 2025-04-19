import React from "react";

const Page3 = () => {
  return (
    <div className="bg-black h-screen w-full flex flex-col justify-center items-center text-white">
      {/* Title Section */}
      <div className="relative text-[10vw] leading-none text-center">
        <p className="absolute -left-60 top-1/2 transform -translate-y-1/2 font-light "> ( </p>
        <h1>DESIGN</h1>
        <h1>THAT SPEAKS</h1>
        <p className="absolute -right-60 top-1/2 transform -translate-y-1/2 font-light"> ) </p>
      </div>

      {/* Video Section */}
      <div className="flex items-center justify-center gap-10 mt-10 text-lg">
        <p>Precise. Innovative.</p>
        <div className="h-20 w-40 overflow-hidden rounded-lg">
          <video
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
            src="./hero.mp4"
          ></video>
        </div>
        <p>Futuristic. Expressive.</p>
      </div>
    </div>
  );
};

export default Page3;
