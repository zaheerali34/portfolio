import React from "react";
import { ExternalLink } from "lucide-react";

const WorkExperience = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="space-y-6 sm:space-y-8">
        <div className="text-center sm:text-left">
          <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">Work Experience</h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            My professional journey in web development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>
          
          <div className="space-y-8 sm:space-y-12">
            <div className="flex items-start space-x-4 sm:space-x-6">
              {/* Timeline Dot */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
                <div className="w-0.5 h-8 sm:h-12 bg-gradient-to-b from-purple-500/50 to-transparent mt-2"></div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8 bg-zinc-900/30 rounded-lg p-4 sm:p-6 hover:bg-zinc-900/50 transition-all duration-300">
                {/* Date */}
                <div className="text-blue-400 text-sm sm:text-base font-medium mb-2">
                  Oct 2024 - Dec 2024
                </div>

                {/* Position Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  Frontend Developer
                </h3>

                {/* Company */}
                <div className="text-zinc-300 text-sm sm:text-base mb-4 font-medium">Freelancing</div>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  Web Developer Freelance Front-End Developer with six months of
                  hands-on experience. Adept at transforming creative designs into
                  responsive, user-friendly interfaces, I have delivered both web
                  and frontend development solutions that meet client needs
                  efficiently and effectively.
                </p>

                {/* Technologies Used */}
                <div className="mt-4">
                  <h4 className="text-white font-medium text-sm mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "JavaScript", "TailwindCSS", "Firebase", "Vercel"].map((tech, index) => (
                      <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Goals Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 sm:p-8 border border-blue-500/20">
          <h3 className="text-white font-bold text-lg sm:text-xl mb-4">🚀 What's Next?</h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            I'm actively seeking new opportunities to work with innovative teams and 
            contribute to meaningful projects. Whether it's a startup, established company, 
            or exciting freelance project, I'm ready to bring my skills and passion to the table.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
