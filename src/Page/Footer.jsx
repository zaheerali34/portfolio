import React from "react";
import { MessageSquare, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Let's Connect</h2>
            <div className="relative">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 fill-pink-500 animate-pulse" />
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 fill-pink-400 absolute top-0.5 right-0.5 sm:top-1 sm:right-1 animate-bounce" />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Have an idea, a project, or just want to say hi? Drop me a message
            below or connect with me on social — I'd love to hear from you!
          </p>

          {/* Contact Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
            <a
              href="mailto:zaheerrahman.dev@gmail.com"
              className="flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-gray-900 hover:bg-blue-600 rounded-xl text-white font-medium transition-all duration-300 text-sm sm:text-base group"
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span>Email Me</span>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/zaheerrahman"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-gray-900 hover:bg-blue-700 rounded-xl text-white font-medium transition-all duration-300 text-sm sm:text-base group"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>

            {/* X (Twitter) Button */}
            <a
              href="https://x.com/zaheerr74344740"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-gray-900 hover:bg-gray-700 rounded-xl text-white font-medium transition-all duration-300 text-sm sm:text-base group"
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white text-black font-bold text-xs flex items-center justify-center rounded group-hover:bg-gray-300 transition-colors">
                X
              </div>
              <span>Twitter</span>
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/zaheerali34"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-gray-900 hover:bg-gray-800 rounded-xl text-white font-medium transition-all duration-300 text-sm sm:text-base group"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6 sm:mb-8"></div>

          {/* Footer Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm space-y-2 sm:space-y-0">
            <div>© 2025 | Zaheer Rahman Portfolio</div>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-sm transform rotate-45"></div>
                <span className="text-orange-400 font-medium">& lots of ☕</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
