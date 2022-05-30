import { CatDataType } from "../catsReducer"
import { CatsReducerActionTypes } from "./enumActionTypes"

type ActionFetchType = {
    type: CatsReducerActionTypes.FETCH_CATS,
    payload: CatDataType[]
}

type ActionLocalGetType = {
    type: CatsReducerActionTypes.GET_LOCAL_FAVORITE,
    payload: CatDataType[]
}

type ActionAddType = {
    type: CatsReducerActionTypes.ADD_FAVORITE,
    payload: CatDataType
}

type ActionRemoveType = {
    type: CatsReducerActionTypes.REMOVE_FAVORITE,
    payload: CatDataType
}

export type RootActionType = ActionFetchType | ActionAddType | ActionRemoveType | ActionLocalGetType;