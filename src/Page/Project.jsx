import React from "react";
import { CardSpotlight } from "../components/ui/card-spotlight";
import { ExternalLink, Github } from "lucide-react";
import ImageTwo from "/imageTwo.png";
import imageThree from "/imageThree.png";
import imageFour from "/imageFour.png";

function Project() {
  return (
    <section id="projects" className="w-full py-8 sm:py-12 lg:py-16">
      <div className="space-y-6 sm:space-y-8">
        <div className="text-center sm:text-left">
          <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">Featured Projects</h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            A collection of projects that showcase my skills and passion for web development
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
        <CardSpotlight className="w-full rounded-2xl relative p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 z-10">
            <div className="flex-1 z-50 space-y-4">
              <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                Notion Clone Web App
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                React Firebase Web App — Built a responsive web app using React.js
                and Firebase. Added user authentication, form validation, and
                real-time database features. Deployed on Vercel with GitHub
                integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://github.com/zaheerali34/notion"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-white font-medium transition-all duration-300 text-sm"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href="https://notion-alpha-eight.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-300 text-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 lg:w-80 z-50">
              <img
                src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F5C7NtlBoB6HzY8XIoDIHnf%2F88df067473d442a90d7798683a08cccc%2Fin_app_gallery.png&w=3840&q=75"
                alt="Notion Clone Project Screenshot"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="w-full rounded-2xl relative p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
            <div className="flex-1 z-50 space-y-4">
              <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                E-Commerce Web Application
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Built a responsive e-commerce app with product search, add-to-cart
                system, and image slider using React.js, Redux Toolkit, and
                Tailwind CSS. Deployed on Vercel with optimized performance and
                modern UI/UX.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/zaheerali34/Blinkit-Clone"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-white font-medium transition-all duration-300 text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://blinkit-clone-topaz.vercel.app/"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-300 text-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 lg:w-80 z-50">
              <img
                src={ImageTwo}
                alt="E-Commerce Project Screenshot"
                className="w-full h-auto rounded-lg shadow-lg z-50"
              />
            </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="w-full rounded-2xl relative p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
            <div className="flex-1 z-50 space-y-4">
              <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                Landing Page Clone Animated
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Designed and developed an interactive landing page using React.js,
                incorporating smooth animations to enhance user experience and engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/zaheerali34/HTML-CSS-JS-Project-QCLAY"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-white font-medium transition-all duration-300 text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://myqclay.netlify.app/"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-300 text-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 lg:w-80 z-50">
              <img
                src={imageThree}
                alt="Landing Page Project Screenshot"
                className="w-full h-auto rounded-lg shadow-lg z-50"
              />
            </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="w-full rounded-2xl relative p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
            <div className="flex-1 z-50 space-y-4">
              <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                Magma Clone
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Created a dynamic, interactive feed showcasing user home pages with responsive design. 
                Designed a user profile interface displaying personal details, skills, and activity history.
              </p>
               <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/zaheerali34/Project-Magma-HTML-CSS-JS"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-white font-medium transition-all duration-300 text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://projectmagma.netlify.app/"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-300 text-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 lg:w-80 z-50">
              <img
                src={imageFour}
                alt="Magma Clone Project Screenshot"
                className="w-full h-auto rounded-lg shadow-lg z-50"
              />
            </div>
          </div>
        </CardSpotlight>
        </div>
      </div>
    </section>
  );
}

export default Project;
