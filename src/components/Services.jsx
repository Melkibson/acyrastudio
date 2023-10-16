import React from 'react';
import styled from 'styled-components';
import data from '../utils/data/data.json';
import ServicesCard from './services/ServicesCard';

const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 5rem 0;
`;
function Services() {

    return (
        <Container id="service">
            {data.service.map((service, index) => (
                <ServicesCard
                    key={index}
                    featuredImage={service.featuredImage}
                    titleUp={service.titleUp}
                    titleDown={service.titleDown}
                    content={service.content}
                />
            ))}
             
        </Container>
        );
}

export default Services;
