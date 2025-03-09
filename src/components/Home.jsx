import React, {useState} from "react";
import img from "../imgs/main.jpg";
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"; // Import menu icons

const Home = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="relative w-full h-screen ">
            {/* Background Image */}
            <img className="w-full h-full object-cover object-[65%]" src={img} alt="Background" />

            {/* Title Overlay */}
            <span className="absolute top-1/2 left-[60%] transform -translate-x-[70%] bg-white text-[#2D5F94] p-2  rounded -translate-y-1/2 font-sans text-3xl sm:text-5xl md:text-6xl font-bold text-center">
                Datahub Bangladesh
            </span>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="fixed top-6 left-2 z-50 bg-[#2D5F94] text-white p-3 rounded-md sm:hidden"
            >
                {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Sidebar Navigation */}
            <div
                className={`fixed top-0 left-0 w-64 sm:w-72 h-full bg-[#2D5F94] text-white flex flex-col items-center justify-center gap-6 px-6 shadow-lg  max-md:z-10
                transition-transform duration-300 ease-in-out ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } sm:translate-x-0`}
            >
                <Link
                    to="/tableau/Dashboard2023Funds"
                    className="p-2 w-full text-center hover:bg-white  hover:text-[#2D5F94] transition rounded"
                    onClick={() => setSidebarOpen(false)}
                >
                    2023 Welfare Funds Dashboard
                </Link>
                <Link
                    to="/tableau/Dashboard2022Welfare"
                    className="p-2 w-full text-center hover:bg-white hover:text-[#2D5F94] transition rounded"
                    onClick={() => setSidebarOpen(false)}
                >
                    2022 Welfare Dashboard
                </Link>
                <Link
                    to="/tableau/Dashboard2016Welfare"
                    className="p-2 w-full text-center hover:bg-white hover:text-[#2D5F94] transition rounded"
                    onClick={() => setSidebarOpen(false)}
                >
                    2016 Welfare Dashboard
                </Link>
                <Link
                    to="/data-directory"
                    className="p-2 w-full text-center hover:bg-white hover:text-[#2D5F94] transition rounded"
                    onClick={() => setSidebarOpen(false)}
                >
                    Data Directory
                </Link>
            </div>
        </div>
    );
};

export default Home;
