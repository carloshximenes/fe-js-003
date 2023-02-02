class Opcao {
    atividade;
    dataAtividade;
    tagPrioridade;
    constructor(atividade, dataAtividade, tagPrioridade) {
        this.atividade = atividade;
        this.dataAtividade = dataAtividade;
        this.tagPrioridade = tagPrioridade;
    }
}

const listaAtividades = [];

// Criar novos elementos
const formulario = document.createElement('form');
const inputAtividade = document.createElement('input');
const inputDataAtividade = document.createElement('input');
const selectTagsPrioridade = document.createElement('select');
// const optionTagsPrioridade1 = document.createElement('option');
// const optionTagsPrioridade2 = document.createElement('option');
// const optionTagsPrioridade3 = document.createElement('option');
// const optionTagsPrioridade4 = document.createElement('option');
const botao = document.createElement('button');

// Atribuir Option ao Select
const arrayOpcoes = ['Altíssima', 'Alta', 'Normal', 'Baixa'];
arrayOpcoes.map((opcao, index) => {
    const optionTagPropriedade = document.createElement('option');
    optionTagPropriedade.value = index;
    optionTagPropriedade.textContent = opcao;
    selectTagsPrioridade.appendChild(optionTagPropriedade);
});
selectTagsPrioridade.required = true;

// optionTagsPrioridade1.textContent = 'Altissima';
// selectTagsPrioridade.appendChild(optionTagsPrioridade1);
// optionTagsPrioridade2.textContent = 'Alta';
// selectTagsPrioridade.appendChild(optionTagsPrioridade2);
// optionTagsPrioridade3.textContent = 'Normal';
// selectTagsPrioridade.appendChild(optionTagsPrioridade3);
// optionTagsPrioridade4.textContent = 'Baixa';
// selectTagsPrioridade.appendChild(optionTagsPrioridade4);

inputAtividade.id = 'input-atividade';
inputAtividade.type = 'text';
inputAtividade.placeholder = 'Informe a Atividade';
inputAtividade.required = true;

inputDataAtividade.id = 'input-data-atividade';
inputDataAtividade.type = 'date';
inputDataAtividade.required = true;

botao.addEventListener('click', function (e) {
    e.preventDefault();
    const valorInputAtividade = inputAtividade.value;
    const valorInputDataAtividade = inputDataAtividade.value;
    const valorSelectTagsPrioridade = selectTagsPrioridade.value;
    // const valorInputAtividade = document.querySelector('#input-atividade').value;
    // const valorInputDataAtividade = document.querySelector('#input-data-atividade').value;

    const formularioEhValido = valorInputAtividade != '' && valorInputDataAtividade != '' && valorSelectTagsPrioridade != '';
    if(formularioEhValido) {
        const novaOpcao = new Opcao(valorInputAtividade, valorInputDataAtividade, valorSelectTagsPrioridade);
        listaAtividades.push(novaOpcao);
    } else {
        alert('Preencher todos os campos');
    }
});

botao.textContent = 'Adicionar';
botao.type = 'submit';

formulario.appendChild(inputAtividade);
formulario.appendChild(inputDataAtividade);
formulario.appendChild(selectTagsPrioridade);
formulario.appendChild(botao);

const divNovaAtividade = document.querySelector('.nova-atividade');
divNovaAtividade.appendChild(formulario);

