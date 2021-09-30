const validEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const handleSubmit = (e, validEmail, setValidEmail) => {
    e.preventDefault();
    const inputEmail = e.target.email.value;

    if (inputEmail.length < 1) {
        setValidEmail({
            valid: false,
            errorMsg: 'Whoops! It looks like you forgot to add your email',
        });
        e.target.email.setAttribute('aria-invalid', 'true');
        e.target.email.setAttribute('aria-describedBy', 'Error Message');
    } else if (!validEmailRegex.test(inputEmail)) {
        setValidEmail({
            valid: false,
            errorMsg: 'Please provide a valid email address',
        });
        e.target.email.setAttribute('aria-invalid', 'true');
        e.target.email.setAttribute('aria-describedBy', 'Error Message');
    } else {
        setValidEmail({
            valid: true,
            errorMsg: null,
        });
        e.target.email.removeAttribute('aria-invalid');
        e.target.email.removeAttribute('aria-describedBy');
    }
};
