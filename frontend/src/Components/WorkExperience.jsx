import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const experiences = [
  {
    platform: "Fiverr",
    role: "Freelance Full-Stack Developer",
    period: "2023 - Present",
    projects: "15+ Projects",
    description:
      "Built custom web applications, REST APIs, and responsive frontends for international clients",
    step: "01",
  },
  {
    platform: "Upwork",
    role: "Full-Stack Developer",
    period: "2023 - Present",
    projects: "10+ Projects",
    description:
      "Developed MERN stack applications, integrated payment systems, and created admin dashboards",
    step: "02",
  },
  {
    platform: "Personal Projects",
    role: "Independent Developer",
    period: "2022 - Present",
    projects: "20+ Projects",
    description:
      "Created portfolio projects including e-commerce platforms, social media apps, and SaaS tools",
    step: "03",
  },
];

function WorkExperience() {
  return (
    <div className="relative w-full bg-gray-900 py-16 sm:py-20 overflow-hidden">
      {/* background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-80 sm:w-96 h-80 sm:h-96 bg-gray-900 rounded-full opacity-10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-80 sm:w-96 h-80 sm:h-96 bg-gray-900 rounded-full opacity-10 blur-3xl"
        />
      </div>

      {/* content */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm sm:text-base font-bold">My Journey</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-24 sm:w-32 bg-white mx-auto rounded-full" />
        </motion.div>

        {/* timeline */}
        <div className="space-y-20 sm:space-y-0">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-16 mb-16 sm:mb-32`}
              >
                {isLeft ? (
                  <>
                    {/* Left side content */}
                    <div className="flex-1 sm:text-right text-center order-2 sm:order-1 px-3 sm:px-0">
                      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
                        <div className="inline-block px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-black text-white text-xs sm:text-sm font-bold mb-4">
                          {exp.platform}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-black mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 justify-center sm:justify-end">
                          <span className="text-gray-600 text-xs sm:text-sm font-bold">
                            📅 {exp.period}
                          </span>
                          <span className="text-gray-600 text-xs sm:text-sm font-bold">
                            🚀 {exp.projects}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center sm:text-right">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    {/* Step Circle */}
                    <div className="relative z-10 order-1 sm:order-2 mb-4 sm:mb-0">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2 + 0.3,
                        }}
                        viewport={{ once: true }}
                        className="w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg"
                      >
                        <span className="text-lg sm:text-2xl font-black text-black">
                          {exp.step}
                        </span>
                      </motion.div>

                      {/* Line Connector */}
                      {index < experiences.length - 1 && (
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: "100px" }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.2 + 0.5,
                          }}
                          viewport={{ once: true }}
                          className="absolute top-14 sm:top-20 left-1/2 -translate-x-1/2 w-1 bg-white hidden sm:block"
                        />
                      )}
                    </div>

                    <div className="flex-1 hidden sm:block order-3" />
                  </>
                ) : (
                  <>
                    <div className="flex-1 hidden sm:block order-1" />
                    <div className="relative z-10 order-1 sm:order-2 mb-4 sm:mb-0">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2 + 0.3,
                        }}
                        viewport={{ once: true }}
                        className="w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg"
                      >
                        <span className="text-lg sm:text-2xl font-black text-black">
                          {exp.step}
                        </span>
                      </motion.div>

                      {index < experiences.length - 1 && (
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: "100px" }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.2 + 0.5,
                          }}
                          viewport={{ once: true }}
                          className="absolute top-14 sm:top-20 left-1/2 -translate-x-1/2 w-1 bg-white hidden sm:block"
                        />
                      )}
                    </div>

                    <div className="flex-1 sm:text-left text-center order-2 sm:order-3 px-3 sm:px-0">
                      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
                        <div className="inline-block px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-black text-white text-xs sm:text-sm font-bold mb-4">
                          {exp.platform}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-black mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 justify-center sm:justify-start">
                          <span className="text-gray-600 text-xs sm:text-sm font-bold">
                            {exp.period}
                          </span>
                          <span className="text-gray-600 text-xs sm:text-sm font-bold">
                            {exp.projects}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center sm:text-left">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
