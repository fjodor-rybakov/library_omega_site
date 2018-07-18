import React, { Component, PropTypes } from 'react';
import Booking from './Booking'

class ShowBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            book: {
                book: {
                    _id:'',
                    name: '',
                    link: '',
                    description: '',
                    authors: '',
                    year: 0
                },
                lastBooking: {}
            },
            available: true
        };
        this.booking = this.booking.bind(this);
        this.cancelBooking = this.cancelBooking.bind(this);
    }

    booking(event) {
        //event.preventDefault();
        this.setState({available: false});
        console.log(this.state);
        Booking(this.state.book.book._id)
        //TODO забронировать книгу
    }

    cancelBooking(event) {
        //event.preventDefault();
        this.setState({ available: true });
        console.log(this.state)
        //TODO снять бронь
    }

    componentDidMount() {
        fetch(`/books/${this.props.match.params.id}`)
            .then(results => {
                return results.json()
            })
            .then(data => {
                this.setState({
                    book: data,
                    available: data.book.available
                });
            })
            .catch(() => {
                alert('Ошибка получения данных!');
            });
    }

    render() {
      const book = (
            <div className="col-12 col-md-auto">
                <h2>{this.state.book.book.name}</h2>
                <a href={this.state.book.book.link}>Ссылка на магазин</a>
                <h4>{this.state.book.book.authors}</h4>
                <h5>{this.state.book.book.year}</h5>
                <p>{this.state.book.book.description}</p>
                <p>Книга {this.state.available ? "доступна" : "недоступна"}</p>
            </div>
       );

      let button = '';
      if (this.state.available) {
          button = (
              <button onClick={this.booking} type="button" className="btn btn-primary">Забронировать</button>
          );
      } else{
          button = (
              <button onClick={this.cancelBooking} type="button" className="btn btn-info">Снять бронь</button>
          );
      }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {book}
                        {button}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowBook;