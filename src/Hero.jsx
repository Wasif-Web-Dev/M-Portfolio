import React from "react";
import promo from "./assets/videos/websites-promo.mp4";
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <div className="text-5xl">
            {/* Hero section */}

            <div className="relative min-h-screen flex items-center justify-start w-[90%] mx-auto">
                {/* Video Section */}
                <div className="video-div w-[40%] absolute right-0 border-2 border-red-500">
                    <video className="" src={promo} autoPlay muted loop></video>
                </div>
                {/* Hero data section */}
                <div className="left-text border-2 border-sky-600">
                    <h1 className="w-full flex items-center justify-center gap-5 ">
                        {" "}
                        <span className="text-9xl font-HN_Light leading-[158px] font-thin">we create</span>
                        <span className="h-[14vh] w-[14vh] group flex items-center justify-center rounded-full bg-[#FFDC1F] hover:scale-90 transition-transform">
                            <i class="ri-play-fill group-hover:scale-[1.10] transition-all"></i>
                        </span>
                    </h1>
                    <div className="text-9xl flex items-center justify-start gap-4">
                        sites
                        <span className="text-2xl font-HN_Roman leading-6 flex flex-col items-end justify-end">
                            which increase the number of <div>applications for your business</div>
                        </span>
                        <Link to="/services" className="text-2xl text-sky-600 hover:text-sky-500">
                            Explore Services
                        </Link>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
