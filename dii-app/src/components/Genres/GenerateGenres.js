import { genresInfo } from './genresInfo';
import styled from 'styled-components';

export const GenerateGenres = genresId => {
  const id = Object.values(genresId);
  const listGenres = [];

  genresInfo.forEach(el => {
    if (id[0].includes(el.id)) {
      listGenres.push(el.name);
    }
  });
  return <Genres>{listGenres.slice(0, 2).join(', ') + ', Other'}</Genres>;
};

const Genres = styled.span`
  color: #ff6b01;
`;
