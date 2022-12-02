import { useState, useEffect } from 'react';
import FilmList from '../../components/FilmList/FilmList';
import * as FilmsAPI from '../../services/Api';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const MainPage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    FilmsAPI.fetchPopularFilms()
      .then(data => {
        Loading.circle({
          svgColor: '#33ffff',
          cssAnimationDuration: 800,
          height: '200',
          width: '200',
        });
        setFilms(data);
      })
      .finally(() => {
        Loading.remove();
      });
  }, []);

  return <FilmList data={films} />;
};

export default MainPage;
