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
1. Install Redux, redux-logger, and react-redux in our application. Redux-logger is a middleware that helps us logging actions of our applications.
    `yarn add redux redux-logger react-redux`
2. Import `Provider` from `react-redux` in our `index.js` file
    `import { Provider } from 'react-redux'`
3. In `index.js`, we need to wrap our `BrowserRouter` and `App` component with `<Provider>` component. This gives access to our application
    ```html
    <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ```
4. Create a new folder inside `src` called `redux`, which will contain all the codes related to redux.
5. Create a new file inside the `redux` folder called `root-reducer.js`. This will be our main reducer, which will combine all the different states from other reducers.
6. Then we can create a new folder for user-related codes. We can name this folder `user`
7. Within the `user` folder, we can create a specific reducer for the user, like: `user.reducer.js`. A reducer is actually a function that gets a state object and an action object. The state object is an object that has the previous/current state of some item, for example: user. The action object is also an object, especially containing a string value, that dictates what action is to be performed on the state object. The action object usually has two properties: type and payload. The type is the string property and the payload can be that we would need to perform the action on the state object.  
8. Write the specific reducer. 
```js
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action)=> {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;
```
9. We need to import `combineReducers` from the `redux` library to combine all the specific reducers that we might have.
    `import { combineReducers } from 'redux'`
10. Import specific reducers to the root-reducer
    `import userReducer from './user.reducer'`
11. Write the reducer function
```js
export default combineReducers({
    user: userReducer
});
```
12. Create a new file for our `redux store` called `store.js`
13. Import `createStore` and `applyMiddleware`  into our store `store.js`
    `import { createStore, applyMiddleware } from 'redux'`
14. Import the redux-logger into our store `store.js`
    `import logger from 'redux-logger'`
15. Import our root-reducer into our store `store.js`
    `import rootReducer from './root-reducer'`
16. The middlewares that the store is expecting from redux is an array. So, we can create a new variable that can hold all the middlewares:
    `const middlewares = [ logger ]`
17. Now, we can create the store using the `createStore` function with `rootReducer` and `applyMiddleware`
    `const store = createStore(rootReducer, applyMiddleware(...middlewares))`
18. Now that we have created our `store`, we need to import the store in `index.js`
    `import store from './redux/store'`
19. Add `store` attribute in `Provider` component
    `<Provider store={ store }>`
20. Now, we need to create a new file for the action creators. For example, for our users actions: `users.actions.js`
21. Write function for a particular action. The action may return an object with two properties: 'type' and 'payload'. The 'type' should be a string and should match with the strings in the switch...case written in respective reducer. 
```js
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})

```
## Using state from Redux Store in components 
Using the following technique a state will be made available to a particular component through the `props`.

1. Import `connect`, which is a higher-order component from 'react-redux' library. This will let us use things from redux. `connect` is actually a [curried function](https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339).
    `import { connect } from 'react-redux'`
2. Now, we need to write a function that gives a particular component access to the application state or root-reducer. For example, in our applicaton, we need to extract the `currentUser` state from the `user` reducer from the the `root` reducer and we assign that to the `currentUser` 
```js
const mapStateToProps = state => ({
    currentUser: state.user.currentUser 
})
```
3. Now, we need to wrap our component `export` (export of the particular component that is using state from store) with `connect`.
    `export default connect(mapStateToProps)(Header)`

## Modify the state in Redux Store from Components
1. Import `connect` from the `react-redux` library
    `import { connect } from 'react-redux'`
2. Import the specific `action` from the actions file, in our case `user.actions.js`, that will be used to modify the redux store.
    `import { setCurrentUser } from './redux/user/user.actions'`
3. We need to write `mapDispatchToState` function that modifies/updates a state that is in the redux Store.
```js
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});
```
4. We need to wrap our component `export` with `connect`. However, in this case, for the first function of `connect` the first argument will be `null` and the second argument will have the `mapDispatchToProps`.
    `export default connect(null, mapDispatchToProps)(App)`
5. Now the action function will be available to the component through the `props` and we will be able to call it like:
```js
this.props.setCurrentUser();
```
