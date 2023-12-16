import { ucdm } from "../../data/ucdm"
import { extraucdm } from "../../data/extra"
import { createHeader } from "../header/header";
import "./sectionUcdm.css"

const sectionVideos = document.createElement("section")
sectionVideos.classList.add("sectionvideos")



export const createSectionVideos = (array, index) =>{
  

    // Limpiar elementos secundarios de sectionVideos
/*     while (sectionVideos.firstChild) {
      sectionVideos.removeChild(sectionVideos.firstChild);
    } */
    sectionVideos.innerHTML =""
  

/*   const imgPicture = document.createElement("img")
  imgPicture.classList.add("picture")
  imgPicture.src ="https://res.cloudinary.com/dnju3aw4b/image/upload/v1702684529/UCDM/60fe96d53d624000048712a1_v4ustf.png"
 */ 
 
 
  
let contador = 1;

  for (const video of array) {
    if (contador === index) {
      const diviframe = document.createElement("div")
    const iframe = document.createElement("iframe");
    iframe.src = video.src + "?autoplay=1";
    iframe.width = video.width;
    iframe.height = video.height;
    iframe.allow = video.allow;
    iframe.allowFullscreen = video.afullS;
/*     diviframe.style.backgroundImage = "url('https://res.cloudinary.com/dnju3aw4b/image/upload/v1702684529/UCDM/60fe96d53d624000048712a1_v4ustf.png')";
     diviframe.style.backgroundSize = 'contain';  */
 

     diviframe.appendChild(iframe)
      sectionVideos.appendChild(diviframe);
      
      sectionVideos.style.display ="flex"
      iframe.style.display= "flex"
      
      
      
      break; // Terminar el bucle después de mostrar el iframe correspondiente
    }
    contador++;
  }

  
  
   
   document.body.append(sectionVideos) 
 
}

export const cleanimgHeader = () =>{

     
     sectionVideos.innerHTML = ""
     sectionVideos.style.display= "none"

      
    
     

}



export const showSectionItems = () =>{
  sectionVideos.style.display= "flex"

}





