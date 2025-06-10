import React from "react";

const projects = [
  {
    title: "Store Management System",
    description:
      "Inventory and product management system with supplier, category, and expiry tracking, built using Python, Tkinter, and Oracle. Includes CRUD operations, data analysis, and mobile notifications.",
    image:
      "https://images.pexels.com/photos/3862374/pexels-photo-3862374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tech: ["Python", "Tkinter", "Oracle", "MySQL"],
  },
  {
    title: "WhatsApp Chat Analyzer",
    description:
      "A web application that analyzes WhatsApp chat exports and provides insightful visualizations and statistics. Users can upload their chat history to gain insights about conversation patterns, active hours, and message frequency.",
    image:
      "https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AO_yfEts-s8q8FmZb4uDdHA.png",
    tech: ["Python", "Matplotlib", "HTML/CSS", "Django"],
  },
  {
    title: "Amazon Clone App",
    description:
      "A fully responsive Amazon-inspired e-commerce web application built with React.js. Features include product browsing, cart management, user authentication, and checkout functionality with real-time UI updates.",
    image:
      "https://user-images.githubusercontent.com/96736424/251945936-86f9a378-0c3b-4de8-8fce-bb7dca79cba6.png",
    tech: ["React.js", "React Router", "Bootstrap ", "Context API"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills and
            expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
