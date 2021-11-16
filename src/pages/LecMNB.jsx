import React from "react";
import Juego from "../images/juego1.png";
import Practica from "../images/practica.png";
import Video from "../images/video1.png";

import stylesDiv from "./LecDivision.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {useHistory} from "react-router-dom";

export function LecMNB(){
  let history = useHistory();
    return (
    <Router>
    <ul className = {stylesDiv.niveles}>
        <li>
        <Link className = {stylesDiv.sub} to ="/multiplicacion" onClick ={
                 ()=>{
                     history.push("/multiplicacion");
                 }         
             }>
          Nivel Semilla 
        </Link>
        </li>
        <li>
        <Link className = {stylesDiv.semilla} to ="/LecMNB" onClick ={
                 ()=>{
                     history.push("/LecMNB");
                 }         
             }>
          Nivel Brote
        </Link>
        </li>

        <li>
        <Link className = {stylesDiv.sub} to ="/LecMNP" onClick ={
                 ()=>{
                     history.push("/LecMNP");
                 }         
             }>
          Nivel Planta
        </Link>
        </li>
        <li>
        <Link className = {stylesDiv.sub} to ="/LecMNA" onClick ={
                 ()=>{
                     history.push("/LecMNA");
                 }         
             }>
            Nivel Árbol
        </Link>
        </li>
    </ul>
    <ul className={stylesDiv.LeccionGrid}>
        <li>
          
          <Link to = "/JuegoMultB" onClick ={
                 ()=>{
                     history.push("/JuegoMultB");
                 }         
             }>
            <img className={stylesDiv.ImgStyle} src={Juego} alt="juego" />
          </Link>
        </li>


        <li>
          <Link to="/PMB" onClick={
            ()=>{
              history.push("/PMB");
            }
          }>
            <img className={stylesDiv.ImgStyle} src={Practica} alt="practicas" />
          </Link>
        </li>


        <li>
          <Link to="/NBMV1" onClick ={
                 ()=>{
                     history.push("/NBMV1");
                 }         
             }>
            <img className={stylesDiv.ImgStyle} src={Video} alt="video" />
          </Link>
        </li>
      </ul>
  </Router>
  );
}