import React, { Component, PropTypes } from 'react';

class ShowBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            book: {
                book: {
                    name: '',
                    link: '',
                    description: '',
                    authors: '',
                    year: 0,
                    available: true
                },
                lastBooking: {}
            }
        };
    }

    componentDidMount() {
        //console.log(this.props.location.search);
        fetch(`/books/${this.props.match.params.id}`)
            .then(results => {
                return results.json()
            })
            .then(data => {
                this.setState({book: data });
              //  console.log(data);
            })
            .catch(() => {
                alert('Ошибка получения данных!');
            });
    }

    render() {
        console.log(this.state.book.book);
        //console.log(this.props.match.params.numPage);
      const book = (
            <div className="col-12 col-md-auto">
                <h2>{this.state.book.book.name}</h2>
                <a href={this.state.book.book.link}>Ссылка на магазин</a>
                <h4>{this.state.book.book.authors}</h4>
                <h5>{this.state.book.book.year}</h5>
                <p>{this.state.book.book.description}</p>
                <p>Книга {this.state.book.book.available ? "доступна" : "недоступна"}</p>
            </div>
       );

      let button = '';
      if (this.state.book.book.available) {
          button = (
              <button type="button" className="btn btn-primary">Забронировать</button>
          );
      } else{
          button = (
              <button type="button" className="btn btn-info">Снять бронь</button>
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