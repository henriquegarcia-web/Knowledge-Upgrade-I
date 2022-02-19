<<<<<<< HEAD
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
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> master
