import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			name: '',
			link:'',
			year:'',
			description: '',
			authors: '',
			error: false,
			success: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleYearChange = this.handleYearChange.bind(this);
		this.handleLinkChange = this.handleLinkChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleAuthorsChange = this.handleAuthorsChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		let data = new FormData(event.target);

		console.log("form is submitted");
		console.log(data);

		$.ajax({
			method: "POST",
			url: "http://localhost:3000/books",
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

	handleYearChange(event){
		this.setState({year: event.target.value})
	}
	handleNameChange(event){
		this.setState({name: event.target.value})
	}
	handleLinkChange(event){
		this.setState({link: event.target.value})
	}
	handleAuthorsChange(event){
		this.setState({authors: event.target.value})
	}
	handleDescriptionChange(event){
		this.setState({description: event.target.value})
	}

	render() {
		if(this.state.error)
			return (
				<div>
					<div className="alert alert-danger" role="alert">
						Ошибка при добавлении книги!
					</div>
				</div>);
		else if(this.state.success)
			return (<div>
				<div className="alert alert-primary" role="alert">
					Книга успешно добавлена!
				</div>
			</div>);
		else
			return (
				<div className='container'>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
								   placeholder="Book name" value={this.state.name} onChange={this.handleNameChange}/>
						</div>
						<div className="form-group">
							<input name="link" type="text" className="form-control" id="exampleInputPassword1" placeholder="Authors"
								   value={this.state.authors} onChange={this.handleAuthorsChange}/>
						</div>
						<div className="form-group">
							<input name="authors" type="text" className="form-control" id="exampleInputPassword1" placeholder="Link"
								   value={this.state.link} onChange={this.handleLinkChange}/>
						</div>
						<div className="form-group">
							<input  name="year" type="text" className="form-control" id="exampleInputPassword1" placeholder="Year"
									value={this.state.year} onChange={this.handleYearChange}/>
						</div>
						<div className="form-group">
							<textarea name="description" className="form-control" id="exampleFormControlTextarea1"
									  placeholder="Description" value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
						</div>
						<button type="submit" className="btn btn-primary float-right">Add Book</button>
					</form>
				</div>
			)
	}
}