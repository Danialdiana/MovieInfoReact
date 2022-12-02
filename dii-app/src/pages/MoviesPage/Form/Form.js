import './Form.css'
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import {Container} from "@mui/material";

const Form = ({ handleSubmit, handleInputChange, query }) => {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Container className={"inCon"}>
          {query ? (
            <input
              placeholder="Type to search"
              type="text"
              onChange={handleInputChange}
            />
          ) : (
            <input
              type="text"
              placeholder="Type to search"
              onChange={handleInputChange}
            />
          )}

          <button type="submit">
            <BsSearch size="20px" color="black" />
          </button>
        </Container>
      </form>
    </Container>
  );
};

export default Form;

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
