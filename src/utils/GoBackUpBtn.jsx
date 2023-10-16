import React from 'react';
import styled from 'styled-components';
import { handleOnclick } from './scrollToView';
import { BsArrowUpCircle } from 'react-icons/bs';
const Button = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.5rem;
  padding: 0.2rem ;
  background-color: ${({ theme }) => theme.colors.acyraRed};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  bottom: 2rem;
  right: 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.acyraLightRed};
  }
`;

const GoBackUpBtn = () => {
  return (
    <Button onClick={() => {handleOnclick("home")}}><BsArrowUpCircle size={"40"}/></Button>
  );
};

export default GoBackUpBtn;
