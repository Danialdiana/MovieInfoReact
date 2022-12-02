import PropTypes from 'prop-types';
import './Info.css'

const TableInformationFilm = ({ data }) => {
  const {
    vote_average,
    release_date,
    production_countries,
    runtime,
    overview,
    genres,
  } = data;

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h2>Ratings:</h2>
          </td>
          <td>
            <span>{vote_average}</span>
          </td>
        </tr>
        <tr>
          <td>
            <h2>Release date:</h2>
          </td>
          <td>
            <span>{release_date}</span>
          </td>
        </tr>
        <tr>
          <td>
            <h2>Country:</h2>
          </td>
          <td>
            <span>{production_countries.map(el => el.name)}</span>
          </td>
        </tr>
        <tr>
          <td>
            <h2>Genres:</h2>
          </td>
          <td>
            <span>{genres.map(el => el.name).join(' ')}</span>
          </td>
        </tr>
        <tr>
          <td>
            <h2>Time:</h2>
          </td>
          <td>
            <span>{runtime} min.</span>
          </td>
        </tr>
        <tr>
          <td>
            <h2>Overview:</h2>
          </td>
          <td>
            <span>{overview} min.</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableInformationFilm;

TableInformationFilm.propTypes = {
  data: PropTypes.object.isRequired,
};
