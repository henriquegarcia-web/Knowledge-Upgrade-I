#### Vídeo 6

> Título: Você sabe MESMO como usar o hook useEffect? </br>
> Link: [Ver vídeo](https://www.youtube.com/watch?v=ndwM9djDRLg)

##### Onde é utilizado o useEffect?

- Componentes funcionais, assim como todos os outros Hooks

##### Sobre o useEffect

- O useEffect é executado toda vez em que o **componente** é renderizado, sendo assim, **toda chamada para o componente**, idependente do reload da página, **o hook é executado**

- O array de dependências do useEffect serve para: Toda vez que a variável que o hook está 'escutando' for modificada/alterada, ele será executado novamente

##### Exemplos:

<img src='./Print_01.png' width='300px'><br/>
Toda vez que a variável **posts** for alterada, o useEffect será executado, gerando a ação do *console.log('renderizou')*

<hr/>

<img src='./Print_02.png' width='400px'><br/>
<img src='./Print_03.png' width='300px'><br/>

Exemplo da utilização de **services**. Neste caso, a chamada da API é formalizada dentro do arquivo *Posts.service.ts*, com o método **getPosts()**. Posteriormente ela é chamada na função **fetchPosts()** e executada pelo useEffect toda vez que o componente é renderizado.