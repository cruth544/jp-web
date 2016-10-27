import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import Home from './containers/Home/Home'
import store from './store'

require( 'index.html' )
require( 'css/main.scss' )

const app = document.getElementById( 'app' )

const render = () => {
	ReactDom.render(
			<Provider store={ store }>
				<Home />
			</Provider>,
	app )
}

store.subscribe( render )
render()

