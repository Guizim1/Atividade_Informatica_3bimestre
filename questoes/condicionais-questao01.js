function compara_num(num01, num02) {
    if (num01 > num02) {
        console.log(`${num01} é maior que ${num02}.`);
    } else if (num01 < num02) {
        console.log(`${num02} é maior que ${num01}.`);
    } else {
        console.log(`Os números ${num01} e ${num02} são iguais.`);
    }
}

const numero1 = 14;
const numero2 = 70;
compara_num(numero1, numero2);
