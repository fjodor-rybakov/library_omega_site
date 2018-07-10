import React from 'react';

function Header(props) {
	return (
		<div id="header">
			<h1 id="title">Welcom to {props.name}</h1>
			<p>Im header</p>
		</div>
	);
}

export default Header;