import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import toDoApp from './reducers';
import createSagaMiddleware from 'redux-saga';
import {loadToDoList} from './actions/index';
import rootSaga from './sagas';
import {BrowserRouter} from 'react-router-dom';



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
        <BrowserRouter>
            <App/>
        </BrowserRouter>       
    </Provider>,
    document.getElementById("root")
);