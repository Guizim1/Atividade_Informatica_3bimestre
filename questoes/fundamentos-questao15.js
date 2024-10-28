function ordenarnum(lista) {
    return lista.sort((a, b) => a - b);
}

const numeros = [13, 79, 26, 54, 11];
const resultado = ordenarnum(numeros);
console.log(`Lista ordenada: [${resultado.join(', ')}]`);
