import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
const queryString = require('query-string'); 
import { connect } from 'react-redux';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dataBook: []
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
   		const value = event.target.elements[0].value.toLowerCase();
   		this.props.onSendDataBook(value);
	}

	render() {
		if (!(this.props.location.pathname === `/books/showPage/${this.props.match.params.numPage}`)) {
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
								<li><Link to="/books/delete">Удалить книгу</Link></li>
							</ul>
						</div>
					</div>
				</nav>
			);
		} else 
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
								<li><Link to="/books/delete">Удалить книгу</Link></li>
								<form onSubmit={this.handleSubmit} className="navbar-form navbar-right" role="search">
									<div className="from-group">
										<input type="text" className="form-control" placeholder="Имя книги" required="required"/>
										<button type="submit" className="btn btn-default">Поиск</button>
									</div>
								</form>
							</ul>
						</div>
					</div>
				</nav>
			);
	}
}

export default connect(
	state => ({}),
	dispatch => ({
		onSendDataBook: (substr) => {
			dispatch({ type: 'SEND_DATA_BOOK', payload: substr })
		}
	})
)(Header);