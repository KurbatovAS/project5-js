import FetchSearchMovie from '../API/fetchSearchMovie';

import PopularMovies from '../API/fetchPopularMovie';

import handleMovieCard from './handleMovieCard';
import filmCard from '../templates/preview_card.hbs';
import trailer from '../API/fetchTrailer';
// import {onSwiperNowPlayingMovies} from '../scripts/swiper'

import { refs } from './refs';
import { debounce } from 'lodash';
import { onRenderPagination } from '../scripts/pagination';
import { genreValue } from './filter';
// import createCard from './filter'


import FetchNowPlayingMovies from '../API/fetchNowPlayingMovies';
import handleSwiperMovieCard from './handleSwiperMovieCard';

export default onRenderPopularMoviesMarkup;

refs.formEl.addEventListener('input', debounce(onSubmit, 500));
const apiSearchData = new FetchSearchMovie();
const popularMovie = new PopularMovies();
const fetchNowPlayingMovies = new FetchNowPlayingMovies();


onSwiperNowPlayingMovies();
trailer.onPlayTrailer(document.querySelectorAll('.movies__playSwiperBtn'));


function onSwiperNowPlayingMovies() {
    fetchNowPlayingMovies.fetchNowPlaying().then(movies => {

        console.log(movies)
        handleSwiperMovieCard(movies)
    });

    JSON.parse(localStorage.getItem('currentSwiperPage')).map(films => {
        films.results.forEach(({ id, poster_path, title, genre_ids }) => {
            const markupSwiper = ` <li class="swiper-slide"  id="${id}">
     
    <img class="swiper__poster" src="${poster_path}" alt="${title} poster"  loading="lazy" />
    <svg class= "movies__playSwiperBtn" id="${id}" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="50" height="50"
                viewBox="0 0 172 172"
                ><g fill="none"></g><path d="M0,172v-172h172v172z" fill="none" ></path><g class="fillForPlayBtn" fill="#ffffff"><path d="M86,6.88c-43.65844,0 -79.12,35.46156 -79.12,79.12c0,43.65844 35.46156,79.12 79.12,79.12c43.65844,0 79.12,-35.46156 79.12,-79.12c0,-43.65844 -35.46156,-79.12 -79.12,-79.12zM86,13.76c39.93625,0 72.24,32.30375 72.24,72.24c0,39.93625 -32.30375,72.24 -72.24,72.24c-39.93625,0 -72.24,-32.30375 -72.24,-72.24c0,-39.93625 32.30375,-72.24 72.24,-72.24zM61.92,45.58v80.84l5.16,-3.01l58.48,-34.4l5.0525,-3.01l-5.0525,-3.01l-58.48,-34.4zM68.8,57.62l48.16,28.38l-48.16,28.38z"></path></g></g>
            </svg>
        
    <p class="swiper__name">${title}</p>
    <p class="swiper__genre">${genre_ids} </p>
    
</li>`;

            refs.swiperEl.insertAdjacentHTML('beforeend', markupSwiper);
        });
    });
}


window.onload = function() {
    refs.bodyEl.style.overflow = 'hidden';

    window.setTimeout(function() {
        refs.preloaderEl.style.visibility = 'hidden';
        refs.preloaderEl.style.opacity = '0';
        refs.bodyEl.style.overflow = '';
    }, 1000);
}

onRenderPopularMoviesMarkup()


function onEnterIgnor() {
    refs.formEl.addEventListener('keypress', event => {
        if (event.code === 'Enter') {
            event.preventDefault();
        }
    });
}

function onRenderPopularMoviesMarkup(e) {

    if (refs.errorEl.classList != 'visually-hidden') {
        refs.errorEl.classList.add('visually-hidden');
    }
    refs.spinner.classList.remove('is-hidden');

    onEnterIgnor();

    popularMovie
        .fetchPopular()
        .then(film => {
            const markup = filmCard(handleMovieCard(film.results));
            refs.galleryEl.innerHTML = markup;
            trailer.onPlayTrailer(document.querySelectorAll('.movies__playBtn'));

            onRenderPagination(film.total_pages, film.page);
        })
        .catch(error => {
            popularMovie.fetchPopular().then(film => {
                const markup = filmCard(handleMovieCard(film.results));
                refs.galleryEl.innerHTML = markup;

                trailer.onPlayTrailer(document.querySelectorAll('.movies__playBtn'));
                // trailer.onPlayTrailer(document.querySelectorAll('.movies__playSwiperBtn'));
                onRenderPagination(film.total_pages, film.page);
            });
        })
        .finally(() => {
            refs.spinner.classList.add('is-hidden');
        });
}

function onSubmit(event) {
    event.preventDefault();

    onEnterIgnor();

    apiSearchData.query = event.target.value;

    if (apiSearchData.query === '') {
        onRenderPopularMoviesMarkup();
    }

    refs.galleryEl.innerHTML = '';
    apiSearchData.resetPage();
    onRenderPaginationMarkup();

}

function onRenderPaginationMarkup() {
    refs.spinner.classList.remove('is-hidden');

    if (apiSearchData.query === '') {
        refs.filterEl.style.display = 'block';
        return;
    }

    apiSearchData
        .fetchMovies()
        .then(film => {
            refs.errorEl.classList.add('visually-hidden');
            refs.filterEl.style.display = 'none';

            const markup = filmCard(handleMovieCard(film.results));
            //n_branch;
            refs.galleryEl.innerHTML = markup;
            trailer.onPlayTrailer(document.querySelectorAll('.movies__playBtn'));
            // trailer.onPlayTrailer(document.querySelectorAll('.movies__playSwiperBtn'));
            onRenderPagination(film.total_pages, film.page);

            if (film.total_results === 0) {
                refs.errorEl.classList.remove('visually-hidden');
                refs.spinner.classList.add('is-hidden');
                refs.filterSectionEl.classList.add('visually-hidden');
            }
            if (film.total_pages === 1) {
                refs.spinner.classList.add('is-hidden');
                refs.filterSectionEl.classList.remove('visually-hidden');
            }
        })
        .catch(error => onRenderPopularMoviesMarkup())
        .finally(() => {
            refs.spinner.classList.add('is-hidden');
        });
}

export { apiSearchData, popularMovie };