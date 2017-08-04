import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = () => [];

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
