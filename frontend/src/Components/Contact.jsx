function Contact() {
  return (
    <div className="w-full bg-white py-20 px-6" id="contact">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mb-8">
          Have a project idea or want to collaborate? Let’s build something amazing together!
        </p>
        <a
          href="mailto:furqanshabbir234@gmail.com"
          className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
        >
          Send Mail
        </a>
      </div>
    </div>
  );
}

export default Contact;
