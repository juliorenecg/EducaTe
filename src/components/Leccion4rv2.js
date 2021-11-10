import React from "react";
import styles from './App.module.css';
import {useHistory} from "react-router-dom";
function Leccion4rv2(){
    let history = useHistory();
   return  (<div>
       <h1 className = {styles.title}>LECCION4 - VIDEO2</h1><br/><br/>
       <ul  >
           <li className = {styles.punto}>
               <div className = {styles.video} >
       <iframe text-align = "center" src="https://www.youtube.com/embed/1XHlKHX0Onc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </li>
       </ul>
        
        <button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/Leccion4R");
                 }         
             }>
                🠔atras
            </button>
            <button className = {styles.videoAnterior} onClick ={
                 ()=>{
                     history.push("/Leccion4rv1");
                 }         
             }>
                Video Anterior
            </button>
            <button className = {styles.videoSiguiente} onClick ={
                 ()=>{
                     history.push("/Leccion4rv3");
                 }         
             }>
                Video Siguiente
            </button>
    </div> 
    );
}
export default Leccion4rv2;