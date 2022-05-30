import { RootActionType } from "./actions/actionTypes";
import { CatsReducerActionTypes } from "./actions/enumActionTypes";

export type CatDataType = {
    breeds: [],
    id: string,
    url: string,
    width: number,
    height: number,
}

type CatsReducerType = {
    cats: CatDataType[],
    favorite: CatDataType[]
}

const initialState: CatsReducerType = {
    cats: [],
    favorite: []
}

export function catsReducer(state = initialState, action: RootActionType) {
    switch (action.type) {
        case CatsReducerActionTypes.FETCH_CATS: {
            if(Array.isArray(action.payload)) {
                return {...state, cats: [...state.cats, ...action.payload]}
            } else {
                return state;
            }
        }
        case CatsReducerActionTypes.ADD_FAVORITE: {
            if(!Array.isArray(action.payload)) {
                return {...state, favorite: [...state.favorite, action.payload]}
            } else {
                return state;
            }
        }
        case CatsReducerActionTypes.GET_LOCAL_FAVORITE: {
            if(Array.isArray(action.payload)) {
                return {...state, favorite: [...state.favorite, ...action.payload]}
            } else {
                return state;
            }
        }
        case CatsReducerActionTypes.REMOVE_FAVORITE:
            const filtredFavorite = state.favorite.filter((cat) => cat !== action.payload);
            return {...state, favorite: [...filtredFavorite]};
        default:
            return state;
    }
}