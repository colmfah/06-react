import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Thumbnail from './Thumbnail'
import Favourites from './Favourites'
import Places from './Places'
import Search from './Search'

class Routes extends React.Component {


	render() {

	  return (
				<BrowserRouter>
					<Switch>
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
