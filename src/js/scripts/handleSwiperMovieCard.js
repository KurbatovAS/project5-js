import FetchGenre from '../API/fetchGenre';
import FilmsSwiperStorage from './swiperLocal-storage';

const filmsSwiperStorage = new FilmsSwiperStorage();
const apiGenreData = new FetchGenre();

export default function handleSwiperMovieCard(movies) {
  
  movies.results.forEach(elem => {
    if (elem.title.length > 30) {
      elem.title = elem.title.slice(0, 30) + '...';
    }


    if (elem.genre_ids.length > 0) {
      elem.genre_ids = apiGenreData
        .ganreTranspiler(elem.genre_ids)
        .slice(0, 2)
        .join(', ');
    } else {
      let unknown = "Unknown"
      if (langs === 'ru') {
        unknown = "Неизвестно"
      }
      if (langs === 'uk') {
        unknown = 'Невідомо';
      }
      if (langs === 'en') {
        unknown = "Unknown"
      }
      elem.genre_ids = unknown;
    }

    
    if (elem.poster_path) {
      elem.poster_path = 'https://image.tmdb.org/t/p/w500' + elem.poster_path;
    }else{
      elem.poster_path = 'https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-1024x898.png'
    }
  });
  
  filmsSwiperStorage.addToCurrentSwiper(movies);

  return movies;
} 