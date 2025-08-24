import React from "react";
import { ExternalLink } from "lucide-react";

const WorkExperience = () => {
  return (
    <div className="w-full text-white rounded-lg max-w-4xl mx-auto py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-white font-semibold text-md">Work Experience</h2>
      </div>

      <div className="space-y-1">
        <div className="flex items-start space-x-4">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-px h-20 bg-gray-600 mt-2"></div>
          </div>

          {/* Content */}
          <div className="flex-1 pb-8">
            {/* Date */}
            <div className="text-gray-400 text-sm mb-2">
              Oct 2024 - Dec 2024
            </div>

            {/* Position Title */}
            <h3 className="text-md font-semibold text-white mb-1">
              Frontend Developer
            </h3>

            {/* Company */}
            <div className="text-gray-300 mb-4">Freelancing</div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">
              Web Developer Freelance Front-End Developer with six months of
              hands-on experience. Adept at transforming creative designs into
              responsive, user-friendly interfaces, I have delivered both web
              and frontend development solutions that meet client needs
              efficiently and effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
