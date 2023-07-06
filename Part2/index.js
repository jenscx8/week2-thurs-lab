const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')

function setCard() {
    let card = document.getElementById(`${idInput.value}`)
    card.style.color = colorInput.value
}