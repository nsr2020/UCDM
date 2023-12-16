
import { numeros } from "../../data/numeros"
import { ucdm } from "../../data/ucdm"
import { extraucdm } from "../../data/extra"
import {  cleanimgHeader, createSectionVideos } from "../sectionUCDM/sectionUcdm"
import "./header.css"




export const createHeader =() =>{
  const header = document.createElement("header")
  const imgheader = document.createElement("img")
  const nav = document.createElement("nav")
  const divnav = document.createElement("div")

  header.classList.add("show")

  imgheader.src = "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702664427/UCDM/5a02da3018e87004f1ca4466_gpahog.png"
  

  for( let i=1; i<=3; i++){
    const boton = document.createElement("button")
    boton.textContent = `Lección ${i}`
    boton.classList.add(`boton${i}`)

    boton.addEventListener("click", () => {
      
      createSectionVideos(ucdm,i)
      
    },{ passive: true });
    nav.appendChild(boton)
  }

 

  for (let conta = 1; conta <= numeros.length; conta++) {
    const numero = numeros[conta - 1]; // Resta 1 para obtener el índice correcto
  
    const img = document.createElement("img");
    img.src = numero.src;
    img.classList.add(`img${conta}`);
    img.addEventListener("click", () => {
      console.log(`Clicked on image ${conta}`);
     
      createSectionVideos(extraucdm, conta);
    }, { passive: true });
  
    divnav.appendChild(img);
  }



    imgheader.addEventListener("click", () =>{
      const divApp  = document.querySelector(".app")
      divApp.style.display = "flex"
      header.style.display ="none"
      cleanimgHeader()
    })

header.appendChild(imgheader)
  header.appendChild(nav)
  header.appendChild(divnav)
  document.body.appendChild(header)

}