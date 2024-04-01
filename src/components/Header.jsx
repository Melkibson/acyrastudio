import styled from "styled-components";
import PropTypes from "prop-types";
import Nav from "./header/Nav";
import Title from "./header/heroTitle/Title";
import Subtitle from "./header/heroTitle/Subtitle";

const Container = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  width: 100vw;
  padding: 5rem 2rem;
  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8.5rem;
    max-height: 100vh;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`;
const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.acyraBlack};
  opacity: 0.7;
  z-index: -1;
`;
const Header = ({ image, title, videoSrc }) => {
  return (
    <Container id="home">
      <VideoOverlay />
      <VideoBackground autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Nav />
      <Title image={image} />
      <Subtitle title={title} />
    </Container>
  );
};

Header.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
};

export default Header;
