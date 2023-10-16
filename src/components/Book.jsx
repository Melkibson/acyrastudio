import React from 'react';
import styled from 'styled-components';
import Title from './faq/Title';
import ButtonAction from './book/ButtonAction';

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center
`

const Book = ({title, insta, tel, hrefTel, hrefInsta}) => {
    return (
        <div id="book">
            <TitleContainer>
                <Title title={title}/>
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

export default Book;
