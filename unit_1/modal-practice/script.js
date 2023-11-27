const openButton = document.getElementById('modal-open');

const closeButton = document.getElementById('modal-close');

const modalContainer = document.getElementById('modal-container');

// DRY version:
// ------------------------------------------------------
const toggleClasses = (event) => {
  modalContainer.classList.toggle('hidden')
  modalContainer.classList.toggle('shown')
}

openButton.addEventListener('click', toggleClasses)

closeButton.addEventListener('click', toggleClasses)  
// ------------------------------------------------------

// Not DRY version:
// ------------------------------------------------------
// openButton.addEventListener('click', (event) => {
//   modalContainer.classList.toggle('hidden')
//   modalContainer.classList.toggle('shown')
// })

// closeButton.addEventListener('click', (event) => {
//   modalContainer.classList.toggle('hidden')
//   modalContainer.classList.toggle('shown')
// })  
// ------------------------------------------------------