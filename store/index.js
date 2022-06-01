import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import CategoryReducer from './reducers/category.reducer';
import BreadsReducer from './reducers/breads.reducer';
import ProductReducer from './reducers/product.reducer';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadsReducer,
    product: ProductReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));