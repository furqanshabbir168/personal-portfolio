import { motion } from "framer-motion";
import { Code, Server, Layers, PlugZap, Sparkles } from "lucide-react";

function AboutMe() {
  const skills = [
    {
      icon: Code,
      title: "Frontend Developer",
      description: "React, Tailwind CSS, Responsive Design"
    },
    {
      icon: Server,
      title: "Backend Developer",
      description: "Node.js, Express, RESTful APIs"
    },
    {
      icon: Layers,
      title: "Full Stack Apps",
      description: "End-to-end web applications"
    },
    {
      icon: PlugZap,
      title: "API Integration",
      description: "Third-party services & databases"
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-linear-to-br from-gray-50 via-white to-gray-100 flex items-center py-20" id="about">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-gray-200 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gray-300 rounded-full opacity-20 blur-3xl"
        />
      </div>

      {/* Container */}
      <div className="relative px-6 sm:px-12 max-w-6xl mx-auto w-full">

        {/* Header with badge */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center sm:items-start"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full mb-4 shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-bold">Full-Stack Developer</span>
          </motion.div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-gray-700">
            About Me
          </h3>

          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black leading-tight text-gray-900 mt-2"
          >
            Personal Summary
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 120 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-linear-to-r from-gray-900 to-gray-600 mt-4 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 text-base sm:text-lg text-gray-600 font-medium max-w-3xl leading-relaxed"
          >
            I'm a passionate Full-Stack Web Developer with practical experience
            building modern, scalable applications using React, Node.js,
            Express.js, MongoDB, and Tailwind CSS. I enjoy turning ideas into
            real products, focusing on clean UI, smooth UX, authentication,
            secure APIs, dashboards, and database logic. Currently looking for
            opportunities to collaborate and grow.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-8 mt-8"
          >
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-black text-black">10+</span>
              <span className="text-sm text-gray-600 font-bold">Projects Built</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-black text-black">5+</span>
              <span className="text-sm text-gray-600 font-bold">Technologies</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-black text-black">100%</span>
              <span className="text-sm text-gray-600 font-bold">Dedication</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}
                className="relative bg-gray-900 text-white py-8 px-5 rounded-xl shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center group overflow-hidden"
              >
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  >
                    <Icon className="w-8 h-8 text-gray-900" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-center mb-2">
                    {skill.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 text-center font-medium">
                    {skill.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-5 rounded-bl-full" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
          >
            Download Resume
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}

export default AboutMe;
