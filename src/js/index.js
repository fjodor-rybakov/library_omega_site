import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Library from './Library';
import NotFound from './NotFound';
import Books from './Books';
import ShowPages from './ShowPages';
import ShowBook from './ShowBook';
import Header from './Header';
import Footer from './Footer';
import DeleteBook from './DeleteBook';
import { HashRouter, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import reducer from './reducers';

const labelName = "Library Omega";
const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<div>
				<Switch>
					<Route 
						exact 
						path="/" 
						render={(props) => 
							<div>
								<Header {...props} name={ labelName } />
								<Library {...props} />
							</div> 
						}
					/>
					<Route
	                    exact
	                    path="/books/delete"
	                    render={(props) =>
	                        <div>
	                            <Header {...props} name={ labelName } />
	                            <DeleteBook {...props} />
	                        </div>
	                    }
	                />
					<Route 
						exact 
						path="/books" 
						render={(props) => 
							<div>
								<Header {...props} name={ labelName } />
								<Books {...props} />
							</div> 
						}
					/>
					<Route 
						exact 
						path="/books/showPage/:numPage" 
						render={(props) => 
							<div>
								<Header {...props} name={ labelName } />
								<ShowPages {...props} />
							</div> 
						} 
					/>
	                <Route
	                    exact
	                    path="/books/:id"
	                    render={(props) =>
	                        <div>
	                            <Header {...props} name={ labelName } />
	                            <ShowBook {...props} />
	                        </div>
	                    }
	                />
					<Route component={ NotFound } />
				</Switch>
				{/*<Footer/>*/}
			</div>
		</HashRouter>
	</Provider>,
	$('#root')[0]
);
/*
ReactDOM.render(<HashRouter>
<div>
	<Route path='/' component={App}>
		<IndexRoute component={Home} />
		<Route path='/admin' component={Admin} />
		<Route path='/genre/:genre' component={Genre}>
			<Route path='/genre/:genre/:release' component={Release} />
		</Route>
		<Route path='/list' component={List} />
	</Route>
	<Route path='*' component={NotFound} />
</div>
</HashRouter>,$('#root')[0])*/