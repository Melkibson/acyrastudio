import React from 'react';
import styled from 'styled-components';

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;
`;

const QuestionText = styled.h3`
    font-size: 1.25rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.acyraLightRed};
`;


const AnswerText = styled.p`
    font-size: 1rem;
    margin: 0;
`;

const Question = ({ question, answer }) => {
    return (
        <QuestionContainer>
            <QuestionText>{question}</QuestionText>
             <AnswerText>{answer}</AnswerText>
        </QuestionContainer>
    );
};

export default Question;
