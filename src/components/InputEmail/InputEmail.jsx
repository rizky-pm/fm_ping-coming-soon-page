import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { handleSubmit } from '../../utils/handleSubmit';

const Container = styled.form`
    margin-top: 35px;
    height: 120px;
`;

const HiddenLabel = styled.label`
    border-width: 0 !important;
    clip: rect(0.0625rem, 0.0625rem, 0.0625rem, 0.0625rem) !important;
    height: 0.0625rem !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    white-space: nowrap !important;
    width: 0.0625rem !important;
`;

const Input = styled.input`
    outline: none;
    border: ${(props) =>
        props.showError
            ? `1px solid ${props.theme.colors.paleBlue}`
            : '1px solid red'};
    width: 280px;
    height: 40px;
    border-radius: 20px;
    padding: 0 30px;

    ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${(props) => props.theme.colors.paleBlue};
        opacity: 1; /* Firefox */
    }
`;

const Button = styled.button`
    background-color: ${(props) => props.theme.colors.blue};
    color: white;
    font-family: 'Libre Franklin', sans-serif;
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    border: none;
    width: 280px;
    height: 40px;
    margin-top: ${(props) => (props.showError ? '0' : '25px')};
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    transition: all ease 0.2s;

    :active {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
`;

const ErrorMessage = styled.em`
    display: block;
    margin-top: 10px;
    font-size: 12px;
    color: red;
`;

const InputEmail = () => {
    const [validEmail, setValidEmail] = useState({
        valid: true,
        errorMsg: null,
    });

    return (
        <Container
            onSubmit={(e) => {
                handleSubmit(e, validEmail, setValidEmail);
            }}
            noValidate
            autoComplete='off'
        >
            <HiddenLabel>Email</HiddenLabel>
            <Input
                type='email'
                placeholder='Your email address...'
                name='email'
                id='email'
                showError={validEmail.valid}
            />
            <ErrorMessage id='Error Message'>
                {validEmail.errorMsg}
            </ErrorMessage>
            <Button showError={validEmail.valid}>Notify Me</Button>
        </Container>
    );
};

export default InputEmail;
