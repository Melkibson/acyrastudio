import React from 'react';
import styled from 'styled-components';
import Card from './package/Card';
import Title from './faq/Title';
import HeadingDescription from './package/HeadingDescription';

const Container = styled.div`
    padding: 5rem 0;
`
const CardRow = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    padding: 5rem 0;
    gap: 3rem;

    @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
        flex-direction: row;
    }
`;

const Package = ({cards, description, title}) => {
    return (
    <Container id="price">  
        <Title title={title}/>
        <HeadingDescription description={description}/>    
        <CardRow>
        {cards.map((card, index) => (
            <Card 
                key={index}
                title={card.title}
                price={`${card.price}€`}
                content={cards[index].content}
           />
        ))}
        </CardRow>
    </Container>
    );
};

export default Package;
