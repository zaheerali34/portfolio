import React from "react";
import { MessageSquare, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <div className="text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <h2 className="text-xl font-bold text-white">Let's Connect</h2>
          <div className="relative">
            <Heart className="w-10 h-10 text-pink-500 fill-pink-500 animate-pulse" />
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400 absolute top-1 right-1 animate-bounce" />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-md mb-12 max-w-2xl mx-auto leading-relaxed">
          Have an idea, a project, or just want to say hi? Drop me a message
          below or connect with me on social — I'd love to hear from you!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 bg-gray-900 rounded-xl text-white font-medium transition-all duration-300"
          >
            <MessageSquare className="w-4 group-hover:text-blue-400 transition-colors" />
            <span className="text-[13px]">Leave a Message</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/zaheerrahman"
             target="_blank" 
            className="flex items-center gap-3 px-4 py-2 bg-gray-900 rounded-xl text-white font-medium transition-all duration-300"
          >
            <Linkedin className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
            <span className="text-[13px]">Linkedin</span>
          </a>

          {/* X (Twitter) Button */}
          <a
            href="https://x.com/zaheerr74344740"
             target="_blank" 
            className="flex items-center gap-3 px-4 py-2 bg-gray-900 rounded-xl text-white font-medium transition-all duration-300"
          >
            <div className="w-5 h-5 bg-white text-black font-bold text-xs flex items-center justify-center rounded group-hover:bg-gray-300 transition-colors">
              X
            </div>

            <span className="text-[13px]">X (formerly Twitter)</span>
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/zaheerali34"
             target="_blank" 
            className="flex items-center gap-3 px-4 py-2 bg-gray-900 rounded-xl text-white font-medium transition-all duration-300"
          >
            <Github className="w-5 h-5 group-hover:text-purple-400 transition-colors" />

            <span className="text-[13px]">GitHub</span>
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-700 mb-8"></div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="mb-4 sm:mb-0">© 2025 | Portfolio</div>
          <div className="flex items-center gap-2">
            Made with
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-sm transform rotate-45"></div>
              <span className="text-orange-400 font-medium">A</span>
            </div>
            by Zaheer Rahman
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
