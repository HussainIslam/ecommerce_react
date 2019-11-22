# Notes on Using Redux in Application

## What is Redux?
As per the Redux [website](https://redux.js.org/), it is 'A Predicatable State Container for Javascript Apps'. In layman words, Redux is a Javascript library that helps the application/developers to store the states of the applications in one place rather than splitting those states in different components. This means that Redux is an alternative to the `this.state` that we have been using in our React application. Redux makes handling the state easier as all the components will have direct access to the state and it will NOT have flow through parent components before reaching a child component. Redux uses the Flux pattern, which means: <br>
    Action -> Dispatcher -> Store -> View
We will see this in Redux Flow.

## Why Redux?
1. Good at managing large states
2. Useful for sharing data between components
3. Predictable state management with three principles

## Principles of Redux
1. **Single source of truth**: This just means one large object that holds all states of the application
2. **State is read-only**: This encourages immutability, that is not modifying the object. This prevents unexpected errors. So, rather than changing the object, we create a new object with updated states.
3. **Changes using pure functions**: A ['pure function'](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976) is a function that receives input and always returns a value. The output from a pure function is always predictable, that is if we give the same input a hundred times, it should return the same value everytime.

## Redux Flow
1. **Action**: This is the user performs something, like click/select
2. **Root Reducer**: This is a pure function, which takes in the Action and returns the State
3. **Store**: It contains all the States of the application.
4. **DOM Changes**: As the Store changes, DOM is updated.

## Setting up Redux
1. Install Redux, redux-logger, and react-redux in our application
    `yarn add redux redux-logger react-redux`
2. Import `Provider` from `react-redux` in our `index.js` file
    `import { Provider } from 'react-redux'`
3. In `index.js`, we need to wrap our `BrowserRouter` and `App` element with `<Provider>` element.
    ```html
    <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ```
4. Create a new folder inside `src` called `redux`
5. Create a new file inside the `redux` folder called `root-reducer.js`. This will be our main reducer, which will combine all the different states from other reducers.