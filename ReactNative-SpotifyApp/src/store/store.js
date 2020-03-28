import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';
import Stack from '../navigators/navigator';
import appReducer from '../reducers';

const middleware = createReactNavigationReduxMiddleware((state) => state.nav);

const Root = createReduxContainer(Stack, 'root');

const initMiddleware = () => {
  return applyMiddleware(middleware, thunk);
};

const store = createStore(appReducer, initMiddleware());

export { store, Root };
