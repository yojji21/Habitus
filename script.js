
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
            descBox.style.width = "60rem"
            descBox.style.height = "100rem"
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

            descBox.style.width = "0rem"
            descBox.style.height = "0rem"
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

        const list = document.querySelector("#list")

        const li = list.querySelectorAll("li a")

        li.forEach(item => {
            item.addEventListener("click", () => {
                if(menu.style.visibility === "visible"){

                    menuBtn.innerHTML = `
                    <span><ion-icon name="menu-outline"></ion-icon></span>
                    `
                    menu.style.transform = "translateX(+62vw)"
                    list.style.display = "none"
    
                    setTimeout(() => {
                        menu.style.visibility = "hidden"
                    }, 400)
    
    
            } else {
                    
                    menuBtn.innerHTML = `
                    <span><ion-icon name="close-outline"></ion-icon></span>
                    `
                    const icon = menuBtn.querySelector("span ion-icon")
                    icon.style.color = "white"
    
                    menu.style.visibility = "visible"
                    list.style.display = "flex"
    
    
                    setTimeout(() => {
                        menu.style.transform = "translateX(-62vw)"
                    })
        
               
        }
            })
        })
            
        

        if(menu.style.visibility === "visible"){

                menuBtn.innerHTML = `
                <span><ion-icon name="menu-outline"></ion-icon></span>
                `
                menu.style.transform = "translateX(+62vw)"
                list.style.display = "none"

                setTimeout(() => {
                    menu.style.visibility = "hidden"
                }, 400)


        } else {
                
                menuBtn.innerHTML = `
                <span><ion-icon name="close-outline"></ion-icon></span>
                `
                const icon = menuBtn.querySelector("span ion-icon")
                icon.style.color = "white"

                menu.style.visibility = "visible"
                list.style.display = "flex"


                setTimeout(() => {
                    menu.style.transform = "translateX(-62vw)"
                })
    
           
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
                    <ion-icon name="caret-back-outline"></ion-icon>
                    `

                    setTimeout(() => {
                        answer.style.display = "none"
                    }, 300)
                    
                    answer.style.padding = "0rem"
                    answer.style.maxHeight = "0rem"

                    p.style.opacity = "0"

                } else {
                    button.innerHTML = `
                    <ion-icon name="caret-down-outline"></ion-icon>
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

// Registration Button

const RegisBtn = document.querySelector("#regisButton")

RegisBtn.addEventListener("click", () => {
    var contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
})

// Logo Button

document.querySelector("#logoBtn").addEventListener("click", () => {
    location.reload()
})

//AOS

AOS.init();