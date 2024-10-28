function modificaFrase(frase) {
    return frase
        .split(" ")
        .map(palavra => palavra.length < 5 ? palavra.toUpperCase() : palavra.toLowerCase())
        .join(" ");
}

let frase = "Guilherme foi até a praia";
let newFrase = modificaFrase(frase);
console.log(newFrase);
