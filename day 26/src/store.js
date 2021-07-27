
import { createStore } from 'redux';
import { inputReducer } from './reducers/index';
export const store = createStore(inputReducer);
