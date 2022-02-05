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
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      height: {
        '40vh': '40vh',
      },
      minWidth: {
        plans: '20rem',
        feature: '30%',
      },
    },
  },
  plugins: [],
};
