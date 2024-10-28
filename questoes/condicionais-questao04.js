function calcular(alunos) {
    alunos.forEach(aluno => {
        const nome = aluno[0];
        const notas = aluno[1];
        
        const media = notas.reduce((total, nota) => total + nota, 0) / notas.length;

        const status = media < 70 ? "Reprovado" : "Aprovado";

        console.log(`${nome}, média: ${media.toFixed(2)}, ${status}`);
    });
}

const alunos = [
    ["joao", [10, 50, 100]],
    ["tiago", [55, 78, 90]],
    ["davi", [70, 80, 90]],
    ["manuel", [30, 40, 50]],
    ["bernardo", [80, 85, 90]]
];

calcular(alunos);
