import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { CharAppState } from './redux/characters/types';

import rootReducer from './redux/rootReducer';
import rootSaga from './redux/rootSaga';

export interface ApplicationState {
    characters: CharAppState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
