// Section 14: Differencing Predictor (p. 64)
export function applyHorizontalDifferencing8Bit(data, width, components) {
    let i = 0;
    while (i < data.length) {
        for (let j = components; j < width * components; j += components) {
            for (let k = 0; k < components; k++) {
                data[i + j + k] =
                    (data[i + j + k] + data[i + j - (components - k)]) & 255;
            }
        }
        i += width * components;
    }
}
export function applyHorizontalDifferencing16Bit(data, width, components) {
    let i = 0;
    while (i < data.length) {
        for (let j = components; j < width * components; j += components) {
            for (let k = 0; k < components; k++) {
                data[i + j + k] =
                    (data[i + j + k] + data[i + j - (components - k)]) & 65535;
            }
        }
        i += width * components;
    }
}
//# sourceMappingURL=horizontalDifferencing.js.map