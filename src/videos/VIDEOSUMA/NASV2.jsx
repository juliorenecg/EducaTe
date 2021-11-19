import React from "react";
import styles from './video.module.css';
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
export function NASV2(){
    let history = useHistory();
   return  (<div>
       <h1 className = {styles.title}>NIVEL ARBOL - SUMA</h1>
       <ul  >
           <li className = {styles.punto}>
               <div className = {styles.video} >
       <iframe text-align = "center" src="https://www.youtube.com/embed/L1b8ZI41tA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </li>
       </ul>
        
        <button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/LecSNA");
                 }         
             }>
                🠔atrás
            </button>
             <button className = {styles.videoAnterior} onClick ={
                 ()=>{
                     history.push("/NASV1");
                 }         
             }>
                Video Anterior
            </button> 
            <button className = {styles.videoSiguiente} onClick ={
                 ()=>{
                     history.push("/NASV3");
                 }         
             }>
                Video Siguiente
            </button>
    </div> 
    );
}