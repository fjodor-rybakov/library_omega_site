import React, { Component, PropTypes } from 'react';
import Content from './Content';

class Library extends Component {
	render() {
		return (
			<div>
				<Content/>
			</div>
		);
	}
}

/*function Library(props) {
	return (
		<div>
			<Header name={props.name}/>
			<Content/>
			<Footer/>
		</div>
	);
}*/

export default Library;