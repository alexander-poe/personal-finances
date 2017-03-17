import { createNavigationEnabledStore } from '@expo/ex-navigation';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
});

const store = createStoreWithNavigation(
  reducer,
  applyMiddleware(thunk)
);


export default store;
