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