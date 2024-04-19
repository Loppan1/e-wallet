export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const TOGGLE_ACTIVE_CARD = 'TOGGLE_ACTIVE_CARD';

export const addCard = (card) => ({
  type: ADD_CARD,
  payload: card,
});

export const removeCard = (card) => ({
  type: REMOVE_CARD,
  payload: card,
});

export const toggleActiveCard = (cardNumber) => ({
  type: TOGGLE_ACTIVE_CARD,
  payload: cardNumber,
});