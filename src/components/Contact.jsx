
const Contact = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact me
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Feel free to reach out for opportunities, collaboration, or just a quick chat.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">

          {/* Email */}
          <a
            href="momoazzam2140@gmail.com"
            className="border border-gray-200 rounded-xl p-6 text-center hover:border-gray-900 transition bg-gray-100 shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Email
            </h3>
            <p className="text-gray-600">
              m0h4mm4dm04zz4m@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="http://www.linkedin.com/in/mohammad-moazzam-5679b0294"
            target="_blank"
            className="border border-gray-200 rounded-xl p-6 text-center hover:border-gray-900 transition bg-gray-100 shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              LinkedIn
            </h3>
            <p className="text-gray-600">
              Connect professionally
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://"
            target="_blank"
            className="border border-gray-200 rounded-xl p-6 text-center hover:border-gray-900 transition bg-gray-100 shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              WhatsApp
            </h3>
            <p className="text-gray-600">
              Quick message
            </p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
