import { useState } from "react";
import AnimatedBackground from "../AnimatedBackground";
import profile from "../assets/profile.png";
import ProfileModal from "../components/ProfileModal";
import Moazzam from "../components/Moazzam";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";


const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">

     

      {/* Content */}
      <div className="relative flex flex-col md:flex-row min-h-screen">

         {/* Background */}
      <AnimatedBackground />

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to My Portfolio
          </h1>

          <p className="text-gray-700 text-lg mb-6">
            I am a Full Stack Developer.
          </p>

          {/* OPEN MODAL BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            View Profile
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <img
            src={profile}
            alt="Moazzam"
            className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-full shadow-lg"
          />
          <h1 className="mt-4 text-xl font-semibold">
            Mohammad Moazzam
          </h1>
        </div>
      </div>

      {/* PROFILE MODAL */}
      <ProfileModal isOpen={open} onClose={() => setOpen(false)}>
        <Moazzam />
      </ProfileModal>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
