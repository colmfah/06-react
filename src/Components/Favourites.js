import React from 'react'
import '../Styles/Favourites.css'
import Thumbnail from './Thumbnail'

class Favourites extends React.Component {




	render() {
	  return (
	    <div className='favourites'>
				{this.props.favs.map((place, i) => <Thumbnail key={i} place={place} toggleLike={this.props.toggleLike}/>)}
	    </div>
	  )
	}
}

export default Favourites
