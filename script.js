
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

// Menu Button Scripts

const lowerMenu = document.querySelector(".lowerMenu")
const menuBtn = document.querySelector(".menuBtn")
const menu = document.querySelector(".menu")

menuBtn.addEventListener("click", () => {

    const logoBtn = document.querySelector("#logoBtn")

        const list = document.querySelector("#list")

        if(menu.style.display === "flex"){

            function menuClose(){
                menuBtn.innerHTML = `
                <span><ion-icon name="menu-outline"></ion-icon></span>
                `
                menu.style.display = "none"
                logoBtn.style.display = "flex"
            }

            menuClose()

        } else {

            function menuOpen(){
                menuBtn.innerHTML = `
                <span><ion-icon name="close-outline"></ion-icon></span>
                `
                const icon = menuBtn.querySelector("span ion-icon")
                icon.style.color = "white"

                menu.style.display = "flex"
                menu.style.padding = "4rem"
                menu.style.minWidth = "100vw"
                menu.style.minHeight = "100vh"

                list.style.display = "flex"
                logoBtn.style.display = "none"
            }

            menuOpen()
    }
})

// Doubts Scripts

    const allDoubts = document.querySelectorAll(".doubt")

    allDoubts.forEach(doubt => {

        const question = doubt.querySelector(".question")

        question.addEventListener("click", () => {     
                const button = question.querySelector("button")
                const answer = doubt.querySelector(".answer_box")
                const p = answer.querySelector("p")
                if(answer.style.display === "flex"){
                    button.innerHTML = `
                    <span><ion-icon name="caret-back-outline"></ion-icon></span>
                    `
                    setTimeout(() => {
                        answer.style.display = "none"
                    }, 300)
                    
                    answer.style.padding = "0rem"
                    answer.style.maxHeight = "0rem"

                    p.style.opacity = "0"

                } else {
                    button.innerHTML = `
                    <span><ion-icon name="caret-down-outline"></ion-icon></span>
                    `

                    answer.style.display = "flex"

                    setTimeout(() => {
                        answer.style.padding = "3rem"
                        answer.style.maxHeight = "50rem"

                        p.style.opacity = "1"
                    }, 1)
                }    
        })
    })
