/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Cinzel'],
        'Inter': ['Inter']
      },
      backgroundImage: {
        'bistroImg': "url('/src/assets/home/chef-service.jpg')",
        'featuredImg': "url('/src/assets/home/featured2.jpg')",
        'authImg': "url('/src/assets/others/authentication.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}

