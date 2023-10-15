import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import data from '../../utils/data/data.json';


const Container = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
     @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
        align-items: center;
        flex-direction: row;
     }

    `
const Link = styled.a`
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.colors.acyraRed};
    }
`
const Nav = () => {

    
    return(
        <Container>
        {data?.nav.map((item, index) => (
            <Link key={index} href={item.link}>{item.name}</Link>
        )
        )}
        </Container>
    )

}

export default Nav;