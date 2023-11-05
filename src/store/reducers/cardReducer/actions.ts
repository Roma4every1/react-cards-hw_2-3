import { Card } from "../../../models/card"
import { CardReducerEnum } from "./actionTypes"

export const setCardsToStore = (cards:Card[]) => {
    return {type: CardReducerEnum.SET_CARDS, cards}
}
export const setFavoriteCardsToStore = (favoriteCards: Card[]) => {
    return {type: CardReducerEnum.SET_FAVORITE_CARDS, favoriteCards}
}
export const setSelectedCardByLabel = (selectedCard: Card) => {
    return {type: CardReducerEnum.SET_SELECTED_CARD, selectedCard}
}
export const setFilteredCardsToStore = (searchKeyword:string)=>{
    return{type:CardReducerEnum.SET_FILTERED_CARDS, searchKeyword}
}
export const setSearchKeyword = (searchKeyword:string)=>{
    return{type:CardReducerEnum.SET_SEARCH_KEYWORD, searchKeyword}
}