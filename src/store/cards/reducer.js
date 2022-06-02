import * as types from "./constants";
import cards from "../../cardData";

const initialState = {
  cards: cards,
  status: "idle",
};

const cardsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.DELETE_CARD:
      const newCards = state.cards.filter((card) => card.id !== payload);

      return { ...state, cards: newCards };

    default:
      return state;
  }
};

export default cardsReducer;
