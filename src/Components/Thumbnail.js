import React from 'react'
import '../Styles/Thumbnail.css'
class Thumbnail extends React.Component {

	state = {
    places: this.props.item,
		liked: false
  }

	likeUnlike(l) {
		let likedStatus = l
		if (l === false){
			likedStatus = true
			this.setState({
				liked: likedStatus
		})}
		else {
			likedStatus = true
			this.setState(prevState => ({
  		liked: !prevState.liked
}))
		}

    }
//is this the right way to do it? Found on stack overflow



		//this method will change from false to true once. Won't change after that.


	//I'm not using the stored value of places in state. Why am I saving to it?

	//lots of different components could pass props to this component. Where are they saved/imported. Won't there be clashes when different components pass props with the same name?


	render() {
	  return (
			<div className="thumbnail">
				<p>Y{this.state.liked.toString()}</p>
				<p>Title: {this.props.title}</p><p>Price: €{this.props.item.price}</p><p>Location: {this.props.item.location}</p>
				<button className={(this.state.liked) ? 'liked' : ''} onClick={() => this.likeUnlike(this.state.liked)}>Button</button>
			</div>
	  )
	}
}

 // <button onClick={() => this.add(1,2)}>



//i can use this.state.places.title instead of this.props.title. Are there advantages or disadvantages to using one over the other?

export default Thumbnail
