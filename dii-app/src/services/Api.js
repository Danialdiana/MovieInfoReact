import axios from 'axios';

const API_KEY = '14e31ad8b433910f0e5a9cc42c7abaf1';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchPopularFilms() {
  const response = await axios.get(
    `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
}

export async function fetchSearchFilmByName(filmName) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${filmName}&page=1&include_adult=false`
  );
  return response.data.results;
}

export async function fetchFilmInfo(movie_id) {
  const response = await axios.get(
    `/movie/${movie_id}?api_key=14e31ad8b433910f0e5a9cc42c7abaf1&language=en-US`
  );
  return response.data;
}

