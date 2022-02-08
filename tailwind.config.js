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
        backdrop: 'rgba(0, 0, 0, 0.5)',
        'feat-circle-bg': '#ffcede',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
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
        menu: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        backdrop: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'move-up': {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-2%)' },
          '100%': { transform: 'translateY(-5%)' },
        },
      },
      animation: {
        shacke: 'shacke 1s ease-in-out infinite',
        scale: 'scale 0.5s ease-in-out forwards',
        menu: 'menu 0.5s ease-out forwards',
        backdrop: 'backdrop 0.5s ease-out forwards',
        'move-up': 'move-up 200ms ease-out forwards',
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
