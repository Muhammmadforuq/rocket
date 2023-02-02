/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'thicccboi':['THICCCBOI','sans-serif']
      },
      fontSize:{
        10:"0.625rem",
        42:"2.625rem",
        50:"3.125rem",
      },
      colors:{
        brand:{
          "black":"#121229",
          "light-black":"#39394f",
          "gray":"#e6e6ed",
          blue:{
            300:"#e1e0ff",
            400:"#0082f3",
          },
          "orange":"#ffe4b0",
          teal:{
            300:"#c3edff",
            400:"#e6f1ff",
          },
          "gray":"#c7c7d0",
          "purple":"#7371ff"
        }

      },  
      borderRadius:{
        "3rem":"3rem",
        "30px":"1.875rem",
        "40px":"2.5rem",
        
      },
      spacing:{
        70:"4.375rem",
        60:"4.375rem",
      },
      lineHeight:{
        66:"66px"
      },
      keyframes: {
        spin: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
       },
       animation: {
        spin: 'spin 35s linear infinite',
       },    
    },
  },
  plugins: [],

}

