import {
    loginRequiredField,
    registerRequiredField,
} from './authentication.constant.js';

export const registerValidator = (data) =>
    registerRequiredField.find((item) => !data[item.field])?.code;

export const loginValidator = (data) =>
    loginRequiredField.find((item) => !data[item.field])?.code;
