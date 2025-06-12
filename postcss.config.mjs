const config = {

  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.5s ease-out',
      },
    },
  },

};


export default config;
