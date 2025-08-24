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
    <div className="w-full h-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden px-6">
      <Spotlight />
      <div className="max-w-3xl h-full">
        <Header />
        <Home />
        <About />
        <Skills />
        <WorkExperience />
        <Project />
        <Footer />
      </div>
    </div>
  );
}
