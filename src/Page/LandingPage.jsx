import React from "react";
import { Spotlight } from "../components/ui/spotlight-new";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import Project from "./Project";
import Footer from "./Footer";

export function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-x-hidden">
      <Spotlight />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Header />
          <Home />
          <About />
          <Skills />
          <WorkExperience />
          <Project />
          <Footer />
        </div>
      </div>
    </div>
  );
}
