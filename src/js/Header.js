import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<Link to='/' className="navbar-brand">{this.props.name}</Link>
					</div>

					<div>
						<ul className="nav navbar-nav">
							<li><Link to='/'>Главная</Link></li>
							<li><Link to='/books/showPage/1'>Просмотреть доступные книги</Link></li>
							<li><Link to='/'>Забронировать книгу</Link></li>
							<li><Link to='/'>Добавить книгу</Link></li>
							<li><Link to='/'>Удалить книгу</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;