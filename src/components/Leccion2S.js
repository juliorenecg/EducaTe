<<<<<<< HEAD
import React from 'react';
import styles from "./App.module.css";
//import styles from "./Tab2.css";
import {useHistory} from "react-router-dom";
function Leccion2S() {
    let history = useHistory();
    return (
        <div> 
         <h1 className = {styles.title}>TEMAS</h1>
         < br/>< br/>
            <pre className = {styles.temas}>             SUMA                 RESTA                  MULTIPLICACION                    DIVISION</pre>
            <button className = {styles.boton2} onClick ={
                ()=>{
                    history.push("/Tab2");
                }
            }>
                Leccion 2 Suma
            </button>
        </div>
    )
}
export default Leccion2S;
=======
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import styles from './App.module.css';
import'bootstrap/dist/css/bootstrap.min.css'; 

import {useHistory} from "react-router-dom";

    const Leccion2S = (props) => {
        const [dropDown, setDropdown] = useState(false);
        const abriCerrar = () => {setDropdown(!dropDown)}
        let history = useHistory();
       return (
                 <div className={styles.menu}> <br/><br/><br/>
                 <h1 className={styles.tituloSL2}>TEMA SUMA - LECCION 2</h1>
                 <button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/Tab1");
                 }         
             }>
                🠔atras
            </button>
                  
            <Dropdown isOpen={!dropDown} toggle={abriCerrar} direction="right">
            
            <DropdownToggle caret className={styles.BotonDrop} > 
                VIDEOS 
            </DropdownToggle >
            
            <DropdownMenu className={styles.desplegable}> 
            
                <button className ={styles.botonVideoSuma2} onClick ={
                    ()=>{
                    history.push("/Leccion2sv1");
                    }
                }> Video1
                </button>
                <button className ={styles.botonVideoSuma2} onClick ={
                     ()=>{
                    history.push("/Leccion2sv2");
                     }
                }> Video2
                </button>
                <button className ={styles.botonVideoSuma2} onClick ={
                     ()=>{
                      history.push("/Leccion2sv3");
                     }
                    }> Video3
                </button>
              {/* <DropdownItem>Video 1</DropdownItem>
              <DropdownItem>Video 2</DropdownItem>
              <DropdownItem>Video 3</DropdownItem>
              <DropdownItem>Video 4</DropdownItem>
              <DropdownItem>Video 5</DropdownItem> */}
            
            </DropdownMenu>
           </Dropdown>
          </div>
        );
      }

export default Leccion2S;
>>>>>>> ef5ea8a3f220fc024f6125bec24430bfa0a13368
