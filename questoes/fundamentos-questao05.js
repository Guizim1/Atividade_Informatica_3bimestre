function checarIntervalo(num01, num02, num03) {
    if (num01 >= 50 && num01 <= 99 && num02 >= 50 && num02 <= 99 && num03 >= 50 && num03 <= 99) {
        console.log("Sucesso! Todos os números estão dentro do intervalo de 50 a 99.");
    } else {
        console.log("Erro! Um ou mais dos números estão fora do intervalo de 50 a 99.");
    }
}

let numero01 = 63;
let numero02 = 40;
let numero03 = 125;

checarIntervalo(numero01, numero02, numero03);