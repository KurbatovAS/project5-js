import { refs } from './refs';
import movieCard from '../templates/modal.hbs';


refs.openModalEl.addEventListener('click', onOpenModal);
refs.backdropEl.addEventListener('click', onBackdropClick);



function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}
import { currentTheme } from './toggle-theme';

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.bodyEl.classList.remove('show-modal');
  refs.closeModalEl.removeEventListener('click', onCloseModal);
  refs.modalEl.classList.add('js-backdrop');
  
}

function onBackdropClick(event) {

  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}const modal = document.querySelector('.modal')
// let currentTheme = localStorage.getItem('theme');

function onOpenModal(e) {
  e.preventDefault();
  
// const movieIcon = document.querySelector('.modal__icon') 
   const movieTitle =  document.querySelectorAll('.movies__title')
  console.log(movieTitle);
  //  console.log(currentTheme);
  if ( currentTheme === 'dark-theme') {
    modal.classList.toggle('dark-theme');
    // movieTitle.classList.add('dark-theme') 
  } else {
    modal.classList.toggle('light-theme'); 
  }
  
  window.addEventListener('keydown', onEscKeyPress);
  refs.closeModalEl.addEventListener('click', onCloseModal);

  if (e.target.classList.value === 'movies__poster') {
    refs.bodyEl.classList.add('show-modal');
    refs.modalEl.classList.remove('js-backdrop');
  }

  const currentFilmId = Number(e.target.id);
  
  return JSON.parse(localStorage.getItem("currentPage")).map(films => {
    films.forEach(film => {
   
      if (currentFilmId === film.id ) {
         
       const markupModal = movieCard(film);
       
       refs.modalmarkupEl.innerHTML = '';
       refs.modalmarkupEl.insertAdjacentHTML('beforeend', markupModal);
       refs.bodyEl.classList.add('show-modal');
      }  
    })
   })
 }
 
