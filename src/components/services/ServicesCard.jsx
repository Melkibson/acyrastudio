import styled from 'styled-components';
import H2Title from './Title';
import FeaturedImage from './FeaturedImage';
import Content from './Content';

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
        flex-direction: row-reverse;
        gap: 5rem;
        &:last-child {
            flex-direction: row;
            align-items: center;
            ${Description} {
                text-align: right;

            }
        }

    }

`




function ServicesCard({featuredImage, titleUp, titleDown, content}) {
    return (
        <ServicesContainer>
                <FeaturedImage src={featuredImage}/>
                <Description>
                    <H2Title titleUp={titleUp} titleDown={titleDown}/>
                    <Content content={content}/> 
                </Description>
        </ServicesContainer>
    );
}

export default ServicesCard;
