/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#F9AF15', // Saffron
                secondary: '#675544', // Buffalo Dance
            },
            fontFamily: {
                display: ['Nunito', 'sans-serif'], // Changed to Nunito as requested
                body: ['Nunito', 'sans-serif'],
            },
        },
    },
}
