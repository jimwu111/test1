import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import toDoApp from './reducers';
import createSagaMiddleware from 'redux-saga';
import {loadToDoList} from './actions/index';
import rootSaga from './sagas';
//can't use this for history  -- can't use this
//import {BrowserRouter} from 'react-router-dom'; 

import {Router} from 'react-router-dom'; 

import { createBrowserHistory   } from 'history';

import {ResponsivePanel} from './components/SidePanel';


const history = createBrowserHistory();


const sagaMiddleware = createSagaMiddleware();

const store = createStore(toDoApp, compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

sagaMiddleware.run(rootSaga);

store.dispatch(loadToDoList())

//render ()--> provider --> store --> reducers
render(
    <Provider store={store}>
        <Router history={history}>
        <ResponsivePanel/>
        </Router>       
    </Provider>,
    document.getElementById("root")
);