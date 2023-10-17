import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const CardTitle = styled.p`
    font-size: 1.5;
    font-weight: 600;
`

const CardPrice = styled.p`
    font-family: ${({ theme }) => theme.font.secondaryBold};
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.acyraBlack};
`

const CardHeading = ({ title, price }) => {
   return (
    <CardContainer>
        <CardTitle>{title}</CardTitle>
        <CardPrice>{price}</CardPrice>
    </CardContainer>
)}

export default CardHeading;