//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


let contador = 0
setInterval(() => {
    let siete = Math.floor((contador%10000000)/1000000)
    let  seis = Math.floor((contador%1000000)/100000)
    let cinco = Math.floor((contador%100000)/10000)
    let cuatro = Math.floor((contador%10000)/1000)
    let tres = Math.floor((contador%1000)/100)
    let dos = Math.floor((contador%100)/10)
    let uno = Math.floor(contador%10)
        contador++
    ReactDOM.createRoot(document.getElementById('app')).render(<Home uno={uno} dos={dos} tres={tres} cuatro={cuatro} cinco={cinco} seis={seis} siete={siete} />);
}, 1000)


//render your react application


