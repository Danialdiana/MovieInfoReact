import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as FilmsAPI from '../../services/Api';
import FilmList from '../../components/FilmList/FilmList';
import Form from './Form/Form';
import styled from 'styled-components';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [films, setFilms] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (query) {
      setSearchParams(`query=${query}`);
      FilmsAPI.fetchSearchFilmByName(query)
        .then(data => {
          Loading.circle({
            svgColor: '#ff6b01',
          });
          setFilms(data);
          if (data.length === 0) {
            Notify.info('Nothing found', {
              autoClose: 2000,
            });
          }
        })
        .finally(() => {
          Loading.remove();
        });
    }
  }, [query, setSearchParams]);

  const handleInputChange = e => {
    setSearchValue(e.target.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();

    if (searchValue === '') {
      Notify.failure(' Please enter the name!');

      return;
    }

    setQuery(searchValue);
  };

  return (
    <>
      <ContainerForm>
        <Form
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          query={query}
        />
      </ContainerForm>
      <FilmList data={films} />
    </>
  );
};

const ContainerForm = styled.div`
  margin-top: 20px;
`;

export default MoviesPage;
