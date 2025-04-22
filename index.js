
const parent = document.querySelector('#flex-div');
const button = document.querySelector('#sizing')
const reset = document.querySelector('#reset')


function createTiles(num) {
    parent.innerHTML = ''
    for (let i = 0; i < (num*num); i++) {
        const child = document.createElement('div');
        child.className = 'tiles'
        parent.append(child)
    }

    document.documentElement.style.setProperty('--width', `calc(900px / ${num})`)
    document.documentElement.style.setProperty('--height', `calc(600px / ${num})`)


}

createTiles(32)

button.addEventListener('click', (e) => {
    let input = parseInt(prompt("Add a dimension, max of 100"))
    createTiles(Math.min(input, 100))
})

reset.addEventListener('click', (e) => {
    createTiles(32)
})

mousedown = false

parent.addEventListener('mousedown', (e) =>{
    mousedown = true
    if (e.target != e.currentTarget && mousedown) {
        e.target.style.backgroundColor = 'Red'
    }
})

parent.addEventListener('mouseup', (e) =>{
    mousedown = false
})

parent.addEventListener('mousemove', (e) => {
    if (e.target != e.currentTarget && mousedown) {
        e.target.style.backgroundColor = 'Red'
    }
})