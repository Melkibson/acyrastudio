import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 40vh;
    height: auto;
    @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
    }
`

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = ({image}) => {
    return (
        <Container>
            <Img src={image} alt="Featured image of header" />
        </Container>
    );
};

export default Title;
