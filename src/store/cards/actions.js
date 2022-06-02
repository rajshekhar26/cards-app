import * as types from "./constants";

export const setDeleteCardAction = (id) => ({
  type: types.DELETE_CARD,
  payload: id,
});
