
const data = new Date();
const semana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
const data_atual = semana[data.getDay()];
const hora_atual = data.toLocaleTimeString();

console.log(`Hoje é: ${data_atual}`);
console.log(`A hora atual é: ${hora_atual}`);
