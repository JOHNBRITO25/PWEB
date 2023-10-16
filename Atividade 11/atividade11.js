document.write("Atividade 11 - Criar objetos de três formas diferentes.")
document.write("<br><br>======================================<br>");
document.write("Realizado com uma função construtora <br>");

var ra, nome;

function Aluno(ra, nome){
    this.ra = ra;
    this.nome = nome;
}

var objAluno1 = new Aluno("0030482211034", "John Wesley");

document.write("RA do Aluno: " + objAluno1.ra + "<br>" + "Nome do aluno: " + objAluno1.nome);

document.write("<br><br>======================================<br>");

document.write("Realizado com o método { } <br>");

var aluno2 = {};
       aluno2.ra = "0030482211003";
       aluno2["nome"] = "Esdras de Mello";
       document.write("RA do Aluno: " + aluno2.ra +  "<br>" + " Nome do aluno" + aluno2.nome);

document.write("<br><br>======================================<br>");


document.write("Realizado com o método Object.create() <br>");

const obAluno = {
    ra: '0030482211003',
    nome: 'Esdras de Mello',
    getNome(){
        return this.nome;
    },
    getRA() {
        return this.ra;
    }
}

const objectAluno = Object.create(obAluno);
document.write("RA do aluno: " + objectAluno.getRA() + "<br>" + "Nome do aluno: " + objectAluno.getNome());

document.write("<br><br>======================================<br>");



