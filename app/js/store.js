import { applyMiddleware, createStore, compose } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';

const middleware = applyMiddleware( thunk, logger() );
const composed = compose( middleware, 
		window.devToolsExtension && window.devToolsExtension() );

export default createStore( reducer, composed );

