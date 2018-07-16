import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const queryString = require('query-string'); 

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			substring: ''
		};

		this.handlerSearchForm = this.handlerSearchForm.bind(this);
	}

	componentDidMount() {
		const values = queryString.parse(this.props.location.search);
		
		console.log(this.props);
	}

	handlerSearchForm(event) {
		this.setState({substring: event.target.value});
		//console.log(event.target.value);
		fetch('/books/searchBook?substring=' + event.target.value)
			.then(results => { 
				return results.json() 
			})
			.then(data => { 
				console.log(data); 
				//this.props.history.push({pathname: this.props.match.url, state: {message: "hello, im a passed message!"}});
				//console.log(this.props);
			})
			.catch(() => { 
				alert('Ошибка получения данных!');
			});
	}

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
							<from className="navbar-form navbar-right" role="search" onSubmit={this.handlerSearchForm}>
								<div className="from-group">
									<input type="text" className="form-control" placeholder="Имя книги" 
										value={this.state.substring} onChange={this.handlerSearchForm}/>
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