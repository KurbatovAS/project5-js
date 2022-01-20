import { refs } from './refs';
import onRenderPopularMoviesMarkup from './search';
import FilmsStorage from './local-storage';

const filmsStorage = new FilmsStorage();

refs.myLibEl.addEventListener('click', onMyLibrary);

function onMyLibrary() {
    refs.formEl.classList.add('is-hidden');
    refs.libraryListEl.classList.remove('is-hidden');
    refs.homeEl.classList.remove('nav-list__link--current');
    refs.myLibEl.classList.add('nav-list__link--current');
    refs.headerEl.classList.remove('header__container');
    refs.headerEl.classList.add('library-bgi');
    refs.galleryEl.innerHTML = '';
    refs.mainEl.style.minHeight = 'calc(100vh - 80px)';
    refs.paginationEl.classList.add('pagination__off');
    refs.filterSectionEl.style.display = 'none'
    refs.errorEl.classList.add("visually-hidden");
    filmsStorage.showWatchedFilms();
    
    if(refs.galleryEl.innerHTML === ''){
      refs.noMoviesEl.classList.remove("visually-hidden");
    }else{
      refs.noMoviesEl.classList.add("visually-hidden");
    }

    refs.watchedEl.addEventListener('click', onClickWatchedFilms);
    function onClickWatchedFilms(event) {
      filmsStorage.showWatchedFilms();
      refs.watchedEl.classList.add('btn-activ');
      refs.queueEl.classList.remove('btn-activ');
    }
    refs.queueEl.addEventListener('click', onClickFilmsOnQueue);
    function onClickFilmsOnQueue() {
      filmsStorage.showFilmsQueue()
      refs.queueEl.classList.add('btn-activ');
      refs.watchedEl.classList.remove('btn-activ');
    }
}

refs.homeEl.addEventListener('click', onHome);

function onHome() {
    refs.formEl.classList.remove('is-hidden');
    refs.libraryListEl.classList.add('is-hidden');
    refs.homeEl.classList.add('nav-list__link--current');
    refs.myLibEl.classList.remove('nav-list__link--current');
    refs.headerEl.classList.remove('library-bgi');
    refs.headerEl.classList.add('library');
    refs.galleryEl.innerHTML = '';
    refs.filterSectionEl.style.display = 'block'
    refs.noMoviesEl.classList.add("visually-hidden");
    onRenderPopularMoviesMarkup();
    refs.formEl.reset()
}