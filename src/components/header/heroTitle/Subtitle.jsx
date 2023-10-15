import React from "react";
import styled from "styled-components";

const Title = styled.h4`
    font-family: ${({ theme }) => theme.font.secondaryBold};
    font-size: 1.5;
    text-transform: uppercase;
`

const SubTitle = ({title}) => {
    return (
        <Title>{title}</Title>
    );
};

export default SubTitle;