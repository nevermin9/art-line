const EMAIL_REG_EXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASS_VALID_LENGTH = 8;

export function isEmailValid(email: string) {
    return EMAIL_REG_EXP.test(email);
}

export function isPasswordConfirmationMatch(password: string, repeatPassword: string) {
    return password === repeatPassword;
}

export function isPasswordLengthValid(password: string) {
    return password.length >= PASS_VALID_LENGTH;
}

export function isPasswordContainsDigit(password: string) {
    return /\d/.test(password);
}
