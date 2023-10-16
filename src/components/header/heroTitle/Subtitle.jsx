import React from "react";
import styled from "styled-components";

const Title = styled.h4`
    font-family: ${({ theme }) => theme.font.secondaryBold};
    font-size: 1rem;
    text-transform: uppercase;
    @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 3rem;
    }
    
`

const SubTitle = ({title}) => {
    return (
        <Title>{title}</Title>
    );
};

export default SubTitle;