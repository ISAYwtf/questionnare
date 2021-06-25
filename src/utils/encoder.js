export const encodeString = text => {
    if (typeof text !== "string")
        return ""

    return new Buffer(text, 'base64')
        .toString('utf8');
}
