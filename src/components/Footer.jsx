import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faYoutube, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import BRAC from "../imgs/BRAC-University.svg";
import BIGD from "../imgs/logo_fotter.svg";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#2D5F94] text-white py-6 px-4 md:px-16 relative md:z-50 ">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Left Section: Logos */}
                <div className="flex items-center justify-center gap-8">
                    <a href="https://www.bracu.ac.bd/" target="_blank" rel="noopener noreferrer">
                        <img src={BRAC} alt="BRAC University" className="h-12 md:h-16" />
                    </a>
                    <a href="https://bigd.bracu.ac.bd/" target="_blank" rel="noopener noreferrer">
                        <img src={BIGD} alt="BIGD Logo" className="h-12 md:h-16" />
                    </a>
                </div>

                {/* Center Section: Contact Info */}
                <div className="text-center md:text-center text-sm md:text-base flex flex-col items-center md:items-center">
                    <p className="md:w-[60%] leading-relaxed">
                        65, Bir Uttam AK Khandakar Road (Old Brac University Campus), Mohakhali, Dhaka 1212
                    </p>
                    <p className="font-medium">Tel: 5881 0320, (+880) 1313407429</p>
                    <p className="font-medium">
                        Email: <a href="mailto:info.bigd@bracu.ac.bd">info.bigd@bracu.ac.bd</a>
                    </p>
                </div>

                {/* Right Section: Social Links */}
                <div className="flex gap-4 md:gap-6 mt-4 md:mt-0">
                    <a
                        href="https://www.facebook.com/BIGDBRACUniversity"
                        className="text-white text-xl hover:text-gray-300 transition-colors"
                    >
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                        href="https://twitter.com/BIGD_BRACU"
                        className="text-white text-xl hover:text-gray-300 transition-colors"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UC8soxka6iKBXzPLhD2XvLLA"
                        className="text-white text-xl hover:text-gray-300 transition-colors"
                    >
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/BRAC-institute-of-governance-and-development-bigd-BRAC-university"
                        className="text-white text-xl hover:text-gray-300 transition-colors"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="md:text-right text-center max-md:mt-6 text-xs md:text-sm md:mr-[60px] ">
                <p>© BIGD 2025</p>
            </div>
        </footer>
    );
};

export default Footer;
