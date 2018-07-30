import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
const queryString = require('query-string'); 
import { connect } from 'react-redux';

class ShowPages extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: [] // его тоже выводит хз почему
		};

		this.setNewDataBook = this.setNewDataBook.bind(this);
	}

	componentDidMount() {
		fetch(`/books/showPage/${this.props.match.params.numPage}`)
			.then(results => { 
				return results.json() 
			})
			.then(data => { 
				//console.log(data);
				this.setState({books: data }); 
			})
			.catch(() => { 
				alert('Ошибка получения данных!');
			});
		//console.log(this.props.location.search);
	}

	setNewDataBook(substr) {
		fetch('/books/searchBook?substring=' + substr)
			.then(results => { 
 				return results.json() 
 			})
 			.then(data => { 
 				this.setState({
                    books: data
                });
 			})
			.catch(() => { 
				alert('Ошибка получения данных!');
			})
	}

	render() {
		//console.log(this.state.books);
		//console.log(this.props.match.params.numPage);
		//console.log(this.props.onSendDataBook);
		//console.log(this.props.onSendDataBook.serachSubstr);
		if (this.props.onSendDataBook.serachSubstr !== '') {
			this.setNewDataBook(this.props.onSendDataBook.serachSubstr);
			this.props.onSendDataBook.serachSubstr = '';
		}
		let link;

		const bookElements = this.state.books.map((item, index) =>
			<div key = {index} className="col-md-3">
				<span style= {{ display: 'none' }}>{link = '/books/'}</span>
				<h2><Link to= {link += item._id}> {item.name} </Link></h2>
				<a href={item.link}>Ссылка на магазин</a>
				<h4>{item.authors}</h4>
				<p>Книга {item.available ? "доступна" : "недоступна"}</p>
			</div>
		);

		return (
			<div>
				<div className="container">
					<div className="row">
						{bookElements}
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		onSendDataBook: state
	}),
	dispatch => ({})
)(ShowPages);