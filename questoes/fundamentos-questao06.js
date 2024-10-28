function aparece_mais(array) {
    let conta = {};
    let maxnum = array[0];
    let maxConta = 0;

    for (let num of array) {
        conta[num] = (conta[num] || 0) + 1;
        
        if (conta[num] > maxConta) {
            maxConta = conta[num];
            maxnum = num;
        }
    }
    return maxnum;
}

let numeros = [1, 3, 7, 1, 3, 3, 5, 3, 7];
console.log("O número mais frequente é o:", aparece_mais(numeros));
