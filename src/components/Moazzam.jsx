import { useState } from "react";
import profile from "../assets/profile.jpg";

const Moazzam = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="p-4 flex items-center justify-center">
      
      {/* Card Wrapper */}
      <div className="w-full max-w-sm sm:max-w-md">
        
        {/* Card */}
        <div
          className={`relative h-[440px] sm:h-[480px] transition-transform duration-700 transform-style-preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >

          {/* FRONT SIDE */}
          <div className="absolute inset-0 bg-gray-50 rounded-xl shadow-xl backface-hidden p-6 border-2 border-gray-300">
            <h1 className="text-xl font-bold text-center mb-4">PROFILE</h1>

            <div className="flex justify-center">
              <img
                src={profile}
                alt="Moazzam"
                className="w-36 h-36 sm:w-40 sm:h-40 object-cover rounded-full shadow-md border-2 border-gray-300"
              />
            </div>

            <div className="text-center mt-2">
              <p className="font-bold text-md">MOHAMMAD MOAZZAM</p>
              <span className="text-gray-600 text-sm">
                FULLSTACK DEVELOPER
              </span>
            </div>

            <hr className="border-gray-900 opacity-60 my-3" />

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">· Education</span>
                <span>BCA-2025 (8.9) → MCA-2027</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">· Tech Stack</span>
                <span>MERN</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">· Focus</span>
                <span>DSA → DevOps → AI/ML</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">· Status</span>
                <span>Open to Internships</span>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button
                onClick={() => setIsFlipped(true)}
                className="text-md text-blue-900 hover:underline"
              >
                Flip the card →
              </button>
            </div>
          </div>

          {/* BACK SIDE */}
          <div className="absolute inset-0 bg-gray-50 shadow-xl backface-hidden rotate-y-180 p-6 border-2 border-gray-300 rounded-xl flex flex-col">
            
            <h3 className="text-md underline font-semibold">About Me:</h3>
            <p className="text-sm mt-1">
              Passionate Full Stack Developer focused on building scalable web
              applications. Currently strengthening DSA, MERN, DevOps & AI/ML
              fundamentals.
            </p>

            <div className="mt-3">
              <h4 className="text-md underline font-semibold mb-1">Skills:</h4>
              <ul className="text-sm space-y-1">
                <li>• C, C++, Python</li>
                <li>• MERN Stack</li>
                <li>• Data Strucure & Algorithm</li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="text-md underline font-semibold mb-1">
                Project:
              </h4>
              <p className="font-semibold">
                Role: <span className="text-sm">Database Management</span>
              </p>
              <span className="font-semibold text-blue-800 hover:underline break-all">
                https://mydrobe.vercel.app/
              </span>
            </div>

            <div className="mt-3">
              <h4 className="text-md underline font-semibold mb-1">
                Contact:
              </h4>
              <p>
                <span className="font-semibold text-gray-800">Email: </span>
                m0h4mm4dm04zz4m@gmail.com 
              </p>
              <p>
                <span className="font-semibold text-gray-800">Github: </span>
                https://github.com/Moazzam0421
              </p>
              <p>
                <span className="font-semibold text-gray-800">Linkedin: </span>
                http://www.linkedin.com/in/mohammad-moazzam-5679b0294
              </p>
            </div>

            <button
              onClick={() => setIsFlipped(false)}
              className="mt-auto text-md text-blue-900 hover:underline"
            >
              ← Flip the card
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Moazzam;
