function palavrapresent(frase, palavra) {
    return frase.includes(palavra);
}

const frase = "Guilherme foi até a praia";
const palavra = "praia";
const resultado = palavrapresent(frase, palavra);

if (resultado) {
    console.log(`A palavra "${palavra}" está presente na frase citada.`);
} else {
    console.log(`A palavra "${palavra}" não está presente na frase citada.`);
}