function removeAllEmptyKeys(obj) {
    let newObject = {};

    Object.keys(obj).forEach((k) => {
        const val = obj[k];
        if (typeof val === 'object' && !Array.isArray(val) && val !== null) {
            const newVal = removeAllEmptyKeys(val);
            if (Object.keys(newVal).length > 0) {
                newObject[k] = newVal;
            }
        } else if (
            typeof val === 'boolean' ||
            typeof val === 'number' ||
            Boolean(val)
        ) {
            newObject[k] = val;
        }
    });

    return newObject;
}

module.exports = {
    removeAllEmptyKeys,
};
