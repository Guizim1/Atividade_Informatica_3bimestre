function palavraPresente(frase, palavra) {
    return frase.includes(palavra)
}

const frase2 = "Guilherme foi até a praia."
const palavra = "praia"
const resultado = palavraPresente(frase2, palavra)
console.log(`A palavra "${palavra}" está presente na frase? ${resultado}`)
