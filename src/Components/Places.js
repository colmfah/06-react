import React from 'react'
import '../Styles/Places.css'
import Favourites from './Favourites'
import Thumbnail from './Thumbnail'

class Places extends React.Component {

	state = {places: [{title: 'apartment', price: 100, location: 'Dublin' }, {title: 'house' , price: 200 , location: 'London' }, {title: 'villa' , price: 300 , location: 'Paris' }, {title: 'cottage' , price: 400, location: 'Berlin' }]
	}

	render() {
	  return (
	    <div>
			<h1>{this.state.places.length}</h1>

			<div className = 'thumbnails'>
				{this.state.places.map((place, index) => <Thumbnail key={index} item={place} />)}
			</div>

				<Favourites />

	    </div>
	  )
	}
}

export default Places

// <div className='thumbnails'>
// 	{this.state.places.map((e,i) => <div className='thumbnail' key={i}><p>Title: {e.title}</p><p>Price: €{e.price}</p><p>Location: {e.location}</p></div>)}
// </div>
