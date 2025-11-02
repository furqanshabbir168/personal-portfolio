import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
} from "react-icons/si";

const techs = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  { icon: <FaGithub className="text-white" />, name: "GitHub" },
  { icon: <SiPostman className="text-orange-400" />, name: "Postman" },
];

function Tech() {
  return (
    <div className="w-full bg-gray-900 py-16 sm:py-20" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-16 text-center">
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
          My Tech Stack
        </h2>
        <div className="h-1 w-24 sm:w-32 bg-white mx-auto rounded-full" />
      </div>

      {/* Grid layout for all techs */}
      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          gap-8 
          sm:gap-12 
          px-4 sm:px-6
          justify-items-center
        "
      >
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.15 }}
            className="flex flex-col items-center cursor-pointer"
          >
            {/* Removed white square background */}
            <div className="text-5xl sm:text-6xl">{tech.icon}</div>
            <span className="text-xs sm:text-sm text-white mt-3 font-medium text-center">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Tech;
