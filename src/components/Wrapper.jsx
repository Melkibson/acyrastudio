import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0 1rem;
    height: 100vh;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;

    @media screen and (${props => props.theme.breakpoints.mobile}) {
        ${props => props.theme.padding.mobile}
    }
    @media screen and (${props => props.theme.breakpoints.desktop}) {
        ${props => props.theme.padding.desktop}
    }
    @media screen and (${props => props.theme.breakpoints.desktopLarge}) {
        ${props => props.theme.padding.desktopLarge}
    }
   

`