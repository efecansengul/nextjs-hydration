import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user-store/index';
import productReducer from './products-store/index';
import basketReducer from './basket-store/index';

export function createStore(preloadedState={}) {
    const store = configureStore({
        reducer: {
            user: userReducer,
            products: productReducer,
            basket: basketReducer,
        },
        preloadedState
    });
    return store;
}

export const store = createStore();