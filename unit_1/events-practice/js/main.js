const btn = document.querySelector('button');

btn.addEventListener('click', function(event) {
  const li = document.createElement('li')
  const input = document.querySelector('input');
  li.textContent = input.value;
  document.querySelector('ul').appendChild(li)
  input.value = ""
})

const outside = document.getElementById('outside');

outside.addEventListener('click', (event) => {
  console.log(event.target)
})

function handleClick(event) {
  console.log(event.target.textContent)
}

document.querySelector('ul').addEventListener('click', handleClick);