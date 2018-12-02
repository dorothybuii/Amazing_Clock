function enrollThecoolKids() {
  var form = document.querySelector('.js-form')
  form.addEventListener('submit', event => {
    event.preventDefault()

    var txt = document.querySelector('.imSoCool')
    var name = txt.value
    txt.value = ''

    var list = document.querySelector('.cool-list')
    var tmpDiv = document.createElement('div')
    var element = document.createTextNode(name)
    // element.value = name

    tmpDiv.appendChild(element)
    list.appendChild(tmpDiv)
  })
}
