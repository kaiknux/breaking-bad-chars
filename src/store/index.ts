import { createStore, Store } from 'redux';
import { CharAppState } from './redux/characters/types';


import rootReducer from './redux/rootReducer';

export interface ApplicationState {
    characters: CharAppState
}

const store: Store<ApplicationState> = createStore(rootReducer);


export default store;
