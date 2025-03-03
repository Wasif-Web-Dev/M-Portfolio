import React from "react";
import logo from "./assets/imgs/logo-en.svg";
import {Link} from "react-router-dom";
import {useState} from "react";

const languages = [
    {code: "en", name: "EN"},
    {code: "ua", name: "UA"},
    {code: "ru", name: "RU"},
];

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(languages[0]);
    return (
        <div className=" py-[1.25rem] flex items-center justify-between w-[90%] mx-auto  fixed top-0 left-1/2 -translate-x-1/2">
            <div className="flex items-center justify-center gap-[3.15rem]">
                {/* Nav logo */}
                <Link to="/" className="w-[15.625rem]">
                    <img src={logo} alt="its wasif dev" />
                </Link>
                {/* Nav Links */}
                <div className="flex items-center justify-center gap-5 ml-4">
                    <Link to="/" className="font-HN_Roman font-normal text-[1.09rem] tracking-tighter">
                        cases
                    </Link>
                    <Link to="/" className="font-HN_Roman font-normal text-[1.09rem] tracking-tighter">
                        price
                    </Link>
                    <Link to="/" className="font-HN_Roman font-normal text-[1.09rem] tracking-tighter">
                        services
                    </Link>
                    <Link to="/" className="font-HN_Roman font-normal text-[1.09rem] tracking-tighter">
                        partnership
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-center gap-[3.75rem]">
                {/* Social Icons */}
                <div className="flex items-center justify-center gap-[1.875rem]">
                    <Link to="/" className="text-[1.5rem]">
                        <i className=" ri-telegram-2-fill"></i>
                    </Link>
                    <Link to="/" className="text-[1.5rem]">
                        <i class="ri-instagram-fill"></i>
                    </Link>
                    <Link to="/" className="text-[1.5rem]">
                        <i class="ri-whatsapp-fill"></i>
                    </Link>
                    <Link to="/" className="text-[1.5rem]">
                        <i class="ri-behance-fill"></i>
                    </Link>
                </div>

                <div className="relative text-left">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-1 text-black text-sm font-HN_Roman"
                    >
                        {selected.name}
                        <span className="transition-transform">
                            <i className={isOpen ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
                        </span>
                    </button>
                    {isOpen && (
                        <ul className="absolute left-0 mt-1 w-12 bg-white shadow-lg rounded-md text-center text-black text-sm font-HN_Roman">
                            {languages.slice(1).map((lang) => (
                                <li
                                    key={lang.code}
                                    onClick={() => {
                                        setSelected(lang);
                                        setIsOpen(false);
                                    }}
                                    className="py-1 cursor-pointer hover:bg-gray-100"
                                >
                                    {lang.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="flex items-center justify-center">
                    <h1 className="text-3xl font-HN_Light tracking-tighter">
                        discuss the project
                        <span className="text-2xl">
                            <i class="ri-arrow-right-up-line"></i>
                        </span>
                    </h1>{" "}
                </div>
            </div>
        </div>
    );
};

export default Nav;
