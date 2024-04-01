import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: auto;
    margin-bottom: 1.25rem;
`
const Title = styled.h3`
    font-size: 5.5rem;
    font-family: ${({ theme }) => theme.font.secondary};
    color: ${({ theme }) => theme.colors.acyraLightRed};
    text-align: right;
    line-height: 1;
`

const H2Title = ({titleUp, titleDown}) => {
    return (
        <Container>
            <Title>{titleUp}</Title>
            <Title>{titleDown}</Title>
        </Container>
        
    );
};

H2Title.propTypes = {
    titleUp: PropTypes.string.isRequired,
    titleDown: PropTypes.string.isRequired,
}

export default H2Title;
