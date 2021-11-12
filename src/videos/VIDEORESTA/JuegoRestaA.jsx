import React from "react";
import styles from "./video.module.css"
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
export function JuegoRestaA(){
    let history = useHistory();
   return  (<div>
       <h1 className = {styles.title}>NIVEL ARBOL - RESTA</h1>
       <ul  >
           <li className = {styles.punto}>
               <div className = {styles.video} >
       <iframe title="Suma y Elige" text-align = "center" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://wordwall.net/es/embed/4c4ada67808342398008bfc2edf64cd6?themeId=1&templateId=36" ></iframe>
                </div>
            </li>
       </ul>
        
        <button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/LecRNA");
                 }         
             }>
                🠔atras
            </button>
            
    </div> 
    );
}