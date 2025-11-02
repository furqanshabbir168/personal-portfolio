import bg from "../assets/hero.png";
import { Instagram, Linkedin, Facebook } from "lucide-react";

function Hero() {
  return (
    <div
      className="relative h-[500px] sm:h-[650px] w-full bg-cover bg-center mt-20 flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    id="hero">

      {/* Content */}
      <div className="relative max-w-2xl px-6 sm:px-12">
        <h2 className="text-4xl sm:text-6xl font-black leading-tight text-gray-900 mt-2">
          Hi, I'M
        </h2>
        <h2 className="text-4xl sm:text-6xl font-black leading-tight uppercase text-gray-900">
          Furqan Shabbir
        </h2>

        <p className="mt-6 text-base sm:text-lg text-gray-600 font-medium max-w-xl leading-relaxed">
          I design and build modern, scalable web applications, from clean,
          interactive frontends to secure backend systems, APIs, authentication,
          dashboards, and database logic as a full stack developer.
        </p>

        {/* Icons */}
        <div className="flex gap-6 mt-8">
          <a href="#" target="_blank">
            <Facebook className="w-6 h-6 text-black hover:text-gray-500 cursor-pointer transition-all hover:-translate-y-1" />
          </a>
          <a href="#" target="_blank">
            <Instagram className="w-6 h-6 text-black hover:text-gray-500 cursor-pointer transition-all hover:-translate-y-1" />
          </a>
          <a href="https://www.linkedin.com/in/furqan-shabbir-344b2b36b/" target="_blank">
            <Linkedin className="w-6 h-6 text-black hover:text-gray-500 cursor-pointer transition-all hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;

