function soma(list) {
    const soma = list.reduce((total, numero) => total + Math.pow(numero, 3), 0);
    return soma;
}
const list = [2, 3, 4];
const resultado = soma(list);
console.log(`A soma dos cubos é: ${resultado}`);
