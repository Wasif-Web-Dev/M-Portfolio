import React from "react";
import img from "../imgs/main.jpg";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="w-full">
            <img className="" src={img} alt="" />
            <span className="absolute top-1/2 left-[40%] font-sans text-white text-6xl flex items-center justify-center">
                Datahub Bangladesh
            </span>
            <div className="fixed text-white top-0 z-50 flex items-center bg-[#2D5F94] flex-col justify-center gap-10 backdrop-blur-sm h-full px-8">
                <Link to="/tableau/Dashboard2023Funds" className="p-2 w-full text-center">
                    2023 WELFARE FUNDS DASHBOARD
                </Link>
                <Link to="/tableau/Dashboard2022Welfare" className="p-2 w-full text-center">
                    2022 WELFARE DASHBOARD
                </Link>
                <Link to="/tableau/Dashboard2016Welfare" className="p-2 w-full text-center">
                    2016 WELFARE DASHBOARD
                </Link>
                <Link to="/data-directory" className="p-2 w-full text-center">
                    DATA DIRECTORY
                </Link>
            </div>
        </div>
    );
};

export default Home;
