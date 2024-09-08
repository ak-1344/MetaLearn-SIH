/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        data: "#5E5C5C",
      },
      backgroundImage: {
        'logo-gradient': 'linear-gradient(180deg, #2E85EC 0.5%, #136DD6 14.5%, #08284E 79%, #061C34 100%)',
        'login-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #CCCCCC 100%)',
      },
      fontFamily: {
        inter: ['Inter','sans-serif'],
        michrome: ['Michroma', 'sans-serif'],
      },
      borderRadius: {
        '5xl': '2.5rem', 
      },
    },
  },
  plugins: [],
};
