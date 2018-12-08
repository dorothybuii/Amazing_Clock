const clock = document.querySelector('.js-clock'),
  clockFace = clock.querySelector('h1')

function getTime() {
  const date = new Date(),
    seconds = date.getSeconds(),
    minutes = date.getMinutes(),
    hours = date.getHours()

  return `${hours < 10 ? `0${hours}` : hours} :${
    minutes < 10 ? `0${minutes}` : minutes
  } :${seconds < 10 ? `0${seconds}` : seconds}`
}

function uploadIntoHTML() {
  clockFace.innerText = getTime()
}

function init() {
  uploadIntoHTML()
  setInterval(uploadIntoHTML, 1000)
}
init()