const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-8 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p className="text-gray-800 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Moazzam · Full Stack Developer
        </p>

        {/* Right */}
        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://github.com"
            target="_blank"
            className="text-gray-800 hover:text-gray-900 transition"
          >
            GitHub
          </a>

          <a
            href="https://"
            target="_blank"
            className="text-gray-800 hover:text-gray-900 transition"
          >
            LinkedIn
          </a>

          <a
            href="momoazzam2140@gmail.com"
            className="text-gray-800 hover:text-gray-900 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
