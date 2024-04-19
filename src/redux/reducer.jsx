import { combineReducers } from 'redux';
import { ADD_CARD, REMOVE_CARD, TOGGLE_ACTIVE_CARD } from './actions';

const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    case REMOVE_CARD:
        return state.filter(card => card.cardNumber !== action.payload);
    default:
      return state;
  }
};

const activeCardReducer = (state = null, action) => {
  switch (action.type) {
    case TOGGLE_ACTIVE_CARD:
      return state === action.payload ? null : action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  cards: cardsReducer,
  activeCard: activeCardReducer,
});