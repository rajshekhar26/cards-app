import { combineReducers, legacy_createStore } from "redux";
import cardsReducer from "./cards/reducer";

const rootReducer = combineReducers({
  cards: cardsReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
