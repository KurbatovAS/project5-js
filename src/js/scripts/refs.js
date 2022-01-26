const refs = {
  // header section elements
  homeEl: document.querySelector('#home-link'),
  myLibEl: document.querySelector('#library-link'),
  watchedEl: document.querySelector('.watched__button'),
  queueEl: document.querySelector('.queue__button'),
  formEl: document.querySelector('.search-form'),
  libraryListEl: document.querySelector('.library'),
  headerEl: document.querySelector('.header'),
  inputEl: document.querySelector('.search-form__input'),
  errorEl: document.querySelector('.notification'),
  searchError: document.querySelector('.notification__text'),
  libruaryIsActivEl: document.querySelectorAll('.nav-list__link--current'),

  // gallary section elements
  preloaderEl: document.querySelector('.preloader'),
  mainEl: document.querySelector('main'),
  galleryEl: document.querySelector('.movies'),
  loadMoreBtnEl: document.querySelector('.loadMoreBtn'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
  noMoviesEl: document.querySelector('.no-movies'),
  filterEl: document.querySelector('.filter__container'),

  // pagination section elements
  paginationEl: document.querySelector('.pagination'),

  // footer section elements
  footerTeamLinkEl: document.querySelector('.footer__link'),
  // footerTextEl: document.querySelector('.footer__text--first'),
  // footerEl: document.querySelector('.footer__text--second'),
  sectionFooterEl: document.querySelector('.section--footer'),

  // team-modal
  openTeamModalEl: document.querySelector('[data-team-modal-open]'),
  closeTeamModalEl: document.querySelector('[data-team-modal-close]'),
  teamModalEl: document.querySelector('[data-team-modal]'),
  teamBackdropEl: document.querySelector('.team-backdrop'),
  peopleEl: document.querySelector('.people'),

  // modal
  openModalEl: document.querySelector('[data-modal-open]'),
  closeModalEl: document.querySelector('[data-modal-close]'),
  modalEl: document.querySelector('[data-modal]'),
  modalmarkupEl: document.querySelector('.modal__markup'),
  bodyEl: document.querySelector('body'),
  backdropEl: document.querySelector('.js-backdrop'),
  trailerEl: document.querySelector('.trailer'),
  modalWindowEl: document.querySelector('.modal'),

  // spinner
  spinner: document.querySelector('.spinner'),

  // to top button
  toTopButtonEl: document.querySelector('.toTopButton'),

  // theme(day/night)
  checkboxEl: document.getElementById('checkbox'),

  // filter
  yearOptionEl: document.querySelector('#yearpicker'),
  //genreOptionEl: document.querySelector('#genrepicker'),

  yearPickerEl: document.querySelector('#yearpicker'),
  genrePickerEl: document.querySelector('#genrepicker'),
  sortPickerEl: document.querySelector('#sortpicker'),
  clearBtnEl: document.querySelector('.clear-btn'),
  // clearBtnEl: document.querySelector('.clear-btn'),
  //filter
  // filterInputEl: document.querySelectorAll('.filter-input'),
  // filterSectionEl: document.querySelector('.filter__section'),
  //firebase
  GLOBAL_IS_LIB: false,
  GLOBAL_IS_QUE: false,
  GLOBAL_IS_REG_FORM: false,
  GLOBAL_IS_LOG_FORM: false,
  
  modalAuth: document.querySelector('.modalAuth'),
  modalForm: document.querySelector('.modal-form'),
  modalInpName: document.querySelector('.modal-form__input'),
  modalInpNameIcon: document.querySelector('.modal-form__icon-name'),
  nameBtnAddWatch: 'add to watched',
  nameBtnAddQueue: 'add to queue',
  nameBtnDelWatch: 'delete from watched',
  nameBtnDelQueue: 'delete from queue',
  //----
  nameBtnAddWatchRu: 'добавить в просмотренные',
  nameBtnAddQueueRu: 'добавить в очередь',
  nameBtnDelWatchRu: 'удалить из просмотренных',
  nameBtnDelQueueRu: 'удалить из очереди',
  //---
  nameBtnAddWatchUa: 'додати до переглянутих',
  nameBtnAddQueueUa: 'додати до черги',
  nameBtnDelWatchUa: 'видалити з переглянутих',
  nameBtnDelQueueUa: 'видалити з черги',

  // genres
  // genresEl: [
  //   {
  //     "id": 28,
  //     "genre-name": "Action",
  //     "genre-name_ru": "Экшн"
  //     "genre-name_ua": "Екшн"
  //   },
  //   {
  //     "id": 12,
  //     "genre-name": "Adventure",
  //     "genre-name_ru": "Приключения"
  //     "genre-name_ua": "Пригоди"
  //   },
  //   {
  //     "id": 16,
  //     "genre-name": "Animation",
  //     "genre-name_ru": "Анимационный"
  //      "genre-name_ua": "Анімаційний"
  //   },
  //   {
  //     "id": 35,
  //     "genre-name": "Comedy",
  //     "genre-name_ru": "Комедия"
  //     "genre-name_ua": "Комедія"
  //   },
  //   {
  //     "id": 80,
  //     "genre-name": "Crime",
  //     "genre-name_ru": "Криминал"
  //      "genre-name_ua": "Кримінал"
  //   },
  //   {
  //     "id": 99,
  //     "genre-name": "Documentary",
  //     "genre-name_ru": "Документальный"
  //    "genre-name_ua": "Документальний"
  //   },
  //   {
  //     "id": 18,
  //     "genre-name": "Drama",
  //     "genre-name_ru": "Драма"
  //    "genre-name_ua": "Драма"
  //   },
  //   {
  //     "id": 10751,
  //     "genre-name": "Family",
  //     "genre-name_ru": "Семейный"
  //    "genre-name_ua": "Сімейний"
  //   },
  //   {
  //     "id": 14,
  //     "genre-name": "Fantasy",
  //     "genre-name_ru": "Фантасктика"
  //    "genre-name_ua": "Фантастика"
  //   },
  //   {
  //     "id": 36,
  //     "genre-name": "History",
  //     "genre-name_ru": "Исторический"
  //    "genre-name_ua": "Історичний"
  //   },
  //   {
  //     "id": 27,
  //     "genre-name": "Horror",
  //     "genre-name_ru": "Хоррор"
  //    "genre-name_ua": "Жахи"
  //   },
  //   {
  //     "id": 10402,
  //     "genre-name": "Music",
  //     "genre-name_ru": "Музыка"
  //      "genre-name_ua": "Музичний"
  //   },
  //   {
  //     "id": 9648,
  //     "genre-name": "Mystery",
  //     "genre-name_ru": "Мистика"
  //    "genre-name_ua": "Містика"
  //   },
  //   {
  //     "id": 10749,
  //     "genre-name": "Romance",
  //     "genre-name_ru": "Мелодрама"
  //    "genre-name_ua": "Мелодрама"
  //   },
  //   {
  //     "id": 878,
  //     "genre-name": "Science Fiction",
  //     "genre-name_ru": "Научная фантастика"
  //      "genre-name_ua": "Наукова фантастика"
  //   },
  //   {
  //     "id": 10770,
  //     "genre-name": "TV Movie",
  //     "genre-name_ru": "Сериал"
  //      "genre-name_ua": "Серіал"
  //   },
  //   {
  //     "id": 53,
  //     "genre-name": "Thriller",
  //     "genre-name_ru": "Триллер"
  //      "genre-name_ua": "Трилер"
  //   },
  //   {
  //     "id": 10752,
  //     "genre-name": "War",
  //     "genre-name_ru": "Война"
  //    "genre-name_ua": "Про війну"
  //   },
  //   {
  //     "id": 37,
  //     "genre-name": "Western",
  //     "genre-name_ru": "Вестерн"
  //      "genre-name_ua": "Вестерн"
  //   }
  // ],

  //location
  langwrapEl: document.querySelector('.langWrap'),
  enEl: document.querySelector('#englishLink'),
  ruEl: document.querySelector('#russianLink'),
  ukEl: document.querySelector('#ukrainianLink'),

  // swiper

  swiperEl: document.querySelector('.swiper-wrapper'),
  swiperSlideEl: document.querySelector('.swiper-slide'),
  wrapperSwiperEl: document.querySelector('.wrapper-section'),
};

export { refs };
