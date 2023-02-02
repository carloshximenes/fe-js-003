(1) ToDo List

- Listar atividades
- Adicionar atividades
- Deletar atividades
- Editar atividades
- Marcar atividades (concluida/nao-concluida)
- Plus: tag prioridade
    (baixa, normal, alta, altissima)

- Equipes:
    Solo
    Dupla
    Trio
    Grupo
    All-in

item1 = new Item('Fazer atividade', '2023-02-06', 'alta');
item2 = new Item('Ler um livro', '2023-02-06', 'normal');
item3 = new Item('Jogar Pokemon', '2023-02-06', 'altissima');
item4 = new Item('Assistir Pokemon', '2023-02-06', 'baixa');

lista = [item1, item2, item3, item4];

item1.editar('Fazer nova atividade', '2023-02-25', 'baixa');
item2.deletar();
item3.marcar();
item5 = new Item('Assistir Pokemon', '2023-02-06', 'baixa');
lista.adicionar(item5);