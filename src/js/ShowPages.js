import React, { Component, PropTypes } from 'react';
import Header from './Header';

class ShowPages extends Component {
	constructor(props) {
        super(props);

        this.state = {
            todos: []
        };
    }

    componentDidMount() {
    	fetch('http://localhost:3000/books/showPage/1').then(results => { return results.json() }).then(data => {
	         this.setState({books: data });
	    }).catch(() => {
	         alert('Ошибка получения данных!');
	    });
        /*fetch(`this.props.requestAddress`).then(res => {
            this.setState({ todos: res.todos });
        });*/
    }

	render() {
		console.log(this.state.books);
		return (
			<div>
				<Header name={this.props.name} />
				
			</div>
		);
	}
}

export default ShowPages;