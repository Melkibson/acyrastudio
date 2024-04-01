import styled from 'styled-components';
import PropTypes from "prop-types";

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
    text-align: center;
    ${({ theme }) => theme.colors.acyraRed};
`
const DescriptionEmphasis = styled.span`
       color : ${({ theme }) => theme.colors.acyraLightRed};
       font-weight: 700;
       margin-left: 0.5rem;



`

const HeadingDescription = ({description}) => {
    return (
        <ContainerDescription>
            <Description>{description.tailored}<DescriptionEmphasis>{description.emphasis[0]}</DescriptionEmphasis></Description>
            <Description>{description.catalog}<DescriptionEmphasis>{description.emphasis[1]}</DescriptionEmphasis></Description>
            <Description>{description.license}<DescriptionEmphasis>{description.emphasis[2]}</DescriptionEmphasis></Description>
            <Description>{description.nightly}</Description>
        </ContainerDescription>
        )
}

HeadingDescription.propTypes = {
  description: PropTypes.object.isRequired,
};

export default HeadingDescription;