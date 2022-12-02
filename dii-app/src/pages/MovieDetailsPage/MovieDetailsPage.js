import { useState, useEffect } from 'react';
import {useParams, Outlet, Link} from 'react-router-dom';
import * as FilmsAPI from '../../services/Api';
import './MovieDetailsPage.css'
import FilmDetailsCard from './FilmDetailsCard/FilmDetailsCard';
import { useLocation } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState();
  const location = useLocation();
  const [prevLocation] = useState(location?.state?.from ?? '/');

  useEffect(() => {
    FilmsAPI.fetchFilmInfo(id)
      .then(data => {
        Loading.circle({
          svgColor: '#33ffff',
          cssAnimationDuration: 800,
          height: '200',
          width: '200',
        });
        setFilm(data);
      })
      .finally(() => {
        Loading.remove();
      });
  }, [id]);

  return (
    <>
      {film && <FilmDetailsCard data={film} />}
      <Outlet />
      <div className={"bgb"}>
        <Link className={"btgg"} to={prevLocation}>Go back</Link>
      </div>
    </>
  );
};

export default MovieDetailsPage;
