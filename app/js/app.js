import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Home from 'containers/Home/Home'
import store from 'store'

require( '../index.html' )
require( '../css/main.scss' )

const app = document.getElementById( 'app' )

// const histroy = syncHistoryWithStore( browserHistory, store )

const render = () => {
	ReactDom.render(
			<Provider store={ store }>
				<Router history={ browserHistory }>
					<Route path='/(:route)'
						component={ Home } />
				</Router>
			</Provider>
	, app )
}

store.subscribe( render )
render()
