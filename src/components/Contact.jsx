import {useState} from "react";
import {FaPhone, FaEnvelope, FaMapMarkerAlt, FaChrome} from "react-icons/fa";

const Contact = () => {
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = new FormData(event.target);
        formData.append("access_key", "6d91be48-dd60-470e-8d5f-08df8fb9d21e");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            const result = await res.json();

            if (result.success) {
                setStatus({type: "success", message: "Your message has been sent successfully!"});
                event.target.reset();
            } else {
                setStatus({type: "error", message: "Something went wrong. Please try again."});
            }
        } catch (error) {
            setStatus({type: "error", message: "Failed to send message. Check your connection."});
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#2D5F94] flex flex-col items-center">
            {/* Contact Section */}
            <div className="flex flex-col md:flex-row justify-center gap-10 items-center w-full py-20 px-5 md:px-20 mt-16">
                {/* Contact Info */}
                <div className="text-center md:text-left md:w-1/3 space-y-6">
                    <h1 className="text-3xl font-bold text-white">Contact Us</h1>
                    <div className="flex items-center space-x-3">
                        <FaMapMarkerAlt className="text-2xl text-white" />
                        <p className="text-white text-lg">65, Bir Uttam AK Khandakar Road, Mohakhali, Dhaka 1212</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaPhone className="text-2xl text-white" />
                        <p className="text-white text-lg">+8802 5881 0306, 0320, 0326</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaEnvelope className="text-2xl text-white" />
                        <a href="mailto:marwan.rashid@gmail.com" className="text-white text-lg underline">
                            marwan.rashid@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaChrome className="text-2xl text-white" />
                        <a
                            href="https://datahubbd.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-lg underline"
                        >
                            datahubbd.org
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3 mt-10 md:mt-0">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Get in Touch</h2>

                    {status && (
                        <div
                            className={`text-center text-lg font-semibold py-2 rounded mb-4 ${
                                status.type === "success" ? "text-green-600" : "text-red-600"
                            }`}
                        >
                            {status.message}
                        </div>
                    )}

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="w-full p-3 border border-gray-300 rounded-md mb-3"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className="w-full p-3 border border-gray-300 rounded-md mb-3"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="w-full p-3 border border-gray-300 rounded-md mb-3 h-32"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition duration-300"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
