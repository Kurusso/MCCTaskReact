import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import mainReducer from '../reducers/reducer';

let reducers = combineReducers({
    mainPage : mainReducer
});
let mainStore = createStore (reducers, applyMiddleware(thunk))

export default mainStore;