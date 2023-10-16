import React from 'react';
import styled from 'styled-components'; 

const Heading = styled.h2`
    font-family: ${({ theme }) => theme.font.secondaryBold};
    font-size: 5.5rem;
    line-height: normal;
    text-align: center;
    padding: 2rem 0;
    `
    
const Title = ({title}) => {
    return (
        <Heading>{title}</Heading>
    );
};

export default Title;
