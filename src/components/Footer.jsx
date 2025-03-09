import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faYoutube, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import BRAC from "../imgs/BRAC-University.svg";
import BIGD from "../imgs/logo_fotter.svg";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#2D5F94] text-white py-6 px-4 md:px-16 flex items-center relative z-50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-start">
                {/* Left Section: Logos */}
                <div className="flex items-center gap-14 md:gap-14">
                    <Link to="https://www.bracu.ac.bd/">
                        <img src={BRAC} alt="BRAC University" className="h-16" />
                    </Link>
                    <Link to="https://bigd.bracu.ac.bd/">
                        <img src={BIGD} alt="BIGD Logo" className="h-16" />
                    </Link>
                </div>

                {/* Center Section: Contact Info */}
                <div className="text-center md:text-left  text-sm flex items-center  flex-col justify-start">
                    <p className="text-xl  md:w-[50%]">
                        65, Bir Uttam AK Khandakar Road (Old Brac University Campus), Mohakhali, Dhaka 1212
                    </p>
                    <p className="text-xl ">Tel: 5881 0320, (+880) 1313407429</p>
                    <p className="text-xl">
                        Email: <a href="mailto:info.bigd@bracu.ac.bd">info.bigd@bracu.ac.bd</a>
                    </p>
                </div>

                {/* Right Section: Social Links */}
                <div className="flex gap-6  mt-4 md:mt-0 ">
                    <a
                        href="https://www.facebook.com/BIGDBRACUniversity"
                        className="text-white text-xl hover:text-black transition-colors"
                    >
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                        href="https://twitter.com/BIGD_BRACU"
                        className="text-white text-xl hover:text-black transition-colors"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UC8soxka6iKBXzPLhD2XvLLA"
                        className="text-white text-xl hover:text-black transition-colors"
                    >
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/BRAC-institute-of-governance-and-development-bigd-BRAC-university"
                        className="text-white text-xl hover:text-black transition-colors"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="md:text-right text-center text-sm mt-6">
                <p>© BIGD 2025</p>
                {/* <a href="#" className="underline">
                    Privacy Policy
                </a> */}
            </div>
        </footer>
    );
};

export default Footer;
// hover:bg-white hover:text-[#2D5F94] p-2 rounded-full
