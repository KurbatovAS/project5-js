import { refs } from './refs';

import pageLang from '../scripts/templates/pageLang.json';

 import modalLang from '../scripts/templates/modalLang.json';

import { setLocalStorage, getLocalStorage } from './local-storage';

refs.enEl.addEventListener('click', changeEnLanguage);
refs.ruEl.addEventListener('click', changeRuLanguage);
refs.ukEl.addEventListener('click', changeUkLanguage);

function changeEnLanguage() {
  let current = 'en';
  setLanguageData(current);
  setLocalStorage('current', current);
}
function changeRuLanguage() {
  let current = 'ru';
  setLanguageData(current);
  setLocalStorage('current', current);
}
function changeUkLanguage() {
  let current = 'uk';
  setLanguageData(current);
  setLocalStorage('current', current);
}
let langs = getLocalStorage('current');

if (langs === 'uk') {
  setLanguageData('uk');
}
if (langs === 'ru') {
  setLanguageData('ru');
}
if (langs === 'en') {
  setLanguageData('en');
}

function setLanguageData(current) {
  for (let key in pageLang) {
    document.querySelector('.current-' + key).textContent = `${pageLang[key][`${current}`]}`;
    document.querySelector('.current-input').placeholder = `${pageLang.input[`${current}`]}`;
    document.querySelector('.current-nameinput').placeholder = `${pageLang.nameinput[`${current}`]}
    `;
    document.querySelector('.current-emailinput').placeholder = `${pageLang.emailinput[`${current}`]}
    `;
    document.querySelector('.current-passwordinput').placeholder = `${pageLang.passwordinput[`${current}`]}
    `;
  }
}

export function changeModalLanguage() {
  const popularity = document.querySelector('.currentLang-popularity');
  const genres = document.querySelector('.currentLang-genres');
  const votes = document.querySelector('.currentLang-votes');
  const title = document.querySelector('.currentLang-titleOriginal');
  const about = document.querySelector('.currentLang-about');
  const addWatched = document.querySelector('.currentLang-addWatched');
  const addQueue = document.querySelector('.currentLang-addQueue');

  if (langs === 'ru') {
    popularity.textContent = `${modalLang.popularity.ru}`;
    genres.textContent = `${modalLang.genres.ru}`;
    votes.textContent = `${modalLang.votes.ru}`;
    title.textContent = `${modalLang.titleOriginal.ru}`;
    about.textContent = `${modalLang.about.ru}`;
    // watchTrailer.textContent = `${modalLang.watchTrailer.ru}`;
    addWatched.textContent = `${modalLang.addWatched.ru}`;
    addQueue.textContent = `${modalLang.addQueue.ru}`;
  }
  if (langs === 'uk') {
    popularity.textContent = `${modalLang.popularity.uk}`;
    genres.textContent = `${modalLang.genres.uk}`;
    votes.textContent = `${modalLang.votes.uk}`;
    title.textContent = `${modalLang.titleOriginal.uk}`;
    about.textContent = `${modalLang.about.uk}`;
    // watchTrailer.textContent = `${modalLang.watchTrailer.uk}`;
    addWatched.textContent = `${modalLang.addWatched.uk}`;
    addQueue.textContent = `${modalLang.addQueue.uk}`;
  }
  if (langs === 'en') {
    popularity.textContent = `${modalLang.popularity.en}`;
    genres.textContent = `${modalLang.genres.en}`;
    votes.textContent = `${modalLang.votes.en}`;
    title.textContent = `${modalLang.titleOriginal.en}`;
    about.textContent = `${modalLang.about.en}`;
    // watchTrailer.textContent = `${modalLang.watchTrailer.en}`;
    addWatched.textContent = `${modalLang.addWatched.en}`;
    addQueue.textContent = `${modalLang.addQueue.en}`;
  }
}


export { langs };
