import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const queryString = require('query-string'); 

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand">{this.props.name}</Link>
					</div>

					<div>
						<ul className="nav navbar-nav">
							<li><Link to="/">Главная</Link></li>
							<li><Link to="/books/showPage/1">Просмотреть доступные книги</Link></li>
							<li><Link to="/">Забронировать книгу</Link></li>
							<li><Link to="/books">Добавить книгу</Link></li>
							<li><Link to="/">Удалить книгу</Link></li>
							<from className="navbar-form navbar-right" role="search">
								<div className="from-group">
									<input type="text" className="form-control" placeholder="Имя книги"/>
									<button type="submit" className="btn btn-default">Поиск</button>
								</div>
							</from>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;