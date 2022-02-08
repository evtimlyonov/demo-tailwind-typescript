module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#2ddf5c',
        navColor: '#0e4f1f',
        hostingButton: '#ff1b68',
        lightGreen: '#d5ffdc',
        priceGray: '#858585',
        recPlan: '#19b84c',
        recPlanPrice: '#0e4f1f',
        featuresBg: '#ff1b68',
        packageBg: 'rgba(213, 255, 220, 0.95)',
        packageDarkGreen: '#0e4f1f',
        packageDarkBg: 'rgba(14, 79, 31, 0.95)',
        badge: '#ff5454',
        customers: '#ff5454',
        lightGray: '#ccc',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
      },
      height: {
        '40vh': '40vh',
      },
      minWidth: {
        plans: '20rem',
        feature: '30%',
        40: '40rem',
      },
      maxWidth: {
        40: '40rem',
      },
      keyframes: {
        shacke: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        shacke: 'shacke 1s ease-in-out infinite',
        scale: 'scale 0.5s ease-in-out forwards',
      },
      backgroundPosition: {
        productOverview: '50% 25%',
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent), url('../public/images/freedom.jpg')",
      },
    },
  },
  plugins: [],
};
