import React from "react";

function About() {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="space-y-4 sm:space-y-6">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-white">About Me</h2>
        <div className="space-y-4">
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Passionate Front-End Developer with over six months of freelance
            experience, skilled in transforming creative designs into visually
            stunning, user-friendly, and responsive web interfaces.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Adept at leveraging modern web technologies to build clean, functional, and
            scalable applications that enhance user experiences and drive business
            growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
          <div className="bg-zinc-900/50 rounded-lg p-4 sm:p-6">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-2">🎯 Focus Areas</h3>
            <ul className="text-zinc-400 text-sm space-y-1">
              <li>• React & Modern JavaScript</li>
              <li>• Responsive Web Design</li>
              <li>• UI/UX Implementation</li>
              <li>• Performance Optimization</li>
            </ul>
          </div>
          
          <div className="bg-zinc-900/50 rounded-lg p-4 sm:p-6">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-2">💡 Philosophy</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              I believe in creating digital experiences that are not just functional, 
              but delightful. Every line of code should serve a purpose in enhancing 
              user interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
