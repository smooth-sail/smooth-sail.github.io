/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],

  theme: {
    extend: {
      colors: {
        "ss-white": "ffffff",
        "ss-blgr": "#239cba",
        "ss-blgr-hover": "#28B1D4",
        "ss-bl": "#23395b",
        "ss-coral": "#eb9486",
      },
    },
  },
  plugins: [],
};
