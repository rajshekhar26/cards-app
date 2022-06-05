import * as types from "./constants";
import cards from "../../cardData";

const initialState = {
  cards: cards,
};

const cardsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.DELETE_CARD:
      const newCards = state.cards.filter((card) => card.id !== payload);

      return { ...state, cards: newCards };

    case types.ADD_CARD:
      return { ...state, cards: [...state.cards, payload] };

    case types.EDIT_CARD:
      const changedCards = cards.map((card) =>
        card.id === payload.id ? payload : card
      );

      return { ...state, cards: changedCards };

    default:
      return state;
  }
};

export default cardsReducer;
