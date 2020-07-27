export class Validator {
    static required(value) {
        if (!value)
            return "Field is required";
    }

    static maxLengthCreator = (maxLength) => (value) => {
        if (value && value.length > maxLength)
            return `Max length is ${maxLength}  symbols`;
    };
}