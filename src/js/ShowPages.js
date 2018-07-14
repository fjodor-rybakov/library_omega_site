import React, { Component, PropTypes } from 'react';
import Header from './Header';

class ShowPages extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: [] // его тоже выводит хз почему
		};
	}

	componentDidMount() {

		fetch(`/books/showPage/${this.props.match.params.numPage}`)
			.then(results => { 
				return results.json() 
			})
			.then(data => { 
				this.setState({books: data }); 
			})
			.catch(() => { 
				alert('Ошибка получения данных!');
			});
	}

	render() {
		//console.log(this.state.books);
		//console.log(this.props.match.params.numPage);
		const bookElements = this.state.books.map((item, index) => 
			<div key = {index} className="col-md-3">
				<h2>{item.name}</h2>
				<a href={item.link}>Ссылка на магазин</a>
				<h4>{item.authors}</h4>
				<p>Книга {item.available ? "доступна" : "недоступна"}</p>
			</div>
		)

		return (
			<div>
				<Header name={this.props.name} />
				<div className="container">
					<div className="row">
						{bookElements}
					</div>
				</div>
			</div>
		);
	}
}

export default ShowPages;