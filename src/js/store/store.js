import { createStore } from 'redux';
import reducers from '../list/reducers';

export const store = createStore(reducers);