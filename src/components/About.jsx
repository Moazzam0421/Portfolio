const About = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          About Me
        </h2>
        <div className="w-32 h-1 bg-gray-700 rounded-full mb-10"></div>

        {/* Content */}
        <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-5">
          <p>
            I am an <span className="font-semibold text-gray-900">MCA student</span> at
            Kamla Nehru Institute of Technology, Sultanpur.
          </p>

          <p>
            I am passionate about{" "}
            <span className="font-semibold text-gray-900">
              Full Stack Development
            </span>{" "}
            and enjoy building scalable, user-focused web applications.
          </p>

          <p>
            Currently, I am strengthening my skills in{" "}
            <span className="font-semibold text-gray-900">MERN stack</span> and{" "}
            <span className="font-semibold text-gray-900">
              Data Structures & Algorithms
            </span>
            .
          </p>

          <p>
            I am also keen to explore{" "}
            <span className="font-semibold text-gray-900">DevOps</span> and{" "}
            <span className="font-semibold text-gray-900">AI/ML</span> in the future.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
