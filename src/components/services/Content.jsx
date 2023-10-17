import React from "react"; 
import styled from "styled-components";

const Description = styled.p`
    width: 100%;
    max-width: 500px;
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.font.primary};
    text-align: left;
    line-height: 1.2;
    padding: 1.25rem 0;
   
    @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.5rem;
    }

`

const Content = ({content}) => {
    return (
        <Description>
            {content}
        </Description>
    );
}

export default Content;