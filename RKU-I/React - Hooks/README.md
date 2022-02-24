### Anotações | React Hooks

<!-- ----------------------------------------------------------------------------------- -->
<hr/>

#### Vídeo 1

> Título: Don't use Hooks in REACT without knowing this.. </br>
> Link: [Ver vídeo (Ctrl + Click)](https://www.youtube.com/watch?v=NZEUDJvpQMM)

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
<hr/>

#### Vídeo 2

> Título: React Hooks Course - All React Hooks Explained </br>
> Link: [Ver vídeo (Ctrl + Click)](https://www.youtube.com/watch?v=LlvBzyy-558&t)

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
<hr/>

#### Vídeo 3

> Título: React Hooks - Aprenda do Zero - 9 vídeos  </br>
> Link: [Ver playlist (Ctrl + Click)](https://www.youtube.com/watch?v=iO60sUu7KIA&list=PL-wbozzhFnqrJPUFxUlp5gpLfjxWvtNvu)

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

<!-- ----------------------------------------------------------------------------------- -->
<hr/>

#### Vídeo 4

> Título: Como usar React Context (com Hooks) | Guilherme Rodz </br>
> Link: [Ver vídeo (Ctrl + Click)](https://www.youtube.com/watch?v=FsCBw9X9U84)

<!-- ----------------------------------------------------------------------------------- -->
<hr/>

#### Vídeo 5

> Título: Gerenciando estados globais com React Context </br>
> Link: [Ver vídeo (Ctrl + Click)](https://www.youtube.com/watch?v=D_yxtCD_Vi0)

<!-- ----------------------------------------------------------------------------------- -->
<hr/>

#### Vídeo 6

> Título: Você sabe MESMO como usar o hook useEffect? </br>
> Link: [Ver vídeo (Ctrl + Click)](https://www.youtube.com/watch?v=ndwM9djDRLg)

##### Onde é utilizado o useEffect?

- Componentes funcionais, assim como todos os outros Hooks

##### Sobre o useEffect

- O useEffect é executado toda vez em que o **componente** é renderizado, sendo assim, **toda chamada para o componente**, idependente do reload da página, **o hook é executado**

- O array de dependências do useEffect serve para: Toda vez que a variável que o hook está 'escutando' for modificada/alterada, ele será executado novamente

##### Exemplos:

<img src='./Images/Print_01.png' width='300px'><br/>
Toda vez que a variável **posts** for alterada, o useEffect será executado, gerando a ação do *console.log('renderizou')*

<hr/>

<img src='./Images/Print_02.png' width='400px'><br/>
<img src='./Images/Print_03.png' width='300px'><br/>

Exemplo da utilização de **services**. Neste caso, a chamada da API é formalizada dentro do arquivo *Posts.service.ts*, com o método **getPosts()**. Posteriormente ela é chamada na função **fetchPosts()** e executada pelo useEffect toda vez que o componente é renderizado.

<!-- ----------------------------------------------------------------------------------- -->
<hr/>

#### Vídeo 7

> Título: Explicando o hook useCallback ! Dicas avançadas de performance para React JS </br>
> Link: [Ver vídeo (Ctrl + Click)](https://www.youtube.com/watch?v=MPoVCO5na3Q)

##### Quando usar o useCallback?

- Recomenda-se utilizar esse hook apenas para códigos compostos de muita complexidade

##### Transcrição do vídeo

<img src='./Images/Video_7_01.png' width='500px'><br/>
Toda vez em que o botão for clicado, o React fará uma **nova renderização** no componente, renderizando novamente tudo aquilo que há dentro do mesmo

<img src='./Images/Video_7_02.png' width='500px'><br/>
Utilizando o useCallback, quando o componente for montado no primeiro render, o **React irá atribuir a função na memória**. 
Passando o **array de dependências vazio**, o React entende que ao fazer uma nova renderização, **não se deve fazer uma nova atribuição de memória**. Ao passar um **valor nas dependências do hook**, o React entende que a **função deve ser executada novamente** de acordo com a alteração do parâmetro passado.