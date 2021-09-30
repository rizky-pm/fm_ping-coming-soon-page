import React from 'react';
import styled from 'styled-components/macro';

import Header from './components/Header/Header';
import InputEmail from './components/InputEmail/InputEmail';
import Footer from './components/Footer/Footer';

import ImageDashboard from './images/illustration-dashboard.png';

const Container = styled.main`
    text-align: center;
    margin: 85px 25px 35px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (${(props) => props.theme.breakpoints.s}) {
        margin: 60px 70px 35px 70px;
    }
`;

const Image = styled.img`
    margin-top: 40px;
    width: 320px;
    height: 200px;

    @media only screen and (${(props) => props.theme.breakpoints.s}) {
        width: 640px;
        height: 385px;
        margin-top: 50px;
    }
`;

function App() {
    return (
        <Container>
            <Header />
            <InputEmail />
            <Image src={ImageDashboard} alt='Image Dashboard' />
            <Footer />
        </Container>
    );
}

export default App;
