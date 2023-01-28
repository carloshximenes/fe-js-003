## Simulador Pokemon GO

Para nosso 2º exercício vamos tentar desenvolver um simulador de Pokemon GO aplicando todos os conceitos que aprendemos até agora durante as aulas.
A ideia aqui é cadastrar diferentes tipo de pokemon e seus respectivos leveis.
Também é necessário cadastrar um treinador. Nele devemos exibir quantos pokemon ele capturou até o momento.

Toda a tabalha deve ser automática.
O que precisamos é criar uma função que faça o encontro entre o treinador e o pokemon selvagem.
Ao encontrar o pokemon, esse treinador jogará uma pokebola para tentar capturá-lo.
A chance do pokemon ser captura é gerada de forma aleatória considerando o level do pokemon e a quantidade de pokemons que o treinador tem.
Quanto maior o level do pokemon, mais dificil será de capturá-lo.
Quanto maior for a quantidade de pokemon do treinador, mais fácil será capturar um pokemon.
Sinta-se a vontade para gerar a lógica que achar mais interessante. Só precisamos que siga essa regra.

Toda vez que uma pokebola é usada, dando certo ou errado, será preciso reduzir essa quantidade do treinador. 
Um treinador não pode ter menos de 0 pokebolas.
Um treinador é capaz de levar até 10 pokebolas. Ele pode comprar a qualquer momento a qualquer momento essas pokebolas enquanto estiver fora de uma batalha.

Após 3 tentativas de captura, se não der certo, o pokemon selvagem automaticamente fugiu.
Caso seja realizada a captura com sucesso, devemos incrementar a quantidade de pokemons que o treinador possui.