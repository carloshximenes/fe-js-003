## Vamos tentar utilizar o FETCH

Nessa atividade vamos fazer o projeto que 99,999% dos devs frontend tem em seu portifólio no git: **UMA POKEDEX!**
Para isso, vamos utilizar a seguinte API:
https://pokeapi.co/

Para imagem, vocês podem usar essa URL de exemplo aqui:
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png
O resultado dessa URL é a imagem abaixo:
![Pikachu](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png)

Vou deixar uma sugestão de visualização da tela:
![Layout](https://ifpb.github.io/javascript-exercises/challenges/w3c/pokedex/assets/layout.png)

Aqui vocês vão informar o numero (ID) daquele Pokemon, o nome dele, e quais os tipos dele (atente-se para a estilização de cada tipo). A lista de todos os tipos disponíveis vocês conseguem encontrar fácil na internet :)

![Layout 2](https://ifpb.github.io/javascript-exercises/challenges/w3c/pokedex/assets/component-1.png)

Quando o usuário pesquisar por um nome, o sistema deve trazer o que foi buscado:
![Layout 3](https://ifpb.github.io/javascript-exercises/challenges/w3c/pokedex/assets/component-2.png)

O mesmo vale se ele buscar pelo Type:
![Layout 4](https://ifpb.github.io/javascript-exercises/challenges/w3c/pokedex/assets/component-3.png)

Aplique tipo de ordenação para nome (asc, desc) e numero (asc, desc):
![Layout 5](https://ifpb.github.io/javascript-exercises/challenges/w3c/pokedex/assets/component-4.png)

Caso o usuário busque por parte do nome do pokemon, o sistema deve trazer todas as opções possíveis:
![Layout 6](https://ifpb.github.io/javascript-exercises/challenges/w3c/pokedex/assets/component-5.png)

## BONUS:
Tente criar um modal que será exibido quando o usuário clicar em algum dos cards. Esse modal deve exibir mais detalhes sobre o Pokemon selecionado.

Usem como base esse exemplo aqui:
https://www.pokemon.com/br/pokedex/pikachu