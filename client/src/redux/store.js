import {createStore,combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools} from '@redux-devtools/extension';
import {thunk} from 'redux-thunk'
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer

})

const middelware = [thunk];

const store = createStore(           //store containe two argument.
    reducer,
    composeWithDevTools(applyMiddleware(...middelware))

);

export default store;
