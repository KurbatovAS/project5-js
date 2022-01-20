// import js
import { refs } from './refs';

// import templates
import movieCard from '../templates/modal.hbs';
import trailer from '../API/fetchTrailer';
import { currentTheme } from './toggle-theme';
import FilmsStorage from './local-storage';

refs.openModalEl.addEventListener('click', onOpenModal);
refs.backdropEl.addEventListener('click', onBackdropClick);

const filmsStorage = new FilmsStorage();

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}

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
}

function onOpenModal(e) {
  e.preventDefault();

  if ( currentTheme === 'dark-theme') {
    refs.modalWindowEl.classList.add('dark-theme');
   } else {
     refs.modalWindowEl.classList.remove('dark-theme'); 
   }
  window.addEventListener('keydown', onEscKeyPress);
  refs.closeModalEl.addEventListener('click', onCloseModal);

  if (e.target.classList.value === 'movies') {
  return
  }

  const currentFilmId = Number(e.target.closest('li').id);

  return JSON.parse(localStorage.getItem("currentPage")).map(films => {
   films.forEach(film => {
     if (currentFilmId === film.id ) {
        
      const markupModal = movieCard(film);
      
      refs.modalmarkupEl.innerHTML = '';
      refs.modalmarkupEl.insertAdjacentHTML('beforeend', markupModal);
      refs.bodyEl.classList.add('show-modal');

      // WORK WHIS LS
      const addToWathedBtn = document.querySelector('[data-action="addToWatched"]');
      const addToQueueBtn = document.querySelector('[data-action="addToQueue"]');
//addToWathedBtn
      if(filmsStorage.watchedFilms.some( watched => watched['id'] === film.id)){
        addToWathedBtn.classList.add('movies-btn__button--current');
        onRemoveWatchedBtn(addToWathedBtn)
      }else{
        addToWathedBtn.classList.remove('movies-btn__button--current');
        onAddWatchedBtn(addToWathedBtn)
      }
//addToQueueBtn
      if(filmsStorage.filmsQueue.some( queue => queue['id'] === film.id)){
        addToQueueBtn.classList.add('movies-btn__button--current');
        onRemoveQueueBtn(addToQueueBtn)
      }else{
        addToQueueBtn.classList.remove('movies-btn__button--current');
        onAddQueueBtn(addToQueueBtn)
      }
//onAddToWatched
      addToWathedBtn.addEventListener('click', onAddToWatched)
      function onAddToWatched(){
        if(!addToWathedBtn.classList.contains('movies-btn__button--current')){
          addToWathedBtn.classList.add('movies-btn__button--current');
          onRemoveWatchedBtn(addToWathedBtn);
          filmsStorage.addToWatchedFilm(film);  
          refs.noMoviesEl.classList.add("visually-hidden");
        }else{
          const index = filmsStorage.watchedFilms.findIndex(film => film.id == currentFilmId);
          filmsStorage.removeWathedFilm(index);
          addToWathedBtn.classList.remove('movies-btn__button--current');
          onAddWatchedBtn(addToWathedBtn)
        }   

        if(refs.watchedEl.classList.contains('btn-activ') && refs.myLibEl.classList.contains('nav-list__link--current')){
          filmsStorage.showWatchedFilms();
        }     
      }
//onAddToQueue
      addToQueueBtn.addEventListener('click', onAddToQueue)
        function onAddToQueue(){
          if(!addToQueueBtn.classList.contains('movies-btn__button--current')){
            addToQueueBtn.classList.add('movies-btn__button--current');
            onRemoveQueueBtn(addToQueueBtn)
            filmsStorage.addToQueue(film);
          }else{
            const index = filmsStorage.filmsQueue.findIndex(film => film.id == currentFilmId);
            filmsStorage.removeFromQueue(index);
            addToQueueBtn.classList.remove('movies-btn__button--current');
            onAddQueueBtn(addToQueueBtn)
         }    

          if(refs.queueEl.classList.contains('btn-activ') && refs.myLibEl.classList.contains('nav-list__link--current')){
            filmsStorage.showFilmsQueue();
          }
        }
    onPlayTrailer
        trailer.onPlayTrailer(document.querySelectorAll('.playTrailer'));
        }  
     })
  })
}

function onRemoveWatchedBtn(addToWathedBtn) {
    addToWathedBtn.textContent = "Remove from watched";
  }

function onAddWatchedBtn(addToWathedBtn) {
    addToWathedBtn.textContent = "Add to watched";
  }

function onRemoveQueueBtn(addToQueueBtn) {
  addToQueueBtn.textContent = "Remove from queue";
}

function onAddQueueBtn(addToQueueBtn) {
  addToQueueBtn.textContent = "Add to queue";
}