import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function Library(props) {
	return (
		<div>
			<Header name={props.name}/>
			<Content/>
			<Footer/>
		</div>
	);
}

export default Library;