<hr>

<img src="./assets/logo-formacao-logica-programacao.png">

### FORMAÇÃO LÓGICA DE PROGRAMAÇÃO

Repositório para implementação e estudo dos códigos desenvolvidos durante o curso **Formação Lógica de Programação**, oferecido pela plataforma de ensino **Digital Innovation One - DIO**.
<hr>

### Links

- [Digital Innovation One (DIO)](https://www.dio.me)
- [Formação Lógica de Programação](https://www.dio.me/curso-logica-programacao)

### Conceitos Desenvolvidos

- **Introdução à Lógica de Programação**
    - Algoritmos
    - Fluxogramas
        - Estruturas de Início e Fim de Fluxo
        - Estruturas de Dados de Entrada
        - Estruturas de Decisão
        - Estruturas de Ação
        - Estruturas de Looping
        - Estruturas de Saída
    - Input, process e output
    - Features (funcionalidades)
    - IDE (Ambiente de Desenvolvimento Integrado)
    - Variáveis
        - string
        - number
        - boolean
    - Comentários
    - Constantes
    - Vetores e Matrizes

- **Operadores**
    - operadores aritméticos
        - soma (+)
        - subtração (-)
        - multiplicação (*)
        - divisão (/)
        - módulo (%) - resto da divisão
    - operadores de incremento e decremento
        - incremento (++)
        - decremento (--)
    - operadores de atribuição
        - atribuição (=)
        - adição e atribuição (+=)
        - subtração e atribuição (-=)
        - multiplicação e atribuição (*=)
        - divisão e atribuição (/=)
        - módulo e atribuição (%=)
    - operadores relacionais
        - igual (==) - compara valor
        - igual (===) - compara valor e formato
        - diferente (!=)
        - diferente (!==)
        - maior que (>)
        - menor que (<)
        - maior ou igual a (>=)
        - menor ou igual a (<=)
    - operadores lógicos
        - AND (&&)
        - OR (||)
        - NOT (!)
    - estruturas de controle
        - condicionais
        - switch case
        - estruturas de repetição
            - for
            - while
            - do-while
            
- **Funções**
    - Funções
    - Funções com parâmetros
    - Funções com retorno

- **Desafios de Códigos**
    - **Desafio 01: Jornada do Herói**
    Você é um jovem herói que embarca em uma jornada épica para derrotar o temido dragão que aterroriza o reino. No entanto, você precisa atravessar uma floresta perigosa para chegar à caverna do dragão. Cada passo é crucial, e sua jornada será determinada pela lógica afiada que você possuir. **Tarefa**: Escreva um algoritmo que simule a jornada do herói pela floresta. O herói começa em uma posição inicial e deve dar uma série de passos para atravessar a floresta até a caverna do dragão. **Entrada**: **1**:A posição inicial do herói na floresta (um número inteiro). **2**: O número total de passos que o herói deve dar (um número inteiro). **Saída**: Imprima a posição final do herói após dar a quantidade de passos especificada.

    - **Desafio 02: Pontos de Experiência**
    Você é um herói em um mundo mágico repleto de monstros e desafios. Sua missão agora é enfrentar inimigos e ganhar pontos de experiência (XP) para se tornar mais forte. A cada vitória, você ganha XP e se aproxima de se tornar um lendário campeão. **Tarefa**: Escreva um programa simples que simule o ganho de XP após derrotar um monstro. O programa deve calcular e exibir a quantidade de XP ganhos com base no nível do monstro e na dificuldade da batalha. **Calculo do XP**: Para calcular a quantidade de XP ganhos, o programa precisa considerar o nível do monstro e a dificuldade da batalha. A fórmula `num1 * num2 * 100` é usada para calcular essa quantidade com base nos valores fornecidos. **Explicação**: **num1**: Este é o nível do monstro. Quanto maior o nível do monstro, mais XP você ganhará ao derrotá-lo. Portanto, multiplicar o nível do monstro por um valor maior ajudará a refletir o aumento da recompensa de XP para monstros mais poderosos.**num2**: Este é o valor da dificuldade da batalha, variando de 1 a 100. Quanto maior a dificuldade da batalha, mais XP você deve ganhar para enfrentar um desafio maior. Multiplicar pela dificuldade ajuda a ajustar a recompensa de XP com base na intensidade da batalha. **100**: Este é o multiplicador constante que determina a escala geral de recompensa de XP. Multiplicar pelo nível do monstro e pela dificuldade aumenta a recompensa em 100 vezes o valor do nível e da dificuldade. **Entrada**: **1**: O nível do monstro (um número inteiro). **2**:A dificuldade da batalha, representada por um valor de 1 a 100 (um número inteiro). **Saída**: Imprima a quantidade de XP ganhos após a batalha.

    - **Desafio 03: Capturando Pokemons Inciais**
    No mundo dos jogos Pokémon, os treinadores começam sua jornada escolhendo um dos três Pokémons iniciais: Bulbasaur, Charmander e Mewtwo. Cada treinador escolhe um dos quatro pokemons. Seu desafio é criar uma solução que permita ao jogador escolher um dos Pokémons iniciais e exibir uma mensagem de boas-vindas e o Pokémon escolhido. **Entrada**: Você receberá um número inteiro que representa a escolha do treinador: 1 para Bulbasaur, 2 para Charmander, 4 Pikachu e 5 para Mewtwo. **Saída**: A saída deve ser uma mensagem de boas-vindas que inclua o nome do Pokémon escolhido.

    - **Desafio 04: Coleta de Tesouro no Dungeon**
    Sua missão é vasculhar as salas da masmorra em busca de recompensas lendárias e desafios perigosos. Cada sala pode conter monstros formidáveis, tesouros preciosos ou ambos. Use suas habilidades estratégicas para enfrentar as ameaças e coletar os tesouros! **Tarefa**: Escreva um programa que simule sua jornada heróica pela masmorra. O programa deve percorrer cada sala e verificar se há tesouros ou monstros. Se você encontrar um tesouro, colecionará a recompensa. Se encontrar um monstro, terá que derrotá-lo para continuar. **Atenção**: Em nossa resolução utilizamos a função.includes() do JavaScript para verificar se um número (representando a sala atual) está presente nos arrays salasComTesouro e salasComMonstro. **Entrada**: O número total de salas no dungeon (um número inteiro). **Saída**: Sempre que encontrar um tesouro, imprima `Tesouro na sala X!`. Sempre que encontrar um monstro, imprima `Monstro na sala X!`.

    - **Desafio 05: Geração de Biomas em um Mundo de Blocos**
    Você é um mestre construtor em um mundo de blocos e tem a tarefa de gerar biomas em diferentes regiões do mundo. Cada bioma tem características únicas, como tipos de solo, vegetação e clima.**Tarefa**: Sua tarefa é coletar minérios enquanto ataca uma rocha com sua picareta. Use loops e lógica de programação para representar cada golpe na rocha e determinar qual minério foi obtido.**Entrada**: O programa irá solicitar que você digite um número inteiro positivo representando a quantidade de golpes que você deseja dar com a picareta. **Saída**: Para cada golpe que você der, o programa exibirá uma mensagem indicando o resultado do golpe. Será mostrado o número do golpe e o minério obtido, que pode ser 1: Carvao, 2: Ferro, 3: Diamante e 4: Pedra.

    - **Desafio 06: Combinando Nomes de Pokémons**
    Imagine um universo onde você é um Mestre Pokémon com o poder de criar novas criaturas através da combinação de nomes. Seu algoritmo é a chave para dar vida a esses seres incríveis. Você receberá uma primeira parte do nome de um Pokémon e sua tarefa é completá-la com o sufixo mágico adequado, revelando o nome completo do Pokémon. **Tarefa**: Sua missão é criar uma função extraordinária chamada combinarNomePokemon. Essa função possui um toque mágico que transforma uma entrada simples em algo verdadeiramente especial. **Entrada**: A entrada consistirá em uma única string representando a primeira parte do nome de um Pokémon. **Saída**: A função deve retornar uma nova string que é a combinação da parte inicial(Préfixo) do nome do Pokémon com o sufixo final do nome, formando um nome de Pokémon completo.

    - **Desafio 07: Gerenciamento de Itens Mágicos**
    Você é um aventureiro em um mundo mágico cheio de perigos e monstros. Durante suas missões, você coleta diversos itens mágicos, cada um com seus próprios atributos e habilidades especiais. Agora, você está desenvolvendo um sistema aprimorado para gerenciar esses itens. Neste novo sistema, você pode criar diferentes tipos de itens mágicos, como armas, armaduras, poções, entre outros. Cada tipo de item terá atributos específicos e contribuirá de maneiras únicas para suas aventuras. **Tarefa**: Crie um objeto que represente um item mágico personalizado. O objeto deve ter atributos como tipo de item, dano e resistência, de acordo com o tipo escolhido. Além disso, crie uma função que calcule o dano causado por um item durante um combate, levando em consideração o tipo de item. **Entrada**: Peça ao usuário para digitar o tipo do item mágico que deseja criar, o dano e a resistência. **Saída**: Imprima o tipo do item, o dano, a resistência e o dano em combate. Use a função de cálculo de dano para imprimir o dano causado por esse item em um combate simulado. Quando o tipo do item for igual a 'arma' deve-se multiplicar o dano por dois `this.dano * 2` e quando não for arma, é retornado no dano `this.dano`.

- **Desafios de Projetos**
    - [Classificador de Nível de Herói](https://github.com/astorti/formacao-logica-programacao-DIO/tree/main/desafios/01-classificador-de-nivel-de-heroi)
    - [Calculadora de Partidas Rankeadas](https://github.com/astorti/formacao-logica-programacao-DIO/tree/main/desafios/02-calculadora-de-partidas-rankeadas)