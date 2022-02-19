### Anotações | React Hooks

<!-- ----------------------------------------------------------------------------------- -->

#### Vídeo 1

> Título: Don't use Hooks in REACT without knowing this.. </br>
> Link: [Ver vídeo](https://www.youtube.com/watch?v=NZEUDJvpQMM)

</br>

##### Regras dos Hooks

Apenas chame Hooks (useState & useEffect) no nível superior

- Isso significa não chamar Hooks dentro de loops, condições ou funções aninhadas
- Sempre use Hooks no nível superior de sua função
- Ao seguir esta regra, você garante que os Hooks sejam chamados na mesma ordem toda vez que um componente for renderizado
- Isso permite o React preservar corretamente o estado dos Hooks entre as chamadas useState / useEffect

##### Referências:

[Regras dos Hooks - Documentação React](https://reactjs.org/docs/hooks-rules.html)

> yarn add eslint-plugin-react-hooks

<!-- ----------------------------------------------------------------------------------- -->
</br>

#### Vídeo 2

> Título: React Hooks Course - All React Hooks Explained </br>
> Link: [Ver vídeo](https://www.youtube.com/watch?v=LlvBzyy-558&t)

##### useState

- Usado para controlar estados de uma aplicação, estados nos quais devem ser mudados dinâmicamente

##### useReducer

- Utilizado quando se quer realizar mais de uma manipulação de estados ao mesmo tempo (useState)

##### useEffect

- O useEffect é uma função que será executada toda vez que a página for renderizada
- O [] utilizado no final do useEffect, serve como um 'listener'
- Ao passar um parâmetro dentro do [], como por exemplo uma função de click, o useEffect será ativado toda vez que houver o click

##### useRef

- O useRef pode ser comparado com as funcionalidades de seleção do JS, como: 'getElement...'
- Esse hook cria uma referência para um elemento e disponibiliza a possibilidade de manipulá-lo

##### useLayoutEffect

- O useLayoutEffect tem um funcionamento semelhante ao useEffect
- O diferencial desse hook: **ele é executado primeiramente ao useEffect**, de forma prioritária, idependentemente de sua posição

##### useImperativeHandle

- O useImperativeHandle cria uma referência entre um componente pai e filho, e permite que o pai acesse e execute funções do filho

##### useContext

- O useContext é utilizado para **gerenciar estados**
- Esse hook facilita o compartilhamento de dados entre componentes, sem que precise ser passado diretamente por 'props'

##### useMemo

- O useMeme memoriza dados gerados por uma função 
- O uso do useMemo tem por objetivo melhorar o desempenho e diminuir a execução de grandes cálculos
- Esse hook serve para salvar resultados de funções, de forma a evitar que sejam executadas novamente, caso não seja necessário

##### useCallback

- O problema no qual o useCallback resolve, é o mesmo que o useMemo
- Com o useCallback, ao contrário do useMemo, é possível armazenar a função em si, não somente o resultado
- Como descrito acima, ao armazenar uma função, é possível executá-la, de forma mais performática

<!-- ----------------------------------------------------------------------------------- -->
</br>

#### Vídeo 3

> Título: React Hooks - Aprenda do Zero - 9 vídeos  </br>
> Link: [Ver playlist](https://www.youtube.com/watch?v=iO60sUu7KIA&list=PL-wbozzhFnqrJPUFxUlp5gpLfjxWvtNvu)

Os hooks evitam que ocorra o **Wrapper Hell**: componentes que precisam estar dentro de outros componentes que por sua vez dentro de outros componentes (...)

O uso dos hooks constitui **componentes menores** e **facilidade de manutenção**

Os hooks permitem centralizar e compartilhar a lógica de estados

##### useEffect

- O useEffect permite executar uma ação/um comportamente no código, decorrente de um efeito colateral de outra ação
- O array de parâmetros serve para identificar QUANDO o useEffect deve ser executado
- Com o useEffect é possível executar atualizações em toda renderização ou de forma condicional (por meio de parâmetros)
- Ao usar o array de parâmtros vazio, o React entende que o useEffect deve ser executado apenas uma vez

##### useEffect (Clean Up)

- Ao utilzar o useEffect, deve-se ter a preucupação com o uso de memoria e processamento de informações nas quais não são mais necessárias
- Como por exemplo, o componente já foi renderizado e não é mais preciso que sejam feitos processamentos posteriores
- O return utilizado dentro do useEffect tem o papel de ser ativado quando o componente for desmontado e não estiver mais em operação/ativo

##### useCallback

- O useCallback retorna uma função memorizada e ajuda drasticamente na performance
- De extrema utilidade quando se é preciso passar funções como parâmtro de componentes grandes para os filhos
- O useCallback memoriza uma função, e com o parâmetro de dependências, faz com que a função seja executada somente se algum valor das dependências for alterado/atualizado

##### useMemo

- Retorna valores memorizados de uma função, evitando a mesma de ser executada mais de uma vez, caso não seja necessário (não haja alterações do resultado)
- Com o useMemo é possível isolar uma função, e de acordo com seu parâmetro, ser chamada novamente somente quando ele mudar/ser alterado