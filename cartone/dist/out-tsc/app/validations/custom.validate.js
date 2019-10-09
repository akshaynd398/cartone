export function emailValidation() {
    return function (control) {
        var emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (emailPattern.test(control.value)) {
            return null;
        }
        else {
            return { emailErr: true };
        }
    };
}
export function len(len) {
    return function (control) {
        if (control.value && control.value.length >= len) {
            return null;
        }
        else {
            return { minLength: true };
        }
    };
}
export function numeric() {
    return function (control) {
        if (parseInt(control.value)) {
            return null;
        }
        else {
            return { numeric: true };
        }
    };
}
//# sourceMappingURL=custom.validate.js.map