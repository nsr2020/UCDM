import { createHeader } from "../header/header"
import { createSectionVideos } from "../sectionUCDM/sectionUcdm"


export const createStartPage = () => {
  const divStartPage = document.querySelector(".app")

  const h1 = document.createElement("h1")
  const p = document.createElement("p")
  const img = document.createElement("img")
    const boton = document.createElement("button")

    h1.textContent = "UCDM"
    p.textContent ="El curso de milagros es una filosofía de vida que te ayuda a bajar intensidad a tus emociones y de esta forma poder ser una mejor versión de ti mismo."
    img.src = "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702676894/UCDM/pergamino_yf8rkl.png"
    boton.textContent = "Comenzar"

    divStartPage.append(h1, )
    divStartPage.append(p)
    divStartPage.append(img)
    divStartPage.append(boton)

    boton.addEventListener("click", () =>{
      const divStartPage = document.querySelector(".app")
      divStartPage.style.display ="none"
      const header = document.querySelector(".show")
      header.style.display = "flex"

    })

    


}