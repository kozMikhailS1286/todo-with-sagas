import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {rootReducer} from "./reducers";

// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;

// if (process.env.NODE_ENV !== 'development' && module.hot) {
//     module.hot.accept('./reducers', () => {
//         store.replaceReducer(rootReducer)
//     })
// }

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
}