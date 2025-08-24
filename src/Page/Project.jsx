import React from "react";
import { CardSpotlight } from "../components/ui/card-spotlight";
import { ExternalLink, Github } from "lucide-react";
import ImageTwo from "/imageTwo.png";
import imageThree from "/imageThree.png";
import imageFour from "/imageFour.png";

function Project() {
  return (
    <div className="w-full">
      <h1 className="text-white font-semibold text-md">Project</h1>

      <div className="w-full py-4 flex item-center flex-col gap-4">
        <CardSpotlight className="w-full rounded-2xl relative gap-4 flex items-center justify-center">
          <div className="z-50">
            <h2 className="text-white font-semibold text-md">
              Notion Clone Web App
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm py-2">
              React Firebase Web App — Built a responsive web app using React.js
              and Firebase. Added user authentication, form validation, and
              real-time database features. Deployed on Vercel with GitHub
              integration.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/zaheerali34/notion"
                className="flex items-center gap-2 px-3 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-white font-medium transition-all duration-300"
                target="_blank" 
             >
                <Github className="w-4 h-4" />
                Github
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="https://notion-alpha-eight.vercel.app/"
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-white font-medium transition-all duration-300"
              >
                Live Link
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <img
            src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F5C7NtlBoB6HzY8XIoDIHnf%2F88df067473d442a90d7798683a08cccc%2Fin_app_gallery.png&w=3840&q=75"
            alt="this image"
            className="z-50 w-[15rem]"
          />
        </CardSpotlight>

        <CardSpotlight className="w-full rounded-2xl relative flex items-center justify-center gap-4">
          <div className="z-50">
            <h2 className="text-white font-semibold text-md">
              E-Commerce Web Application (React + Redux + Vercel Deployment)
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm py-2">
              Built a responsive e-commerce app with product search, add-to-cart
              system, and image slider using React.js, Redux Toolkit, and
              Tailwind CSS. Deployed on Vercel with optimized performance and
              modern UI/UX.
            </p>
            <div className="flex gap-4 pt-4">
              <a
              target="_blank"
                href="https://github.com/zaheerali34/Blinkit-Clone"
                className="flex items-center gap-2 px-3 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-white font-medium transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                Github
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
              target="_blank"
                href="https://blinkit-clone-topaz.vercel.app/"
                className="flex items-center gap-2 px-3 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-white font-medium transition-all duration-300"
              >
                Live Link
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <img
            src={ImageTwo}
            alt="this image"
            className="z-50 w-[15rem] rounded-sm"
          />
        </CardSpotlight>

        <CardSpotlight className="w-full rounded-2xl relative flex items-center justify-center gap-4">
          <div className="z-50">
            <h2 className="text-white font-semibold text-md">
              Landing Page Clone Animated
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm py-2">
              Designed and developed an interactive landing page using React.js,
              incorporating smooth animations to enhance user.
            </p>
            <div className="flex gap-4 pt-4">
              <a
              target="_blank"
                href="https://github.com/zaheerali34/HTML-CSS-JS-Project-QCLAY"
                className="flex items-center gap-2 px-3 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-white font-medium transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                Github
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
              target="_blank"
                href="https://myqclay.netlify.app/"
                className="flex items-center gap-2 px-3 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-white font-medium transition-all duration-300"
              >
                Live Link
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <img
            src={imageThree}
            alt="this image"
            className="z-50 w-[15rem]  rounded-sm"
          />
        </CardSpotlight>

        <CardSpotlight className="w-full rounded-2xl relative gap-4 flex items-center justify-center">
          <div className="z-50">
            <h2 className="text-white font-semibold text-md">Magma Clone</h2>
            <p className="text-gray-300 leading-relaxed text-sm py-2">
              Home Page Created a dynamic, interactive feed showcasing user Home
              Pages Design with Responsive Design Profile Page Designed a user
              Profile interface displaying personal details, skills, and
              activity history.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-white font-medium transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                Github
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#"
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-white font-medium transition-all duration-300"
              >
                Live Link
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <img
            src={imageFour}
            alt="this image"
            className="z-50 w-[15rem]  rounded-sm"
          />
        </CardSpotlight>
      </div>
    </div>
  );
}

export default Project;
