import React from 'react';
import styled from 'styled-components/macro';

import Logo from '../../images/logo.svg';

const Container = styled.div``;

const BrandLogo = styled.img`
    width: 55px;
`;

const MainHeading = styled.p`
    color: ${(props) => props.theme.colors.gray};
    margin-top: 45px;
    font-size: 24px;
`;

const Highlighted = styled.span`
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: ${(props) => props.theme.colors.veryDarkBlue};
`;

const SecondaryHeading = styled.p`
    margin-top: 20px;
`;

const Header = () => {
    return (
        <Container>
            <BrandLogo src={Logo} alt='Ping Logo' />
            <MainHeading>
                We are launching <Highlighted>soon!</Highlighted>
            </MainHeading>
            <SecondaryHeading>Subscribe and get notified</SecondaryHeading>
        </Container>
    );
};

export default Header;
