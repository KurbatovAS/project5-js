const refs = {
  // header section elements
  formEl: document.querySelector('.search-form'),
  inputEl: document.querySelector('.search-form__input'),

  // gallary section elements
  mainEl: document.querySelector('main'),
  galleryEl: document.querySelector('.movies'),
  loadMoreBtnEl: document.querySelector('.loadMoreBtn'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),

  // pagination section elements

  // footer section elements
  footerLinkEl: document.querySelector('.footer__link'),
  footerTextEl: document.querySelector('.footer__text--first'),
  footerEl: document.querySelector('.footer__text--second'),
  sectionFooterEl: document.querySelector('.section--footer'),

  // modal
  openModalEl: document.querySelector('[data-modal-open]'),
  closeModalEl: document.querySelector('[data-modal-close]'),
  modalEl: document.querySelector('[data-modal]'),
  modalmarkupEl: document.querySelector('.modal__markup'),
  bodyEl: document.querySelector('body'),
  backdropEl: document.querySelector('.js-backdrop'),
  modalWindowEl: document.querySelector('.modal'),

  // theme(day/night)
  checkboxEl: document.getElementById('checkbox'),
};

export { refs };
