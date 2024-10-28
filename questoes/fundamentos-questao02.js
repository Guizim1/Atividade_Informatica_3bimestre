
let todos_os_lados = [9, 12, 7];

let semiperimetros = (todos_os_lados[0] + todos_os_lados[1] + todos_os_lados[2]) / 2;

let area = Math.sqrt(
    semiperimetros * 
    (semiperimetros - todos_os_lados[0]) * 
    (semiperimetros - todos_os_lados[1]) * 
    (semiperimetros - todos_os_lados[2])
);

console.log("A área do triângulo é: " + area);