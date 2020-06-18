import {createStore, combineReducers, applyMiddleware} from 'redux';
import dialogsReducer from '../Reducers/dialogs-reducer';
import profileReducer from '../Reducers/profile-reducer';
import usersReducer from '../Reducers/users-reducer';
import authReducer from '../Reducers/auth-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import messagesDialog from '../Reducers/messages-reducer';
import appReducer from '../Reducers/app-reducer';
import panelReducer from '../Reducers/panel-reducer';
import logger from 'redux-logger'
import covidReducer from '../Reducers/codiv-reducer';

let rootReducers = combineReducers({
    profile:  profileReducer,
    messages: dialogsReducer,
    messagesDialog: messagesDialog,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    panels: panelReducer,
    codiv: covidReducer
})

type RootReducerType = typeof rootReducers;

export type AppStateType = ReturnType<RootReducerType>;

let store = createStore(rootReducers, applyMiddleware(thunk,logger))


export default store;

