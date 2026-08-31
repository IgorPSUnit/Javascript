import entradaDados from 'readline-sync';

console.log("Área do Quadrado!");

let base = entradaDados.question("Digite o valor do lado do quadrado: ");

let area = base * base;

console.log("A área do quadrado é igual a "+ area);