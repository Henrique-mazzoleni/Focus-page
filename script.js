const timerHTML = document.querySelector('h2')
let time = 0
const timer = setInterval(() => {
  time++;
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  timerHTML.innerHTML = `${minutes}:${String(seconds).padStart(2, '0')}`
}, 1000)
