import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div id="header">
				<h1 id="title">Welcom to {this.props.name}</h1>
				<p>Im header</p>
			</div>
		)
	}
}

/*function Header(props) {
	return (
		<div id="header">
			<h1 id="title">Welcom to {props.name}</h1>
			<p>Im header</p>
		</div>
	);
}*/

export default Header;