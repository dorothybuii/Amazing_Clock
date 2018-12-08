function enrollThecoolKids() {
  var form = document.querySelector('.js-form')
  form.addEventListener('submit', event => {
    event.preventDefault()

    var txt = document.querySelector('.imSoCool')
    var name = txt.value
    txt.value = ''

    var list = document.querySelector('.cool-list')
    var paragraph = document.createElement('p')
    paragraph.innerText = ` ${name} ❤️${getTime()}`

    list.appendChild(paragraph)
  })
}