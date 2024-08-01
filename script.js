
const html = document.querySelector("html")

const cardAll = document.querySelectorAll(".card")
const cards = document.querySelector(".cards")
const modalitiesSection = document.querySelector(".modalities")



cardAll.forEach(card => {
    card.addEventListener("click", () => {
        const h1 = card.querySelector("h1")
        const description = card.querySelector("#descCard").textContent
        
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
})

const lowerMenu = document.querySelector(".lowerMenu")
const menuBtn = document.querySelector(".menuBtn")
const menu = document.querySelector(".menu")

// Menu Button Scripts

menuBtn.addEventListener("click", () => {

    const logoBtn = document.querySelector("#logoBtn")

        const list = document.querySelector("#list")

        if(menu.style.display === "flex"){
            menuBtn.innerHTML = `
            <span><ion-icon name="menu-outline"></ion-icon></span>
            `
            menu.style.display = "none"
            logoBtn.style.display = "flex"
        } else {
            menuBtn.innerHTML = `
            <span><ion-icon name="close-outline"></ion-icon></span>
            `
            menu.style.display = "flex"
            menu.style.padding = "4rem"
            menu.style.minWidth = "100vw"
            menu.style.minHeight = "100vh"

            list.style.display = "flex"
            logoBtn.style.display = "none"
    }
})