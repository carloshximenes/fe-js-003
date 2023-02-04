// const Opcao = require('./Opcao');
import { Opcao } from "./Opcao.js";

let listaAtividades = baixarLista();
console.log(listaAtividades);

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
    // optionTagPropriedade.value = opcao;
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
inputAtividade.classList.add('input-atividade');

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
    if (formularioEhValido) {
        const novaOpcao = new Opcao(valorInputAtividade, valorInputDataAtividade, valorSelectTagsPrioridade);
        listaAtividades.push(novaOpcao);
        salvarLista();
        renderizarItem(novaOpcao);
        limparValorInput();
    } else {
        alert('Preencher todos os campos');
    }
    console.log(listaAtividades);
});

botao.textContent = 'Adicionar';
botao.type = 'submit';

formulario.appendChild(inputAtividade);
formulario.appendChild(inputDataAtividade);
formulario.appendChild(selectTagsPrioridade);
formulario.appendChild(botao);

const divNovaAtividade = document.querySelector('.nova-atividade');
divNovaAtividade.appendChild(formulario);

////// LISTA ATIVIDADES
const divListaAtividades = document.querySelector('.lista-atividades');

const ulAtividades = document.createElement('ul');
divListaAtividades.appendChild(ulAtividades);

listaAtividades.map(atividade => renderizarItem(atividade));

function limparValorInput() {
    inputAtividade.value = '';
    inputDataAtividade.value = '';
    selectTagsPrioridade.value = '';
}

function renderizarItem(item) {
    const liAtividade = document.createElement('li');
    liAtividade.id = `item-${item.id}`;

    //CRIAR CHECKBOX
    const inputCheckbox = document.createElement('input');
    inputCheckbox.id = item.id;
    inputCheckbox.type = 'checkbox';
    const labelCheckbox = document.createElement('label');
    labelCheckbox.setAttribute('for', item.id);
    labelCheckbox.innerText = item.atividade;
    const divCheckbox = document.createElement('div');
    divCheckbox.appendChild(inputCheckbox);
    divCheckbox.appendChild(labelCheckbox);
    liAtividade.appendChild(divCheckbox);

    //CRIAR PARAGRAFO TAG
    const paragrafoTag = document.createElement('p');
    const textoTag = arrayOpcoes[item.tagPrioridade];
    paragrafoTag.innerText = textoTag;
    // paragrafoTag.innerText = item.tagPrioridade;

    liAtividade.appendChild(paragrafoTag);

    //CRIAR PARAGRAFO DATA
    const paragrafoData = document.createElement('p');
    paragrafoData.innerText = item.dataAtividade;
    liAtividade.appendChild(paragrafoData);

    //CRIAR PARAGRAFO BOTAO EDITAR
    const botaoEditar = document.createElement('button');
    botaoEditar.innerText = 'Editar';
    liAtividade.appendChild(botaoEditar);

    //CRIAR PARAGRAFO BOTAO EXCLUIR
    const botaoExcluir = document.createElement('button');
    botaoExcluir.innerText = 'Excluir';
    botaoExcluir.addEventListener('click', function (e) {
        excluirItemLista(item.id);
    });

    liAtividade.appendChild(botaoExcluir);

    ulAtividades.appendChild(liAtividade);
}

function salvarLista() {
    let listaString = JSON.stringify(listaAtividades);
    localStorage.setItem('lista', listaString);
}

function baixarLista() {
    let listaString = localStorage.getItem('lista');
    return JSON.parse(listaString) || [];
}

// function atualizarNome(nomeAntigo, nomeNovo) {
//     listaAtividades = listaAtividades.map(lista => {
//         if (lista.tagPrioridade === nomeAntigo) {
//             lista.tagPrioridade = nomeNovo
//         }
//         return lista;
//     })
// }

function excluirItemLista(id) {
    listaAtividades = listaAtividades.filter(atividade => atividade.id !== id);
    salvarLista();
    const itemRemovido = document.querySelector(`#item-${id}`);
    itemRemovido.remove();
}

function editarItemLista(id) {
    // Enviar os dados do item para o formulário
    // Dar a opção para o usuário ATUALIZAR ou CANCELAR a ação
    // Independente da escolha, o sistema deve voltar ao estado natural.
}

// Fazer com que o status do checkbox (marcado ou desmarcado) seja mantido após F5 na página

// Aplicar estilo para grifar o texto da atividade caso ela seja marcada como concluida.
// text-decoration: line-through;
// UTILIZAR CLASSES!
// CRIAR ARQUIVO CSS.
// ADICIONAR O ARQUIVO CSS AO HTML.
// ESTILIZAR O HTML COMO UM TODO.
// SUBIR NO VERCEL OU SIMILAR!