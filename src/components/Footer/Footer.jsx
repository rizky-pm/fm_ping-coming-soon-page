import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// import './Footer.css';

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    height: 30px;
`;

const Icon = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: ${(props) => props.theme.colors.blue};
    transition: all ease 0.2s;
    box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
        3px 3px 5px rgba(0, 0, 0, 0.1);

    :hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.blue};
        color: white;
    }
`;

const CopyrightText = styled.p`
    color: ${(props) => props.theme.colors.gray};
    margin-top: 30px;
    font-size: 12px;
`;

const Attribution = styled.p`
    color: ${(props) => props.theme.colors.gray};
    width: 60%;
    font-size: 12px;
`;

const AttributionLink = styled.a`
    color: inherit;
    transition: all ease 0.2s;
    font-weight: ${(props) => props.theme.fontWeights.semiBold};

    :hover {
        color: ${(props) => props.theme.colors.blue};
        text-decoration: none;
    }
`;

const Footer = () => {
    return (
        <Container>
            <Icons>
                <Icon href='#'>
                    <FontAwesomeIcon icon={faFacebookF} />
                </Icon>
                <Icon href='#'>
                    <FontAwesomeIcon icon={faTwitter} />
                </Icon>
                <Icon href='#'>
                    <FontAwesomeIcon icon={faInstagram} />
                </Icon>
            </Icons>
            <CopyrightText>
                &copy; Copyright Ping. All rights reserved.
            </CopyrightText>
            <Attribution>
                Challenge by{' '}
                <AttributionLink
                    href='https://www.frontendmentor.io?ref=challenge'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Frontend Mentor
                </AttributionLink>
                . Coded by{' '}
                <AttributionLink href='https://github.com/rizky-pm'>
                    Rizky Putra Mahendra
                </AttributionLink>
                .
            </Attribution>
        </Container>
    );
};

export default Footer;
