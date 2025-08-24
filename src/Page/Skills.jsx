import React from "react";
import { CardSpotlight } from "../components/ui/card-spotlight";
import ImageOne from "/One.png";
import ImageTwo from "/2.png";
import ImageThree from "/3.png";
import ImageFouer from "/4.png";
import ImageFive from "/5.png";
import ImageSix from "/6.png";
import ImageSeven from "/7.png";
import ImageEight from "/8.png";
import ImageNine from "/9.png";
import ImageTen from "/10.png";

function Skills() {
  return (
    <div className="w-full">
      <h1 className="text-white font-semibold text-md">Technical Skills </h1>

      <div className="w-full flex item-center gap-4 mt-6">
        <CardSpotlight className="w-full rounded-2xl relative gap-4 flex items-center justify-center">
          <img src={ImageOne} alt="IMAGE" className="w-[60px] z-50" />
        </CardSpotlight>

        <CardSpotlight className="w-full rounded-2xl relative gap-4 flex items-center justify-center">
          <img src={ImageTwo} alt="IMAGE" className="w-[60px] z-50" />
        </CardSpotlight>

        <CardSpotlight className="w-full rounded-2xl relative gap-4 flex items-center justify-center">
          <img src={ImageThree} alt="IMAGE" className="w-[60px] z-50" />
        </CardSpotlight>

        <CardSpotlight className="w-full rounded-2xl relative gap-4 flex items-center justify-center">
          <img src={ImageFouer} alt="IMAGE" className="w-[60px] z-50" />
        </CardSpotlight>

        <CardSpotlight className="w-full rounded-2xl relative gap-4 flex items-center justify-center">
          <img src={ImageFive} alt="IMAGE" className="w-[60px] z-50" />
        </CardSpotlight>
      </div>

      <div className="w-full flex item-center gap-4 mt-6">
        <CardSpotlight className="w-full rounded-2xl relative gap-4 flex items-center justify-center">
          <img src={ImageSix} alt="IMAGE" className="w-[60px] z-50" />
        </CardSpotlight>

        <CardSpotlight className="w-full rounded-2xl relative gap-4 flex items-center justify-center">
          <img src={ImageSeven} alt="IMAGE" className="w-[60px] z-50" />
        </CardSpotlight>

        <CardSpotlight className="w-full rounded-2xl relative gap-4 flex items-center justify-center">
          <img src={ImageEight} alt="IMAGE" className="w-[60px] z-50" />
        </CardSpotlight>

        <CardSpotlight className="w-full rounded-2xl relative gap-4 flex items-center justify-center">
          <img src={ImageNine} alt="IMAGE" className="w-[60px] z-50" />
        </CardSpotlight>

        <CardSpotlight className="w-full rounded-2xl relative gap-4 flex items-center justify-center">
          <img src={ImageTen} alt="IMAGE" className="w-[60px] z-50" />
        </CardSpotlight>
      </div>
    </div>
  );
}

export default Skills;
