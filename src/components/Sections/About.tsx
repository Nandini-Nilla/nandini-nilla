import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
          {" "}
          {/* Remove gap utility */}
          <div className="md:w-1/2 flex justify-center mb-4">
            {" "}
            {/* Add bottom margin for mobile, adjust as needed (mb-4 is 1rem) */}
            <img
              src="src/assets/myimage.jpg"
              alt="Nandini"
              className="rounded-lg shadow-xl w-[300px] h-[300px] object-cover"
            />
          </div>
          <div className="md:w-1/2 md:ml-[10px]">
            {" "}
            {/* Add left margin for desktop */}
            <div className="space-y-6 text-gray-400">
              <p className="text-lg leading-relaxed">
                I'm Nandini, a passionate web developer specializing in building
                dynamic applications with React.js. With strong foundations in
                Java and Python, I develop full-stack solutions while applying
                Data Structures & Algorithms for optimal performance.
              </p>

              <p className="text-lg leading-relaxed">
                My development approach combines frontend design with backend
                logic and algorithmic thinking. I enjoy creating responsive user
                interfaces, solving complex problems, and writing clean,
                efficient code that delivers real value.
              </p>

              <p className="text-lg leading-relaxed">
                When not coding, I contribute to open-source projects,
                participate in coding competitions, and continuously explore new
                technologies to enhance my skills in software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
