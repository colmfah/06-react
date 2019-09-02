import React from 'react'
import '../Styles/Places.css'
import Favourites from './Favourites'
import Thumbnail from './Thumbnail'
import Search from './Search'

class Places extends React.Component {

	state = {places: [
		{title: 'apartment', price: 100, location: 'Dublin', liked: false},
		{title: 'house' , price: 200 , location: 'London', liked: false},
		{title: 'villa' , price: 300 , location: 'Paris', liked: false },
		{title: 'cottage' , price: 400, location: 'Berlin', liked: false }
	],
	filteredForSearch: []
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

handleChange = (event) => {
	let searchValue = event.target.value
	let filteredForSearch = this.state.places.filter(e => {return e.title.includes(searchValue)})
	this.setState({
		filteredForSearch: filteredForSearch
	})
}


	render() {

	  return (
			<div>
					<Search handleChange={this.handleChange}/>
			    <div class='thumbnails'>
						{this.state.filteredForSearch.map(	(place, i) => <Thumbnail key={i} place={place} toggleLike={this.toggleLike}/>	)}
					</div>
					<div>
					<Favourites favs={this.state.places.filter(place => place.liked)} toggleLike={this.toggleLike} />
				</div>



			</div>
	  )
	}
}


export default Places

						// {filteredForSearch.map(	(place, i) => <Thumbnail key={i} place={place} toggleLike={this.toggleLike}/>	)}

						// {this.state.places.map(	(place, i)	=> <Thumbnail key={i} place={place} toggleLike={this.toggleLike}/>)}

						// handleChange = (event) => {
						// 	let searchValue = this.state.searchValue
						// 	searchValue = event.target.value
						// 	this.setState({
						// 		searchValue: searchValue
						// 	})
						// }
