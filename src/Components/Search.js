import React from 'react'
import '../Styles/Search.css'

class Search extends React.Component {


	render() {

	  return (
					<div className='searchwrap'>
						<form>
							<label>
								Search:
								<input type="text" name="name" />
							</label>
						</form>
					</div>

		)

}
}

export default Search
