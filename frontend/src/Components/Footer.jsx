import logo from "../assets/logo-1.png";
import { Instagram, Linkedin, Facebook } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide uppercase">
              Furqan
            </h1>
          </div>

          <p className="mt-6 text-base sm:text-lg text-gray-300 font-medium max-w-xl leading-relaxed">
            As an aspiring Full-Stack Developer, I’m eager to join a collaborative environment where I can grow, build innovative projects, and deliver meaningful user experiences.
          </p>

          <div className="flex gap-6 mt-8">
            <a
              href="#"
              target="_blank"
              className="text-white hover:text-gray-400 transition-all hover:-translate-y-1"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-white hover:text-gray-400 transition-all hover:-translate-y-1"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-white hover:text-gray-400 transition-all hover:-translate-y-1"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 sm:text-right">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer transition-colors"><a href="#hero">Home</a></li>
            <li className="hover:text-white cursor-pointer transition-colors"><a href="#about">About Me</a></li>
            <li className="hover:text-white cursor-pointer transition-colors"><a href="#projects">Projects</a></li>
            <li className="hover:text-white cursor-pointer transition-colors"><a href="#skills">Skills</a></li>
            <li className="hover:text-white cursor-pointer transition-colors"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} by <span className="font-semibold text-white">Furqan</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
