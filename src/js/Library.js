import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class Library extends Component {
	render() {
		return (
			<div>
				<Header name={this.props.name}/>
				<Content/>
				<Footer/>
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