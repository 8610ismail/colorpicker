const color = document.getElementById("color")
const imgDiv = document.querySelector(".img")

color.addEventListener('input', () => {
    imgDiv.style.backgroundColor = color.value
})
