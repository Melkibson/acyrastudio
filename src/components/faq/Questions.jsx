import PropTypes from "prop-types";
import styled from "styled-components";

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.5;
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

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Question;
