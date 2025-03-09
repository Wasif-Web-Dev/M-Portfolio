import React from "react";
import {Link} from "react-router-dom";
import img1 from "../imgs/logo_bigd.png";
import img2 from "../imgs/IGC-Web-RGB-Purple.png";

const Navbar = () => {
    return (
        <nav className="py-4 px-6 flex items-center justify-end w-full relative max-md:ml-[35px]  bg-white top-0 left-0 backdrop-blur-sm shadow-md  ">
            {/* Home Link */}
            <Link
                to="/"
                className="text-white text-lg md:text-xl px-4 py-2 rounded bg-[#2D5F94] mr-[2px] md:mr-[4px] 
 transition "
            >
                Home
            </Link>

            {/* Contact Link */}
            <Link to="/contact" className="text-white text-lg md:text-xl px-4 py-2 rounded bg-[#2D5F94] transition">
                Contact Us
            </Link>
            {/* Logos (Always Visible) */}
            <div className="flex items-center ml-[-8px]">
                <a href="https://bigd.bracu.ac.bd/" target="_blank" rel="noopener noreferrer">
                    <img className="w-16 md:w-20 h-auto object-contain" src={img1} alt="BIGD" />
                </a>
                <a href="https://www.theigc.org/" target="_blank" rel="noopener noreferrer">
                    <img className="w-16 md:w-32 h-auto object-contain md:ml-[-26px] ml-[-10px]" src={img2} alt="IGC" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
