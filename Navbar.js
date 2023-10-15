import React from "react";
import "./Navbar.css";
import "./img.css"
import foto_perfil from "../Assets/foto_perfil.jpg"

function Navbar(){
    return(
           <>
              <header className="container">
                    <img src={foto_perfil} alt="" className="img"></img>
                    <div className="dados">
                        <h2>Artur Fernandes</h2>
                        <div className="caixa1">
                            <p>Graduando de telemática | IFPB Campus Campina Grande</p>
                            <h1>Desenvolvedor Front-end</h1>
                        </div>
                    </div> 
               </header>
           </>
    )
}
export default Navbar
