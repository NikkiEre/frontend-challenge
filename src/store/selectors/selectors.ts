import { CatDataType } from "../reducers/catsReducer/catsReducer";


type catsState = {
    catsReducer: {
        cats: CatDataType[],
        favorite: CatDataType[]
    }
};

export function getFetchCatsState(state: catsState) {
    return state.catsReducer.cats;
}

export function getCatsFavoriteState(state: catsState) {
    return state.catsReducer.favorite;
}