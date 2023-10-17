import styled from "styled-components";
import Nav from "./header/Nav";
import Title from "./header/heroTitle/Title";
import Subtitle from "./header/heroTitle/Subtitle";

const Container = styled.header`
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
    `
const Header = ({image, title}) => {
   return (
        <Container id="home">
            <Nav/>
            <Title image={image}/>
            <Subtitle title={title}/>
        </Container>
        
    )
}


export default Header;