
var nome; 
var nota1;
var nota2;
var nota3;

nome = prompt("Qual é o seu nome?");

alert("Nome: " + nome);

nota1 = prompt("Digite a 1ª Nota: ");
nota2 = prompt("Digite a 2ª Nota: ");
nota3 = prompt("Digite a 3ª Nota: ");

var nota1 = parseFloat(nota1);
var nota2 = parseFloat(nota2);
var nota3 = parseFloat(nota3);

var media = (nota1 + nota2 + nota3) / 3;

alert("Sua Média é: " + media.toFixed(2));
