import styled from 'styled-components';

const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 40px;
    padding: 3rem 0;
    
`;

const Copyright = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.acyraLightRed};
`;

const Footer = () => {
    const year = new Date().getFullYear();  

    return (
        <FooterContainer>
            <Copyright>
                © {year} Acyra Studio. All rights reserved.
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;
