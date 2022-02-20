let target = document.querySelector('#target')
target.innerText = 'Please, just wayamin'

let count = document.querySelector('p')
let time = 60

function endTimer () {
	clearInterval(timer)
}

var timer = setInterval( () => {
	if (time > 0) {
		count.innerText = time
	}
	else {
		count.innerText = 'Don\'t you feel better now'
		endTimer()
	}
	time--
}, 1000)