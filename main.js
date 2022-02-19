let target = document.querySelector('#target')
target.innerText = 'Hi'

let count = document.querySelector('p')
let time = 0

var timer = setInterval( () => {
	count.innerText = time
	time++
}, 1000)