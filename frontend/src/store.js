import {createStore , applyMiddleware} from 'redux' ;
import thunk from 'redux-thunk' ;
import { composeWithDevTools} from 'redux-devtools-extension'
import rootReducers from './reducers/rootReducer'

let initialState = {}

const middleware = [thunk] ;

export const store = createStore(rootReducers , initialState , composeWithDevTools(applyMiddleware(...middleware)))

export default store ;