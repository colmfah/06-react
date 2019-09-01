import React from 'react'
import '../Styles/Thumbnail.css'
class Thumbnail extends React.Component {



toggleButtonColor(){
			return this.props.place.liked ? 'liked' : ''
		}



	render() {
	  return (
			<div class='thumbnail'>
				<p>{this.props.place.title}</p>
				<p>{this.props.place.price}</p>
				<p>{this.props.place.location}</p>
				<p>{this.props.place.liked.toString()}</p>
				<button className={this.toggleButtonColor()} onClick={() => this.props.toggleLike(this.props.place.title)}>I Like You Long Time</button>
			</div>
	  )
	}


}
export default Thumbnail
