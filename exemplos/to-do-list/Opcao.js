export class Opcao {
    id;
    atividade;
    dataAtividade;
    tagPrioridade;
    constructor(atividade, dataAtividade, tagPrioridade) {
        this.id = Date.now().toString();
        this.atividade = atividade;
        this.dataAtividade = dataAtividade;
        this.tagPrioridade = tagPrioridade;
    }
}

// module.exports = Opcao;