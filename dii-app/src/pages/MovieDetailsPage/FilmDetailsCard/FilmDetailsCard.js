import InformationFilm from '../InformationFilm/TableInformationFilm';
import PropTypes from 'prop-types';
import {Container} from "@mui/material";

const FilmDetailsCard = ({ data }) => {
  const { title, tagline, poster_path } = data;
  return (
    <Container className={"Container"}>
      <h1 style={{fontSize:'50px'}}><i>{title}</i></h1>

      <Container className={"Film"}>
        <img style={{border:'3px solid black', width: '320px', height: '460px',marginLeft:'auto',marginRight:'auto'}}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="poster"
        />

        <div className={"Meta"}>
          <p style={{color:'red'}}>{tagline}</p>
          <InformationFilm data={data} />
        </div>
      </Container>
    </Container>
  );
};

export default FilmDetailsCard;

FilmDetailsCard.propTypes = {
  data: PropTypes.object.isRequired,
};
