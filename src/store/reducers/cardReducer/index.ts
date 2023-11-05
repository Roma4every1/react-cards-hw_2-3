import { Reducer } from "@reduxjs/toolkit";
import { Cards } from "../../../data/cards";
import { Card } from "../../../models/card";
import { CardReducerEnum } from "./actionTypes";

type CardReducerType = {
  cards: Card[];
  filteredCards: Card[];
  favoriteCards: Card[];
  selectedCard: Card | undefined;
  searchKeyword: string;
};

const defaultState: CardReducerType = {
  cards: Cards,
  filteredCards: [],
  favoriteCards: Cards.filter((card) => card.isLiked),
  selectedCard: undefined,
  searchKeyword: "",
};

const cardReducer: Reducer<CardReducerType> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case CardReducerEnum.SET_CARDS:
      return { ...state, cards: action.cards };
    case CardReducerEnum.SET_FAVORITE_CARDS:
      return { ...state, favoriteCards: action.favoriteCards };
    case CardReducerEnum.SET_SELECTED_CARD:
      return { ...state, selectedCard: action.selectedCard };
    case CardReducerEnum.SET_FILTERED_CARDS:
      return {
        ...state,
        filteredCards: state.cards.filter((card) =>
          card.title.toLowerCase().includes(action.searchKeyword.toLowerCase())
        ),
      };
    case CardReducerEnum.SET_SEARCH_KEYWORD:
      return { ...state, searchKeyword: action.searchKeyword };
    default:
      return { ...state };
  }
};

export default cardReducer;
