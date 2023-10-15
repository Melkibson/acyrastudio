import styled from "styled-components";
import Nav from "./header/Nav";
import data from "../utils/data/data.json";
import FeaturedImage from "./services/Image";
import Title from "./header/heroTitle/Title";
import Subtitle from "./header/heroTitle/Subtitle";

const Container = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    height: 100vh;
    width: 100vh;
`
const Header = ({image, title}) => {
   return (
        <Container>
            <Nav/>
            <Title image={image}/>
            <Subtitle title={title}/>
        </Container>
        
    )
}


export default Header;