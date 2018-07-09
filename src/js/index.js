import React from 'react';
import { render } from 'react-dom';

function MyComponent(props) {
	return (
		<div>
			<p>Component name is {props.name}</p>
		</div>
	);
}

render(<MyComponent name="value"/>, $('#root')[0]);