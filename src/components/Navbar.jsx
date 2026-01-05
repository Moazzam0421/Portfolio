import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="sticky top-0 left-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-3 py-3 flex items-center justify-between">

                <Link to="/" className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">M</span>
                    </div>
                    <span className="text-xl font-semibold text-gray-900">
                        Moazzam
                    </span>
                </Link>



                <ul className="hidden md:flex items-center gap-8 text-gray-600">
                    <li className="hover:text-black cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-black cursor-pointer">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="hover:text-black cursor-pointer">
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li className="hover:text-black cursor-pointer">
                        <Link to="/projects">Project</Link>
                    </li>
                    <li className="hover:text-black cursor-pointer">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                <a
                    href="/Moazzam_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-block px-5 py-2 border border-black text-black rounded-lg hover:bg-black hover:text-white transition shadow-lg"
                >
                    Resume
                </a>


            </div>
        </nav>
    );
};

export default Navbar;