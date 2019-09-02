import React from 'react'
import '../Styles/Place.css'

class Place extends React.Component {

	state = {
		images: [
			{
				id: 1,
				image: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
			},
			{
				id: 2,
				image: 'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg'
			},
			{
				id: 3,
				image: 'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg'
			},
			{
				id:4,
				image: 'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg'
			}

		],
selectedImage: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
	}

handleClick = (e) => {
	let border = false
	this.setState({
		border:border
	})
	let selectedImage = this.state.images[e-1].image
	this.setState({
		selectedImage:selectedImage
	})


	// this.setState({
	// 	selectedImage:selectedImage
	// }, () => {
	// 	console.log('selected-image-in-state', this.state.selectedImage);
	// })

}

// when do i use method over function. Whats the difference?

	render() {

	  return (

					<div className='wrap'>
							<div className='large' style={{backgroundImage:`url(${this.state.selectedImage})`}} >
							</div>
							<div className='thumbnails'>
								{this.state.images.map(	(pic, i) =>{
									return <div key={i} style={{backgroundImage:`url(${pic.image})`}} className={pic.image === this.state.selectedImage  ? 'displayborder thumbnail2' : 'thumbnail2'} onClick={(e) => this.handleClick(pic.id)}>
									</div>}	)}

							</div>
					</div>
		)

}
}

export default Place
