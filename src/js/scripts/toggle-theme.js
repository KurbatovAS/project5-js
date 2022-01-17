import { refs } from './refs';

let currentTheme = localStorage.getItem('theme');

refs.checkboxEl.addEventListener('click', toggleTheme);

function toggleTheme(e) {
  refs.bodyEl.classList.toggle('light-theme');
  refs.bodyEl.classList.toggle('dark-theme');
  refs.sectionFooterEl.classList.toggle('light-theme');
  refs.sectionFooterEl.classList.toggle('dark-theme');
  if (refs.checkboxEl.checked) {
    localStorage.setItem('theme', 'dark-theme');
    currentTheme = 'dark-theme';
    refs.modalWindowEl.classList.add('dark-theme');
  } else {
    localStorage.setItem('theme', 'light-theme');
    currentTheme = 'light-theme';
    refs.modalWindowEl.classList.remove('dark-theme');
  }
}
if (currentTheme === 'dark-theme') {
  refs.bodyEl.classList.add('dark-theme');
  refs.sectionFooterEl.classList.add('dark-theme');
  refs.checkboxEl.checked = true;
}

export { currentTheme };
