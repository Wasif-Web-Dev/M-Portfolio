import React from "react";
import {Link} from "react-router-dom";
import img1 from "../imgs/logo_bigd.png";
import img2 from "../imgs/IGC-Web-RGB-Purple.png";

const Navbar = () => {
    return (
        <div className="py-4 flex items-center justify-end w-full fixed top-0 left-1/2 -translate-x-1/2 backdrop-blur-sm z-50">
            <div className="flex items-center gap-12 z-50 mr-[60px]">
                {/* Home Link */}
                <Link to="/" className="text-white bg-[#2d5f94] text-xl px-4 py-2 rounded">
                    Home
                </Link>

                {/* External Links with Images */}
                <a href="https://bigd.bracu.ac.bd/" target="_blank" rel="noopener noreferrer">
                    <img className="w-28 h-28" src={img1} alt="BIGD" />
                </a>

                <a href="https://www.theigc.org/" target="_blank" rel="noopener noreferrer">
                    <img className="w-28 h-28" src={img2} alt="IGC" />
                </a>

                {/* Contact Link */}
                <Link to="/contact" className="text-white bg-[#2d5f94] text-xl px-4 py-2 rounded">
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
