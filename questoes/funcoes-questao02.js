function conta(frase) {
    let vogais = 'aeiouAEIOU';
    let quantvog = 0;
    let quantconso = 0;

    for (let char of frase) {
        if (char.match(/[a-zA-Z]/)) {
            if (vogais.includes(char)) {
                quantvog++;
            } else {
                quantconso++;
            }
        }
    }
    return {
        vogais: quantvog,
        consoantes: quantconso
    };
}

let frase = "Guilherme foi até a praia.";
let resultado = conta(frase);
console.log(`Vogais: ${resultado.vogais}, Consoantes: ${resultado.consoantes}`);
