import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Hi, I'm <span className="text-blue-400">Nandini</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
            React Developer | Problem Solver
          </h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg mx-auto">
            Building web apps with React, solving problems with Java/Python, and
            mastering Data Structures & Algorithms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              View my work
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href="#contact"
              className="flex items-center px-6 py-3 border border-gray-600 hover:bg-gray-800 text-white rounded-lg transition-colors"
            >
              Contact Me
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
