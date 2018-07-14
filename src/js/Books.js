import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
	render() {
		return (
			<div className='container'>
				<ul className='nav nav-pills'>
					<li><Link to='/'>Главная</Link></li>
				</ul>
			</div>
		)
	}
}