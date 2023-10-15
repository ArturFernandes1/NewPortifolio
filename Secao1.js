import React from "react";
import "./Secao1.css";

import logo_python from "../Assets/logo_python.svg"
import logo_js from "../Assets/logo_js.svg" 
import logo_react from "../Assets/logo_react.svg"
import logo_css from "../Assets/logo_css.svg" 
import logo_html5 from "../Assets/logo_html5.svg"
import logo_bootstrap from "../Assets/logo_bootstrap.svg" 
import logo_figma from "../Assets/logo_figma.svg"



function Secao1(){
    return(
        <>
        <h1>Linguagens e tecnologias</h1>
        <hr></hr>
        <div className="container1">
          <div id="quadro">
             <img className="imagem" src={logo_python}></img>
            <h3>Python</h3>
          </div>
          <div id="quadro">
            <img className="imagem" src={logo_js}></img>
            <h3>Javascript</h3>
          </div>
          <div id="quadro">
            <img className="imagem" src={logo_react}></img>
            <h3>React</h3>
          </div>
          <div id="quadro">
            <img className="imagem" src={logo_css}></img>
            <h3>CSS</h3>
          </div>
          <div id="quadro">
            <img className="imagem" src={logo_html5}></img>
            <h3>HTML</h3>
          </div>
          <div id="quadro">
             <img className="imagem" src={logo_bootstrap}></img>
            <h3>Bootstrap</h3>
          </div>
          <div id="quadro">
            <img className="imagem" src={logo_figma}></img>
            <h3>Figma</h3>
          </div>

        </div>    
        </>
    );
};
export default Secao1;