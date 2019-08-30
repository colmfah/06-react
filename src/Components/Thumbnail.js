import React from 'react'
import '../Styles/Thumbnail.css'
class Thumbnail extends React.Component {

	state = {
    places: this.props.item
  }

	render() {
	  return (
			<div className="thumbnail">
				<p>Title: {this.props.item.title}</p><p>Price: €{this.props.item.price}</p><p>Location: {this.props.item.location}</p>
			</div>
	  )
	}
}

export default Thumbnail
