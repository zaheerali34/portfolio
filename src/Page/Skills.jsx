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
  const skills = [
    { name: "HTML", image: ImageOne },
    { name: "CSS", image: ImageTwo },
    { name: "JavaScript", image: ImageThree },
    { name: "TailwindCSS", image: ImageFouer },
    { name: "SASS", image: ImageFive },
    { name: "React Js", image: ImageSix },
    { name: "TypeScript", image: ImageSeven },
    { name: "Node Js", image: ImageEight },
    { name: "Figma", image: ImageNine },
    { name: "Frimer motion", image: ImageTen },
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="space-y-6 sm:space-y-8">
        <div className="text-center sm:text-left">
          <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">Technical Skills</h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <CardSpotlight 
              key={index}
              className="aspect-square rounded-xl relative flex flex-col items-center justify-center p-2 sm:p-4 hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={skill.image} 
                alt={`${skill.name} icon`} 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 z-50 object-contain" 
              />
              <span className="text-white text-xs sm:text-sm font-medium mt-2 text-center z-50">
                {skill.name}
              </span>
            </CardSpotlight>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8">
          <div className="bg-zinc-900/50 rounded-lg p-4 sm:p-6">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <span className="text-blue-400">🚀</span> Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {["React", "JavaScript", "TypeScript", "HTML/CSS", "TailwindCSS"].map((skill, index) => (
                <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-4 sm:p-6">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <span className="text-green-400">⚡</span> Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express Js", "REST APIs", "Mongo DB"].map((skill, index) => (
                <span key={index} className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <span className="text-purple-400">🛠️</span> Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "Vercel", "Figma"].map((skill, index) => (
                <span key={index} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
