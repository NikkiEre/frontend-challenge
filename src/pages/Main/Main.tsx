import { useCallback, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { CardList } from "../../components/CardList/CardList";
import { Loader } from "../../components/Loader/Loader";
import { CatsReducerActionTypes } from "../../store/reducers/catsReducer/actions/enumActionTypes";
import { CatDataType } from "../../store/reducers/catsReducer/catsReducer";
import { getCatsFavoriteState, getFetchCatsState } from "../../store/selectors/selectors";
import { getCats } from "../../utils/fetchCats";

import './Main.css';

export default function Main(): JSX.Element {
    const {pathname} = useLocation();
    const cats = useSelector(getFetchCatsState);
    const favoriteCats = useSelector(getCatsFavoriteState);
    const dispatch = useDispatch();
    const ref = useRef(null);

    const addCatInFavorite = useCallback((cat: CatDataType) => {
        dispatch({type: CatsReducerActionTypes.ADD_FAVORITE, payload: cat});
    }, [dispatch]);

    const removeCatInFavorite = useCallback((cat: CatDataType) => {
        dispatch({type: CatsReducerActionTypes.REMOVE_FAVORITE, payload: cat});
    }, [dispatch]);

    const catList = useMemo(() => {
        if(pathname === "/") {
            return cats;
        } else {
            return favoriteCats;
        }
    }, [cats, favoriteCats, pathname]);

    const infiniteScrollFunction = useCallback(() => getCats(dispatch), [dispatch]);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "0px",
            threshold: 0
          };
          const observer = new IntersectionObserver(infiniteScrollFunction, option);
          if (ref.current) observer.observe(ref.current);
    }, [dispatch, infiniteScrollFunction, ref]);

    return (
        <section className="main">
            <div style={{minHeight: '100vh'}}>
                <CardList 
                    catList={catList}
                    favoriteCats={favoriteCats}
                    addCatInFavorite={addCatInFavorite}
                    removeCatInFavorite={removeCatInFavorite}
                />
            </div>
            <div ref={ref} style={{display: pathname === '/' ? 'block' : 'none'}}>
                <Loader />
            </div>
        </section>
    )
}