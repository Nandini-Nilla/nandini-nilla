import React from "react";
import {
  Cpu,
  Code,
  Layout,
  Database,
  Cloud,
  GitBranch,
  LineChart,
  BrainCircuit,
} from "lucide-react";

const skillCategories = [
  {
    icon: <Cpu size={20} className="text-blue-400" />,
    title: "Programming Languages",
    skills: ["Java", "C", "Python"],
  },
  {
    icon: <Layout size={20} className="text-blue-400" />,
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Django"],
  },
  {
    icon: <Database size={20} className="text-blue-400" />,
    title: "Databases & Cloud",
    skills: ["MySQL", "AWS"],
  },
  {
    icon: <GitBranch size={20} className="text-blue-400" />,
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    icon: <BrainCircuit size={20} className="text-blue-400" />,
    title: "Other Technical Skills",
    skills: ["Problem Solving & DSA", "OOPs", "Data Science Fundamentals"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            Technical Skills
          </h2>

          <p className="text-gray-400">
            Technologies and methodologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-blue-400 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-700 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-base font-medium text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
