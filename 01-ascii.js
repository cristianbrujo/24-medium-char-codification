function randInt(max) {
    return Math.floor(Math.random() * (max + 1))
}

let numero = randInt(255);
let caracter = String.fromCharCode(numero);
console.log(caracter);  // Output: A
