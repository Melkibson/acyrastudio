import React from 'react';
import styled from 'styled-components';
import {AiOutlineCheck} from 'react-icons/ai'

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
        width: 500px;
    }
`;

const CardTitle = styled.p`
    font-size: 1.5;
    font-weight: 600;
`

const CardPrice = styled.p`
    font-family: ${({ theme }) => theme.font.price};
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.acyraBlack};
    margin-bottom: 1rem;
`
const CardList = styled.ul`
    list-style: none;
    
`
const CardListItem = styled.li`
    font-size: 1.5;
    font-weight: 600;
    margin-bottom: 1rem;

`

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.acyraBlack};
    color: ${({ theme }) => theme.colors.acyraWhite};
    border: none;
    border-radius: 1rem;
    width: 100%;
    height: 52px;
    font-size: 1.5;
    font-weight: 600;

`
const CardListText = styled.span`
    margin-left: 1rem;

`


const Card = ({title, price, content,}) => {
    return (
        <CardContainer>
           <CardTitle>{title}</CardTitle>
             <CardPrice>{price}</CardPrice>
                <CardList>
                    {content.map((item, index) => (
                        <CardListItem key={index}><AiOutlineCheck/><CardListText>{item}</CardListText></CardListItem>
                    ))}
                </CardList>
                <Button>Book now</Button>
        </CardContainer>
    );
};

export default Card;
