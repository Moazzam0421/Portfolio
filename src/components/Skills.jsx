const Skills = () => {
  return (
    <section id="skills" className="w-full bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Skills
        </h2>
        <div className="w-14 h-1 bg-gray-700 rounded-full mb-12"></div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">

          {/* Frontend */}
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-100 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">
              Frontend
            </h3>
            <div className="w-12 h-[2px] bg-gray-400 rounded-full mb-4"></div>
            <ul className="space-y-2 text-gray-700">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-100 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 ">
              Backend
            </h3>
            <div className="w-12 h-[2px] bg-gray-400 rounded-full mb-4"></div>
            <ul className="space-y-2 text-gray-700">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
            </ul>
          </div>

          {/* Tools */} 
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-100 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 ">
              Tools & Others
            </h3>
            <div className="w-20 h-[2px] bg-gray-400 rounded-full mb-4"></div>
            <ul className="space-y-2 text-gray-700">
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Deployment (Vercel / Render)</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
