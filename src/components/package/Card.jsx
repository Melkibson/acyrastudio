import React from 'react';
import styled from 'styled-components';
import {AiOutlineCheck} from 'react-icons/ai'
import { handleOnclick } from '../../utils/scrollToView';
import CardHeading from './CardHeading';

const CardContainer = styled.div`
    display: flex;
    height: 400px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.acyraLightRed};
    border-radius: 1.5rem;
    padding: 2rem;

    @media screen and (${({ theme }) => theme.breakpoints.desktopLarge}) {
        width: 320px;
    }
`;

const CardTitle = styled.p`
    font-size: 1.5;
    font-weight: 600;
`

const CardPrice = styled.p`
    font-family: ${({ theme }) => theme.font.secondaryBold};
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.acyraBlack};
    margin: 1rem 0;
`
const CardList = styled.ul`
    list-style: none;
    
`
const CardListItem = styled.li`
    font-size: 1.5;
    font-weight: 600;
    margin-bottom: 1rem;
    font-weight: 400;
    display: flex;

`

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.acyraBlack};
    color: ${({ theme }) => theme.colors.acyraWhite};
    border: none;
    border-radius: 1.25rem;
    width: 100%;
    height: 52px;
    font-size: 1.5;
    font-weight: 600;
    cursor: pointer;

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
                        <CardListItem key={index}><IconContainer><AiOutlineCheck/></IconContainer><CardListText>{item}</CardListText></CardListItem>
                    ))}
                </CardList>
                <Button onClick={() => {handleOnclick("book")}}>Réservez</Button>
        </CardContainer>
    );
};

export default Card;
