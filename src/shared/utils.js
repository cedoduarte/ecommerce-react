export const fixDateFormat = (dateInput) => {
    const modifiedString = dateInput.substring(0, dateInput.indexOf('T'));
    return modifiedString;
}