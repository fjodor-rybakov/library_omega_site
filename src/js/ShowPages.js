import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ShowPages extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: []
		};

		this.setNewDataBook = this.setNewDataBook.bind(this);
		this.backPage = this.backPage.bind(this);
		this.forwardPage = this.forwardPage.bind(this);
		this.availableBook = this.availableBook.bind(this);
		this.disavailableBook = this.disavailableBook.bind(this);
	}

	componentDidMount() {
		fetch(`/books/showPage/${this.props.match.params.numPage <= 1 ? 1 : +this.props.match.params.numPage}`)
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

	backPage() {
		fetch(`/books/showPage/${+this.props.match.params.numPage <= 1 ? 1 : +this.props.match.params.numPage - 1}`)
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

	forwardPage() {
		fetch(`/books/showPage/${+this.props.match.params.numPage + 1}`)
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

	availableBook(event) {
		var checked = event.target.checked;
		if (checked) {
			fetch(`/books?available=true`)
				.then(results => { 
					return results.json() 
				})
				.then(data => { 
					this.setState({books: data }); 
				})
				.catch(() => { 
					alert('Ошибка получения данных!');
				});
			$("#disable").prop("disabled", true);
		} else {
			$("#disable").prop("disabled", false);
			this.componentDidMount();
		}
	}

	disavailableBook(event) {
		var checked = event.target.checked;
		if (checked) {
			fetch(`/books?available=false`)
				.then(results => { 
					return results.json() 
				})
				.then(data => { 
					this.setState({books: data }); 
				})
				.catch(() => { 
					alert('Ошибка получения данных!');
				});
			$("#able").prop("disabled", true);
		} else {
			$("#able").prop("disabled", false);
			this.componentDidMount();
		}
	}

	render() {
		if (this.props.onSendDataBook.serachSubstr !== '') {
			this.setNewDataBook(this.props.onSendDataBook.serachSubstr);
			this.props.onSendDataBook.serachSubstr = '';
		}

		let link;

		const bookElements = this.state.books.map((item, index) =>
			<div key = {index} className="col-md-4">
				<span style= {{ display: 'none' }}>{link = '/books/'}</span>
				<h2><Link to= {link += item._id}> {item.name} </Link></h2>
				<a href={item.link}>Ссылка на магазин</a>
				<h4>{item.authors}</h4>
				<p>Книга {item.available ? "доступна" : "недоступна"}</p>
			</div>
		);

		var link_forward = `/books/showPage/${+this.props.match.params.numPage + 1}`;
		var link_back = `/books/showPage/${+this.props.match.params.numPage <= 1 ? 1 : +this.props.match.params.numPage - 1}`;

		return (
			<div>
				<div className="container">
					<div className="row">
						{bookElements}
					</div>
				</div>
				<nav className="navbar navbar-default">
					<div className="container">
						<div>
							<ul className="nav navbar-nav">
								<li><Link to={link_back} onClick={this.backPage}>Предыдущая страница</Link></li>
								<li><Link to={link_forward} onClick={this.forwardPage}>Следующая страница</Link></li>
								<li className="cbavable"><input type="checkbox" id="able" onClick={this.availableBook}/>Доступные</li>
								<li className="cbavable"><input type="checkbox" id="disable" onClick={this.disavailableBook}/>Недоступные</li>
							</ul>
						</div>
					</div>
				</nav>
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