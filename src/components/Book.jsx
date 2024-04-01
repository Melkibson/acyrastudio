import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "./faq/Title";
import ButtonAction from "./book/ButtonAction";

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Book = ({ title, insta, tel, hrefTel, hrefInsta }) => {
  return (
    <div id="book">
      <TitleContainer>
        <Title title={title} />
        <ButtonAction
          insta={insta}
          tel={tel}
          hrefTel={hrefTel}
          hrefInsta={hrefInsta}
        />
      </TitleContainer>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  insta: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  hrefTel: PropTypes.string.isRequired,
  hrefInsta: PropTypes.string.isRequired,
};

export default Book;
