/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**"],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '375px'},
      'md': {'min': '376px','max': '595px'},
      '596':{'min': '596px','max': '766px'},
      'lg': {'min': '767px','max': '1020px'},
     'xl': {'min': '1021px','max': '1440px'},
     '4k':{'min': '1441px','max': '2560px'},
    
    }
  },
  plugins: [require("rippleui")],
}
