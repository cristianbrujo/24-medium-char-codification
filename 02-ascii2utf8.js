function asciiAUtf8(caracter) {
    let codigoAscii = caracter.charCodeAt(0);
    let utf8Hex = codigoAscii.toString(16);
    return utf8Hex;
}

console.log(asciiAUtf8("A")); // 41
console.log(asciiAUtf8("B")); // 42
console.log(asciiAUtf8("C")); // 43
console.log(asciiAUtf8("D")); // 44