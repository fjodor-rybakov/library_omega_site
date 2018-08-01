import React, { Component, PropTypes } from 'react';

class DeleteBook extends Component {
	constructor(props) {
		super(props);

		this.state = {
			idBook: "",
			error: false,
			success: false
		};

		this.handlerSubmit = this.handlerSubmit.bind(this);
		this.onChangeId = this.onChangeId.bind(this);
	}

	handlerSubmit(event) {
		event.preventDefault();

		let data = new FormData();
		data.append("id", this.state.idBook);

		console.log("form is submitted");
		console.log(data);

		$.ajax({
			method: "POST",
			url: "http://localhost:3000/books/delete",
			data: data,
			dataType: 'json',
			cache: false,
			processData: false,
			contentType: false
		}).done((data) => {
			//  alert("Success");
			this.setState({success: true});

		}).fail((err) => {
			// alert("Error");
			this.setState({error: true});
			console.log("error: ", err);
		});
	}

	onChangeId(event) {
		this.setState({idBook: event.target.value})
	}

	render() {
		return (
			<div className="container" onSubmit={this.handlerSubmit}>
				<form>
					<input type="text" className="form-control" placeholder="ID книги" value={this.state.idBook} onChange={this.onChangeId}/>
					<button type="submit" className="btn btn-primary">Удалить книгу</button>
				</form>
			</div>
		);
	}
}

export default DeleteBook;