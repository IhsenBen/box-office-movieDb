module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {  fontFamily: {
    display: ['Inter', 'system-ui', 'sans-serif'],
    body: ['Inter', 'system-ui', 'sans-serif'],
  },
  extend: {
    colors:{
   
    },
    maxHeight:{
      116:"29rem", /*464px*/
      125:"31.25rem", /*500px*/
      140:"35rem", /*560px*/
      150:"37.5rem", /*600px*/
      190:"47.5rem", /*760px*/
    },
    height:{
      116:"29rem", /*464px*/
      125:"31.25rem", /*500px*/
      140:"35rem", /*560px*/
      150:"37.5rem", /*600px*/
    },
    minHeight:{
      18:"4.5rem", /*72*/
      62:"15.5rem", /*248px*/
      150:"37.5rem", /*600px*/
    },
  },
},
variants: {
  extend: {
    display: ["group-hover"],
    opacity: ["group-hover"],
    translate: ["group-hover"],
    transform: ["group-hover"],
    width: ["group-hover", "hover"],
    height: ["group-hover", "hover"],
    padding: ["group-hover", "hover"],
    animation: ["group-hover", "hover"],
    scale: ["group-hover", "hover"],
  },
},
  plugins: [],
}
