function somatamanho(frase) {
    const palavras = frase.split(' ');
    const soma = palavras.reduce((total, palavra) => total + palavra.length, 0);

    return soma;
}
const frase = "Guilherme foi a praia";
const resultado = somatamanho(frase);
console.log(`A soma de todos os tamanhos das palavras na frase citada é: ${resultado}`);
