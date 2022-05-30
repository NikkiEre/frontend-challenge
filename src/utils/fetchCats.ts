import { CatsReducerActionTypes } from "../store/reducers/catsReducer/actions/enumActionTypes";

export async function getCats(dispatch: any) {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=15');
    const payload = await response.json();
    dispatch({type: CatsReducerActionTypes.FETCH_CATS, payload: payload});
}   