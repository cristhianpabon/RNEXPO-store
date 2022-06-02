import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import CategoryReducer from './reducers/category.reducer';
import CartReducer from './reducers/cart.reducer';
import BreadsReducer from './reducers/breads.reducer';
import OrderReducer from './reducers/order.reducer';
import ProfileReducer from './reducers/profile.reducer';
import ProductReducer from './reducers/product.reducer';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    cart: CartReducer,
    breads: BreadsReducer,
    order: OrderReducer,
    profile: ProfileReducer,
    product: ProductReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));