import React from 'react'
import '../Styles/Place.css'

const divStyle = {
  backgroundImage:'url({this.state.images[0]})'
}


class Place extends React.Component {

	state = {
		images: [
			'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
			'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg',
			'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg',
			'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg'
		],
selectedImage: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
	}


	render() {

	  return (

					<div className='wrap'>
							<div className='large' style={{backgroundImage:`url(${this.state.selectedImage})`}} >
							</div>

							<div className='thumbnails'>

								{this.state.images.map(	(pic) =>{
									return <div style={{backgroundImage:`url(${pic})`}} className='thumbnail'>
									</div>}	)}
									
							</div>
					</div>
		)

}
}

export default Place


						// {this.state.filteredForSearch.map(	(place, i) => <Thumbnail key={i} place={place} toggleLike={this.toggleLike}/>	)}
