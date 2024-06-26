import PropTypes from "prop-types";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1700px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = ({ image }) => {
  return (
    <Container>
      <Img src={image} alt="Featured image of header" />
    </Container>
  );
};

Title.propTypes = {
  image: PropTypes.string.isRequired,
};


export default Title;
