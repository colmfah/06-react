import React from 'react'
// import '../Styles/Favourites.css'

class Favourites extends React.Component {

	state = {places: [{title: 'apartment', price: 100, location: 'Dublin' }, {title: 'house' , price: 200 , location: 'London' }, {title: 'villa' , price: 300 , location: 'Paris' }, {title: 'cottage' , price: 400, location: 'Berlin' }]
	}

	render() {
	  return (
	    <div className='favourites'>

	    </div>
	  )
	}
}

export default Favourites
