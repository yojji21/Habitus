
const html = document.querySelector("html")

const cards = document.querySelector(".cards")
const modalitiesSection = document.querySelector(".modalities")
const card1 = document.querySelector("#card1")
const card2 = document.querySelector("#card2")
const card3 = document.querySelector("#card3")
const card4 = document.querySelector("#card4")

card1.addEventListener("click", () => {
    const h1 = card1.querySelector("h1")
    const description = "Musculação é uma prática de exercícios físicos que utiliza pesos e equipamentos específicos para fortalecer e desenvolver a musculatura. Envolve séries e repetições de movimentos controlados, visando aumentar a força, resistência e hipertrofia muscular."


    const desc = document.createElement("p")
    desc.textContent = description

    const descBox = document.createElement("div")
    descBox.classList.add("desc_box")

    const unClickableBack = document.createElement("div")
    unClickableBack.classList.add("unclickabe")

    
    const exitButton = document.createElement("button")

    if (window.innerWidth <= 600) {
        exitButton.innerHTML = `
        <span>x</span>
        `
      } else {
        exitButton.innerHTML = `
        <span>Fechar</span>
        `
    }
      
    setTimeout(() => {
        descBox.style.width = "80rem"
        descBox.style.height = "70rem"
        descBox.style.opacity = "1"
    }, 1)

    setTimeout(() => {
        title.style.opacity = "1"
        desc.style.opacity = "1"
        exitButton.style.opacity = "1"
    }, 210)

    

    const title = document.createElement("h1")

    title.textContent = h1.textContent

    html.appendChild(unClickableBack)

    cards.appendChild(descBox)

    descBox.appendChild(title)
    descBox.appendChild(desc)
    descBox.appendChild(exitButton)

    exitButton.addEventListener("click", () => {

        descBox.style.width = "5rem"
        descBox.style.height = "5rem"
        descBox.style.opacity = "0"

        title.style.display = "none"
        desc.style.display = "none"
        exitButton.style.display = "none"

        setTimeout(() => {
            unClickableBack.remove();
            descBox.remove();
        }, 200)
    })
})

card2.addEventListener("click", () => {
    const h1 = card2.querySelector("h1")
    const description = "O spinning é uma modalidade de exercício aeróbico realizada em bicicletas estacionárias, frequentemente em grupo e acompanhada por música motivacional. É eficaz para melhorar a resistência cardiovascular, queimar calorias e fortalecer os músculos das pernas."


    const desc = document.createElement("p")
    desc.textContent = description

    const descBox = document.createElement("div")
    descBox.classList.add("desc_box")

    const unClickableBack = document.createElement("div")
    unClickableBack.classList.add("unclickabe")

    const exitButton = document.createElement("button")
    if (window.innerWidth <= 600) {
        exitButton.innerHTML = `
        <span>x</span>
        `
      } else {
        exitButton.innerHTML = `
        <span>Fechar</span>
        `
    }

    setTimeout(() => {
        descBox.style.width = "80rem"
        descBox.style.height = "70rem"
        descBox.style.opacity = "1"
    }, 1)

    setTimeout(() => {
        title.style.opacity = "1"
        desc.style.opacity = "1"
        exitButton.style.opacity = "1"
    }, 210)

    

    const title = document.createElement("h1")

    title.textContent = h1.textContent

    html.appendChild(unClickableBack)

    cards.appendChild(descBox)

    descBox.appendChild(title)
    descBox.appendChild(desc)
    descBox.appendChild(exitButton)

    exitButton.addEventListener("click", () => {

        descBox.style.width = "5rem"
        descBox.style.height = "5rem"
        descBox.style.opacity = "0"

        title.style.display = "none"
        desc.style.display = "none"
        exitButton.style.display = "none"

        setTimeout(() => {
            unClickableBack.remove();
            descBox.remove();
        }, 200)
    })
})

card3.addEventListener("click", () => {
    const h1 = card3.querySelector("h1")
    const description = "FitDance é uma modalidade de dança fitness que combina diversos estilos musicais e coreografias dinâmicas para proporcionar um treino divertido e eficaz. As aulas são realizadas em grupo, seguindo a orientação de um instrutor, promovendo a queima de calorias, a melhora da coordenação motora e o bem-estar geral."


    const desc = document.createElement("p")
    desc.textContent = description

    const descBox = document.createElement("div")
    descBox.classList.add("desc_box")

    const unClickableBack = document.createElement("div")
    unClickableBack.classList.add("unclickabe")

    const exitButton = document.createElement("button")
    if (window.innerWidth <= 600) {
        exitButton.innerHTML = `
        <span>x</span>
        `
      } else {
        exitButton.innerHTML = `
        <span>Fechar</span>
        `
    }

    setTimeout(() => {
        descBox.style.width = "80rem"
        descBox.style.height = "70rem"
        descBox.style.opacity = "1"
    }, 1)

    setTimeout(() => {
        title.style.opacity = "1"
        desc.style.opacity = "1"
        exitButton.style.opacity = "1"
    }, 210)

    

    const title = document.createElement("h1")

    title.textContent = h1.textContent

    html.appendChild(unClickableBack)

    cards.appendChild(descBox)

    descBox.appendChild(title)
    descBox.appendChild(desc)
    descBox.appendChild(exitButton)

    exitButton.addEventListener("click", () => {

        descBox.style.width = "5rem"
        descBox.style.height = "5rem"
        descBox.style.opacity = "0"

        title.style.display = "none"
        desc.style.display = "none"
        exitButton.style.display = "none"

        setTimeout(() => {
            unClickableBack.remove();
            descBox.remove();
        }, 200)
    })
})

card4.addEventListener("click", () => {
    const h1 = card4.querySelector("h1")
    const description = "A Academia Habitus, tem muito a oferecer, desde equipamentos de primeira à professores incríveis! Nosso principal objetivo é fornecer à você não só um treino, e sim uma experiência. Vamos-lá! Nunca é tarde para começar!"


    const desc = document.createElement("p")
    desc.textContent = description

    const descBox = document.createElement("div")
    descBox.classList.add("desc_box")

    const unClickableBack = document.createElement("div")
    unClickableBack.classList.add("unclickabe")

    const exitButton = document.createElement("button")
    if (window.innerWidth <= 600) {
        exitButton.innerHTML = `
        <span>x</span>
        `
      } else {
        exitButton.innerHTML = `
        <span>Fechar</span>
        `
    }

    setTimeout(() => {
        descBox.style.width = "80rem"
        descBox.style.height = "70rem"
        descBox.style.opacity = "1"
    }, 1)

    setTimeout(() => {
        title.style.opacity = "1"
        desc.style.opacity = "1"
        exitButton.style.opacity = "1"
    }, 210)

    

    const title = document.createElement("h1")

    title.textContent = h1.textContent

    html.appendChild(unClickableBack)

    cards.appendChild(descBox)

    descBox.appendChild(title)
    descBox.appendChild(desc)
    descBox.appendChild(exitButton)

    exitButton.addEventListener("click", () => {

        descBox.style.width = "5rem"
        descBox.style.height = "5rem"
        descBox.style.opacity = "0"

        title.style.display = "none"
        desc.style.display = "none"
        exitButton.style.display = "none"

        setTimeout(() => {
            unClickableBack.remove();
            descBox.remove();
        }, 200)
    })
})

// Menu Button Scripts

const lowerMenu = document.querySelector(".lowerMenu")
const menuBtn = document.querySelector(".menuBtn")
const menu = document.querySelector(".menu")


menuBtn.addEventListener("click", () => {

    if(window.innerWidth < 1800){
        const list = document.querySelector("#list")

        if(menu.style.display === "flex"){
            menuBtn.innerHTML = `
            <span><ion-icon name="menu-outline"></ion-icon></span>
            `
            setTimeout(() => {
                menu.style.display = "none"
            }, 300)

            menu.style.maxWidth = "0vw"
            menu.style.maxHeight = "0vh"
            menu.style.padding = "0"
            menu.style.top = "5px"
            menu.style.right = "5px"
            list.style.opacity = "0"

    

        } else {

            menuBtn.innerHTML = `
            <span><ion-icon name="close-outline"></ion-icon></span>
            `

            menu.style.display = "flex"

            setTimeout(() => {

            menu.style.maxWidth = "60vw"
            menu.style.maxHeight = "40vh"
            menu.style.padding = "2rem"
            menu.style.top = "0px"
            menu.style.right = "0px"
            list.style.opacity = "1"

            }, 2)
        }
    }
})