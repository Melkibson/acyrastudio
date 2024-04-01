import styled from 'styled-components';
import PropTypes from "prop-types";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.acyraBlack};
`

const CardTitle = styled.p`
    font-size: 1.5;
    font-weight: 600;
`

const CardPrice = styled.p`
    font-family: ${({ theme }) => theme.font.secondaryBold};
    font-size: 5rem;
`

const CardHeading = ({ title, price }) => {
   return (
    <CardContainer>
        <CardTitle>{title}</CardTitle>
        <CardPrice>{price}</CardPrice>
    </CardContainer>
)}

CardHeading.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};


export default CardHeading;