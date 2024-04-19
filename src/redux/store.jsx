// Jag copy-pasta min Store för att den ska spara till Local Storage då jag inte lyckades lista ut hur jag skulle göra det själv så vet inte om allt är korrekt, men det fungerar!

import { createStore } from 'redux';
import rootReducer from './reducer'; 

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
  }
};

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState 
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;