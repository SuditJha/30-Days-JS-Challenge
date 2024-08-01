const changeTextBtn = document.getElementById("change-content")
const addElementBtn = document.getElementById("addElementBtn")

const addListItem = document.getElementById("addListItem")

const removeElementBtn = document.getElementById("removeElementBtn")

const changeImage = document.getElementById("change")
const mouse = document.getElementById("mouse")
changeTextBtn.addEventListener("click", () => {
    const contentElement = document.getElementById("text-content")
    contentElement.textContent = "This is the new content"
    contentElement.style.backgroundColor = "blue"
    contentElement.style.color = "white"
})

addElementBtn.addEventListener("click", () => {
    const contentElement = document.getElementById("addElement")
    const newELement = document.createElement("p")
    newELement.textContent = "This is a new element"
    contentElement.appendChild(newELement)
})

addListItem.addEventListener("click", () => {
    const li = document.createElement("li")
    li.textContent = "This is a new list item"
    const ul = document.getElementById("list")
    ul.appendChild(li)
})

removeElementBtn.addEventListener("click", () => {
    const removeElement = document.getElementById("removeElement")
    removeElement.romove()
})


changeImage.addEventListener("click", () => {
    const image = document.getElementById("image")
    image.src = "https://wallpapers.com/images/hd/anime-4k-pictures-q1cg89niv319ld1a.jpg"
    image.alt = "New Image"
    image.style.width = "100%"
    image.style.height = "100%"
})

mouse.addEventListener("mouseover", () => {
    mouse.style.backgroundColor = "blue"
    mouse.style.color = "white"
})