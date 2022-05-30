import { HashRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Router from './router/Router';
import { Header } from './components/Header/Header';
import './App.css';
import { getCatsFavoriteState } from './store/selectors/selectors';
import { CatsReducerActionTypes } from './store/reducers/catsReducer/actions/enumActionTypes';

function App() {
  const favCat = useSelector(getCatsFavoriteState);
  const dispatch = useDispatch();

  useEffect(() => {
    const saveFavCats = localStorage.getItem("favCats");
    if(saveFavCats) dispatch({type: CatsReducerActionTypes.GET_LOCAL_FAVORITE, payload: JSON.parse(saveFavCats)})
  }, [dispatch])
  
  useEffect(() => {
    localStorage.setItem("favCats", JSON.stringify(favCat));
  }, [favCat]);



  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Router />
      </HashRouter>
    </div>
  );
}

export default App;
