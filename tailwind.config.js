/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                HN_Light: ["HelveticaNeueCyr-Light", "sans-serif"],
                HN_Roman: ["HelveticaNeueCyr-Roman", "sans-serif"],
            },
        },
    },
    plugins: [],
};
