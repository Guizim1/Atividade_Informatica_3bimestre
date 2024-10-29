function maiorpalavra(frase) {
    const palavras = frase.split(' ');
    let maior = '';

    for (let palavra of palavras) {
        if (palavra.length > maior.length) {
            maior = palavra;
        }
    }

    return maior;
}
const frase2 = "Guilherme foi até a praia.";
const resultado = maiorpalavra(frase2);
console.log(`A maior palavra é: "${resultado}"`);
