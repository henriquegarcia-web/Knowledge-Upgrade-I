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

#### Vídeo 2

> Título: React Hooks Course - All React Hooks Explained </br>
> Link: [Ver vídeo](https://www.youtube.com/watch?v=LlvBzyy-558&t)

</br>

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