const Projects = () => {
  return (
    <>
    <section className="w-full bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Projects
        </h2>
        <div className="w-20 h-1 bg-gray-700 rounded-full mb-12"></div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Project Card */}
          <div className="border border-gray-200 bg-gray-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Portfolio Website
            </h3>
            <p className="text-gray-600 mb-4">
              A personal developer portfolio showcasing skills, projects,
              and contact information.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech Stack: React, Tailwind CSS
            </p>

            <div className="flex gap-4 text-sm">
              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Project Card */}
          <div className="border border-gray-200 bg-gray-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              MERN Blog Application
            </h3>
            <p className="text-gray-600 mb-4">
              Full-stack blog platform with authentication and CRUD features.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech Stack: MongoDB, Express, React, Node.js
            </p>

            <div className="flex gap-4 text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                GitHub
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Live Demo
              </a>
            </div>
          </div>

          {/* Project Card */}
          <div className="border border-gray-200 bg-gray-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              E-Commerce Store
            </h3>
            <p className="text-gray-600 mb-4">
              An e-commerce application with product listing and cart features.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech Stack: React, Redux, Node.js
            </p>

            <div className="flex gap-4 text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                GitHub
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Live Demo
              </a>
            </div>
          </div>

          {/* Project Card */}
          <div className="border border-gray-200 bg-gray-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Task Management App
            </h3>
            <p className="text-gray-600 mb-4">
              A task management tool to create, update, and track daily tasks.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech Stack: React, Tailwind CSS, Firebase
            </p>

            <div className="flex gap-4 text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                GitHub
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Live Demo
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  );
};

export default Projects;
