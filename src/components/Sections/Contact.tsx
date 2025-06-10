import React, { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-white mb-3">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-lg mx-auto">
          Open to collaborations, project discussions, or just a friendly chat.
          Reach out—I’d love to hear from you!
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 space-y-6">
            <div className="flex items-center">
              <div className="p-2 bg-gray-800 rounded-lg text-blue-400 mr-4">
                <Mail size={20} />
              </div>
              <div>
                <a
                  href="mailto:nandininilla@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  nandininilla@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="p-2 bg-gray-800 rounded-lg text-blue-400 mr-4">
                <Linkedin size={20} />
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/nandini-nilla-1642512a3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  linkedin.com/in/nandini-nilla
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="p-2 bg-gray-800 rounded-lg text-blue-400 mr-4">
                <Github size={20} />
              </div>
              <div>
                <a
                  href="https://github.com/Nandini-Nilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  github.com/Nandini-Nilla
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none h-32"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
