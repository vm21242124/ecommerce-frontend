
export const appendStringAfterLength = (word, length, appendString) => {
    if (word.length > length) {
        return word.slice(0, length) + appendString;
    }
    return word;
};
