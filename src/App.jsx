import React from 'react';
import styled from 'styled-components/macro';

import Header from './components/Header/Header';
import InputEmail from './components/InputEmail/InputEmail';
import Footer from './components/Footer/Footer';

import ImageDashboard from './images/illustration-dashboard.png';

const Container = styled.main`
    text-align: center;
    /* height: 642px; */
    margin: 85px 25px 35px 25px;
`;

const Image = styled.img`
    margin-top: 40px;
    width: 320px;
    height: 200px;
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
