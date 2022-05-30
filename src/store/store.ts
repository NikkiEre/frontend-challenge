import { configureStore } from '@reduxjs/toolkit';
import { RootActionType } from './reducers/catsReducer/actions/actionTypes';
import { catsReducer } from './reducers/catsReducer/catsReducer';

export default configureStore<unknown, RootActionType>({
  reducer: {
    catsReducer: catsReducer,
  },
})