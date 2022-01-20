import {refs} from './refs';
import handleMovieCard from './handleMovieCard';
import filmCard from '../templates/preview_card.hbs';

export default class FilmsStorage {
    constructor() {
      this._watchedFilms = [];
      this._filmsQueue = [];
      this._currentPage = []
      this.refreshData();
    }
    refreshData() {
      if (localStorage.getItem('currentPage')) {
        this._currentPage = JSON.parse(localStorage.getItem('currentPage'));
      }
      if (localStorage.getItem('films-queue')) {
        this._filmsQueue = JSON.parse(localStorage.getItem('films-queue'));
      }
      if (localStorage.getItem('watched-films')) {
        this._watchedFilms = JSON.parse(localStorage.getItem('watched-films'));
      }
    }
    addToCurrent(item) {
        if(this._currentPage.length == 0){
            this._currentPage.push(item);  
            this.saveCurrentPage();
        }else{
            this._currentPage = []
            this._currentPage.push(item);  
            this.saveCurrentPage();
        }
    }
    saveCurrentPage() {
        localStorage.setItem('currentPage', JSON.stringify(this._currentPage));
      }

      //watched
  addToWatchedFilm(item) {
    this._watchedFilms.push(item);
    this.saveWatchedFilms();
    if (refs.myLibEl.disabled && refs.watchedEl.disabled)
      this.showWatchedFilms();
  }

  removeWathedFilm(index) {
    this._watchedFilms.splice(index, 1);
    this.saveWatchedFilms();
    if (refs.myLibEl.disabled && refs.watchedEl.disabled)
      this.showWatchedFilms();
  }

  saveWatchedFilms() {
    localStorage.setItem('watched-films', JSON.stringify(this._watchedFilms));
  }

  showWatchedFilms() {
    const savedFilms = localStorage.getItem('watched-films');
    refs.watchedEl.disabled = true;
    refs.queueEl.disabled = false;
    if (!savedFilms) {
      refs.galleryEl.innerHTML = '';
      return;
    }
    let watchedFilmsMarkup = '';
    JSON.parse(savedFilms).forEach(object => {
        watchedFilmsMarkup += filmCard(([object])); 
    });
    refs.galleryEl.innerHTML = watchedFilmsMarkup;
  }

  getWathedListFromLS() {
    if (!localStorage.getItem('watched-films')) return;
    this._watchedFilms = JSON.parse(localStorage.getItem('watched-films'));
  }
  get watchedFilms() {
    return this._watchedFilms;
  }

  //queue
  addToQueue(item) {
    this._filmsQueue.push(item);
    this.saveFilmsQueue();
    if (refs.myLibEl.disabled && refs.queueEl.disabled)
      this.showFilmsQueue();
  }
  removeFromQueue(index) {
    this._filmsQueue.splice(index, 1);
    this.saveFilmsQueue();
    if (refs.myLibEl.disabled && refs.queueEl.disabled)
      this.showFilmsQueue();
  }
  saveFilmsQueue() {
    localStorage.setItem('films-queue', JSON.stringify(this._filmsQueue));
  }
  showFilmsQueue() {
    const queue = localStorage.getItem('films-queue');
    refs.queueEl.disabled = true;
    refs.watchedEl.disabled = false;
    if (!queue) {
      refs.galleryEl.innerHTML = null;
      return;
    }
    let filmsQueueMarkup = '';
    JSON.parse(queue).forEach(object => {
        filmsQueueMarkup += filmCard(([object])); 
    });
    refs.galleryEl.innerHTML = filmsQueueMarkup;
  }
  getQueueFromLS() {
    if (!localStorage.getItem('films-queue')) return;
    this._filmsQueue = JSON.parse(localStorage.getItem('films-queue'));
  }
  get filmsQueue() {
    return this._filmsQueue;
  }

}