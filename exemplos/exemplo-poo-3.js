class Pessoa {
    //caracteristicas = atributos
    nome;
    sobrenome;
    idade;
    genero;
    endereco;

    //acao = metodos/funçoes
    correr() {
        return 'estou correndo';
    }
}

var pessoa1 = new Pessoa();
pessoa1.nome = 'Carlos';
pessoa1.sobrenome = 'Mota';
pessoa1.idade = 31;
pessoa1.genero = 'M';
pessoa1.endereco = 'R. bliblibli';

var pessoa2 = new Pessoa();
pessoa2.nome = 'Pedro';
pessoa2.sobrenome = 'Lacerda';
pessoa2.idade = 32;
pessoa2.genero = 'M';
pessoa2.endereco = 'R. blablabla';

console.log(pessoa1.correr());
console.log(pessoa2.correr());