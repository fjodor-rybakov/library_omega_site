import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Library from './Library';
import NotFound from './NotFound';
import Books from './Books';
import ShowPages from './ShowPages';
import { HashRouter, Route, Switch, BrowserRouter as Router} from 'react-router-dom';

var labelName = "Library Omega";

ReactDOM.render(
	<HashRouter>
		<Switch>
			<Route exact path="/" render={()=><Library name={ labelName } />} />
			<Route exact path="/books" component={Books} />
			<Route exact path="/books/showPage/:numPage" render={(props) => <ShowPages {...props} name={ labelName } />} />
			<Route component={ NotFound } />
		</Switch>
	</HashRouter>,
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