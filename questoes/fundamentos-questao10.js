function convertenome(nomeCompleto) {
    const pedacos = nomeCompleto.split(' ');

    const primeiroNome = pedacos[0];

    const inici = pedacos.slice(1).map(parte => parte.charAt(0).toUpperCase() + '.');

    const resultado = [...inici, primeiroNome].join(' ');

    return resultado;
}

const nome = "Guilherme da Silva Mariano";
const resultado = convertenome(nome);
console.log(`Resultado: ${resultado}`);
