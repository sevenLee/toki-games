import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../redux/reducers/index'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [ sagaMiddleware ]

/*eslint-disable no-underscore-dangle*/
export const store =  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware( ...middlewares )
)

sagaMiddleware.run(rootSaga)
