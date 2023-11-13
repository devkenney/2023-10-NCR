let titleEl = document.getElementById('title');
console.dir(titleEl);

let paragraph = document.querySelector('p');
console.log(paragraph)

paragraph.textContent = 'Comments for Today'

paragraph.style.backgroundColor = 'yellow'
paragraph.style.textAlign = 'center'

let linkEl = document.querySelector('a')
const google = linkEl.getAttribute('href')
console.log(google)
console.log(linkEl.hasAttribute('href'))
linkEl.setAttribute('href', 'http://bing.com')

titleEl.classList.add('look-a-title')
titleEl.classList.remove('look-a-title')

titleEl.classList.toggle('title-two')

console.log(titleEl.classList.contains('title-two'))

titleEl.classList.replace('title-two', 'title-three')

let commentEls = document.querySelectorAll('.comment')
console.log(commentEls);

for(let commentEl of commentEls) {
  commentEl.style.fontSize = '30px'
}