// src/config/store.js
import { legacy_createStore } from 'redux';
import rootReducer from './reducers'; // Import your root reducer

const store = legacy_createStore(rootReducer);

export default store;