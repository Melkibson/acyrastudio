import React from 'react';
import styled from 'styled-components';
import Card from './package/Card';
import Title from './faq/Title';

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
const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const Description = styled.p`
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
    line-height: 1.2;
    ${({ theme }) => theme.colors.acyraRed};
`
const DescriptionEmphasis = styled.span`
       color : ${({ theme }) => theme.colors.acyraLightRed};
       font-weight: 700;
       margin-left: 0.5rem;



`
const Package = ({cards, description, title}) => {
    return (
    <div id="price">  
        <Title title={title}/>
        <ContainerDescription>
            <Description>{description.tailored}<DescriptionEmphasis>{description.emphasis[0]}</DescriptionEmphasis></Description>
            <Description>{description.catalog}<DescriptionEmphasis>{description.emphasis[1]}</DescriptionEmphasis></Description>
            <Description>{description.license}<DescriptionEmphasis>{description.emphasis[2]}</DescriptionEmphasis></Description>
            <Description>{description.nightly}</Description>

        </ContainerDescription>    
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
    </div>
    );
};

export default Package;
