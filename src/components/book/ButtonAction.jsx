import React from 'react';
import styled from 'styled-components';

const RowButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    gap: 1.25rem;
`;
const Button = styled.button`
    
`;

const Link = styled.a`
    display: flex;
    align-items: center;
    height: 30px;
    font-weight: 700;
    background-color: ${props => props.$isTel ? ({ theme }) => theme.colors.acyraLightBlack : ({ theme }) => theme.colors.acyraRed};
    color: ${props => props.$isTel ? ({ theme }) => theme.colors.acyraLightRed : ({ theme }) => theme.colors.acyraWhite};
    cursor: pointer;
    padding: 1.75rem 1.5rem;
    border-radius: 1rem;
    &:hover { 
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        color : ${({ theme }) => theme.colors.acyraWhite};
    }
`;

const ButtonAction = ({insta, tel, hrefTel, hrefInsta}) => {
    return (
        <RowButton>
            <Link href={hrefInsta}>{insta}</Link>
            <Link href={hrefTel}$isTel>{tel}</Link>
        </RowButton>
    );
}

export default ButtonAction;