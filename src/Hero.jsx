import React from "react";
import promo from "./assets/videos/websites-promo.mp4";

const Hero = () => {
    return (
        <div className="text-5xl">
            {/* Hero section */}

            <div className="relative">
                <div className="video-div w-[40%] absolute right-0 border-2 border-red-500">
                    <video className="" src={promo} autoPlay muted loop></video>
                </div>
                <div className="left-text border-2">
                    <h1 className="text-5xl">Welcome to our website Hello my name is wasif and iam from wazirabad i am a front-end developer i do not know who i am  and will i be az</h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
