import React from 'react'
import '../Styles/Places.css'
import Favourites from './Favourites'
import Thumbnail from './Thumbnail'
import Search from './Search'

class Places extends React.Component {

	state = {places: [
		{title: 'apartment', price: 100, location: 'Dublin', liked: false},
		{title: 'house' , price: 200 , location: 'London', liked: false},
		{title: 'villa' , price: 300 , location: 'Paris', liked: true },
		{title: 'cottage' , price: 400, location: 'Berlin', liked: false }
	]
	}


toggleLike = (t) =>{
	let places = this.state.places
	places = places.map( e => {
		if (t === e.title){
			e.liked = !e.liked
		}
		return e
	}
	)
	this.setState({
		places:places
	})

}


	render() {

	  return (
			<div>
			    <div class='thumbnails'>
						{this.state.places.map(	(place, i)	=> <Thumbnail key={i} place={place} toggleLike={this.toggleLike}/>)}
					</div>
					<div>
					<Favourites favs={this.state.places.filter(place => place.liked)} toggleLike={this.toggleLike} />
					<Search />
				</div>


			</div>
	  )
	}
}


export default Places
