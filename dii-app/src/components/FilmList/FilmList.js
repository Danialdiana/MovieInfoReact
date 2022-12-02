import CardFilm from '../CardFilm/CardFilm';
import './FilmList.css'
import PropTypes from 'prop-types';
import {Link, useLocation} from 'react-router-dom';

const FilmList = ({ data }) => {
  const location = useLocation();

  return (
    <div className={"List"}>
      {data.map(el => (
        <Link
          to={`/movies/${el.id}`}
          state={{ from: location }}
          key={el.id}
        >
          <CardFilm itemData={el} />
        </Link>
      ))}
    </div>
  );
};

export default FilmList;

FilmList.propTypes = {
  data: PropTypes.array.isRequired,
};
