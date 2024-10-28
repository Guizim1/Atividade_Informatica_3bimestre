function ultimosnum(numeros, n) {
    if (n > numeros.length) {
        return "O valor de num é maior que o tamanho da lista.";
    }
    return numeros.slice(-n);
}

const numeros = [10, 58, 68, 88, 25, 45];
const num = 3;
const resultado = ultimosnum(numeros, num);
console.log(`O resultado é: [${resultado.join(', ')}]`);
