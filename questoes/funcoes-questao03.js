function maiorEMenor(lista) {
    let maior = Math.max(...lista)
    let menor = Math.min(...lista)
    return { maior, menor }
}

let numeros = [1, 48, 12, 75, 2, 9]
let resultado = maiorEMenor(numeros)
console.log(`O Maior: ${resultado.maior}, o menor: ${resultado.menor}`)