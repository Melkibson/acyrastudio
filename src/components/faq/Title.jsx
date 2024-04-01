import PropTypes from "prop-types";
import styled from "styled-components";

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.font.secondaryBold};
  font-size: 5.5rem;
  line-height: normal;
  text-align: center;
  padding: 2rem 0;
`;

const Title = ({ title }) => {
  return <Heading>{title}</Heading>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
