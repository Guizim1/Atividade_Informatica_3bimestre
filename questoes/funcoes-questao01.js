function invertenum(numero) {
    return parseInt(numero.toString().split('').reverse().join(''), 10);
}
const numero = 987645;
const resultado = invertenum(numero);
console.log(`Número invertido: ${resultado}`);
