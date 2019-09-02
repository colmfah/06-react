import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Thumbnail from './Thumbnail'
import Favourites from './Favourites'
import Places from './Places'
import Search from './Search'
import Place from './Place'

class Routes extends React.Component {


	render() {

	  return (
				<BrowserRouter>
					<Switch>
						<Route path='/place' component={Place} />
						<Route path='/' component={Places} />
					</Switch>
				</BrowserRouter>
		)
}
}

export default Routes

// <Route path='/products/:id' component={Product} />
// <Route path='/products' component={Products} />
// <Route path='/profile' component={Profile} />

// Create a Place component that renders some simple text
// Import Place into Routes
// Create a /place routes that renders Place
// Test that both / and /place routes work correctly
// Commit 060802
