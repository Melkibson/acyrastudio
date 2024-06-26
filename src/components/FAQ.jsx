import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "./faq/Title";
import Question from "./faq/Questions";

const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 4.5rem 0;
`;

const FAQ = ({ title, content }) => {
  return (
    <div id="faq">
      <Title title={title} />
      <Container>
        {content.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </Container>
    </div>
  );
};

FAQ.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
};

export default FAQ;
