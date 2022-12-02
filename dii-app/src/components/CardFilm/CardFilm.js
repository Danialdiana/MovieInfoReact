import { GenerateGenres } from '../Genres/GenerateGenres';
import PropTypes from 'prop-types';
import './CardFilm.css'

const CardFilm = ({ itemData }) => {
  const { poster_path, title, genre_ids } = itemData;
  return (
    <>
      <div className={"Item"}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png`
          }
          alt=""
        />
        <div>
          <p>{title}</p>
          <GenerateGenres genresId={genre_ids} />
        </div>
      </div>
    </>
  );
};

export default CardFilm;

CardFilm.propTypes = {
  itemData: PropTypes.object.isRequired,
};
