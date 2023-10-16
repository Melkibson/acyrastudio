import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-width: 300px;
    height: auto;
    padding: 2rem 0;
    @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
      width: 45%;
       
    }
`
const Img = styled.img`

    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 3 2 0 ${({theme}) => theme.colors.acyraShadow}; 
    filter: grayscale(100%);
    `

const FeaturedImage = ({src}) => {

  return (
    <Container>
      <Img src={src} alt="Featured image of a service" />
    </Container>
  );
}

export default FeaturedImage;