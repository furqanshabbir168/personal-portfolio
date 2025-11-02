import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import cravez from "../assets/cravez.png";
import flyzone from "../assets/flyzone.png";
import furqandev from "../assets/furqandev.png";
import quickbite from "../assets/qiuckbite.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Food Ordering Platform",
      description: "A fast online food ordering website with secure auth, smooth UI, dynamic cart, OTP verification and Stripe payments.",
      image: cravez,
      tech: ["React", "Node.js", "MongoDB", "Stripe","Tailwind CSS"],
      liveLink: "https://cravez.vercel.app",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Flight Booking System",
      description: "Modern flight booking website with seat selection, secure payments, admin dashboard and real-time bookings.",
      image: flyzone,
      tech: ["React", "Tailwind", "Node", "Clerk", "Tailwind CSS"],
      liveLink: "https://flyzone.vercel.app",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A professionally designed portfolio built to help clients explore my services, view my full-stack projects, and contact me easily for web development solutions.",
      image: furqandev,
      tech: ["React", "Tailwind CSS", "Nodemailer", "Javascript"],
      liveLink: "https://furqandev-ruby.vercel.app",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Restaurant Website",
      description: "A responsive food ordering website with category-based filtering, add-to-cart logic and jwt auth. Designed with a modern UI for seamless user experience.",
      image: quickbite,
      tech: ["React", "Node Js", "Express Js", "CSS", "JWT"],
      liveLink: "#",
      githubLink: "#"
    },
    
  ];

  return (
    <div className="relative min-h-screen w-full bg-linear-to-b py-20" id="projects">
      {/* Container */}
      <div className="relative px-6 sm:px-12 max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-gray-700">
            My Work
          </h3>

          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black leading-tight text-black"
          >
            Featured Projects
          </motion.h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium max-w-2xl">
            Here are some of my recent projects that showcase my skills in building modern, 
            responsive, and user-friendly web applications with clean code and best practices.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <a 
                    href={project.liveLink}
                    className="bg-white text-gray-900 px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-100 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-800 transition"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-5 h-5 text-gray-700" />
                  <h3 className="text-xl sm:text-2xl font-bold text-black">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-gray-600 font-medium mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            <Github className="w-5 h-5" />
            View More on GitHub
          </button>
        </motion.div>

      </div>
    </div>
  );
}

export default Projects;