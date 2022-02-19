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