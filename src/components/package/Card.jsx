import React from 'react';
import styled from 'styled-components';
import {AiOutlineCheckCircle} from 'react-icons/ai'
import { IconContext } from "react-icons";
import { handleOnclick } from '../../utils/scrollToView';
import CardHeading from './CardHeading';

const CardContainer = styled.div`
    display: flex;
    height: 460px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 100%;
    ${({ theme }) => theme.colors.cardGradientGold};
    border-radius: 1.5rem;
    padding: 2rem;
    &:first-child {
        ${({ theme }) => theme.colors.cardGradientSilver};
    }
    &:last-child {
        ${({ theme }) => theme.colors.cardGradientPlatine};

    }
    &:nth-child(2){
        transform: scale(1.1);
    }
    @media screen and (${({ theme }) => theme.breakpoints.desktopLarge}) {
        width: 320px;
    }
`;

const CardList = styled.ul`
    list-style: none;
    color: ${({ theme }) => theme.colors.acyraBlack};
    
`
const CardListItem = styled.li`
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 1rem;
    display: flex;

`

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.acyraBlack};
    color: ${({ theme }) => theme.colors.acyraWhite};
    border: none;
    border-radius: 1.25rem;
    width: 100%;
    min-height: 52px;
    font-size: 1.5;
    font-weight: 600;
    align-self: center;
    cursor: pointer;
    &:hover {
        width: calc(100% - 3rem);
        transition: all 0.2s ease-in;

    }

`
const CardListText = styled.div`
    margin-left: 1rem;

`
const IconContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: 100%
`

const Card = ({title, price, content,}) => {
    const card = document.getElementById("cardPrice");
    return (
        <CardContainer id="cardPrice">
           <CardHeading
                title={title}
                price={price}
           /> 
            <CardList>
                {content.map((item, index) => (
                    <CardListItem key={index}>
                        <IconContainer>
                            <AiOutlineCheckCircle size={20}/>
                        </IconContainer>
                        <CardListText>{item}</CardListText>
                    </CardListItem>
                ))}
            </CardList>
            <Button onClick={() => {handleOnclick("book")}}>Réservez</Button>
        </CardContainer>
    );
};

export default Card;
