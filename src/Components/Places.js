import React from 'react'
import '../Styles/Places.css'

class Places extends React.Component {

	state = {places: [{title: 'apartment', price: 100, location: 'Dublin' }, {title: 'house' , price: 200 , location: 'London' }, {title: 'villa' , price: 300 , location: 'Paris' }, {title: 'cottage' , price: 400, location: 'Berlin' }]
	}

	render() {
	  return (
	    <div>
	      <h1>{this.state.places.length}</h1>
				<div className='thumbnails'>
					{this.state.places.map((e,i) => <div className='thumbnail' key={i}><p>Title: {e.title}</p><p>Price{e.price}</p><p>Location: {e.location}</p></div>)}
				</div>
	    </div>
	  )
	}
}




export default Places



				// {this.state.places.forEach((e,i) => <div className='thumbnail'><p>{e.title}{e.price}{e.location}</p></div>)}



// In the render of Places, below the h1, add a div with a class of thumbnails
// Inside the div, loop through the places array and for each element ("place") render a div with a class of thumbnail
// Each "place" should display its title, price and location
// Commit 060203
