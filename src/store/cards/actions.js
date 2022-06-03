import * as types from "./constants";

export const deleteCardAction = (id) => ({
  type: types.DELETE_CARD,
  payload: id,
});

export const addCardAction = (newCard) => ({
  type: types.ADD_CARD,
  payload: newCard,
});
