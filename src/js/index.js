import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Library from './Library';
import NotFound from './NotFound';
import Books from './Books';
import { HashRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
	<HashRouter>
		<div>
            <Switch>
            	<Route exact path="/" render={()=><Library name="Library Omega" />} />
				<Route path="/books" component={Books} />
				<Route component={NotFound} />
			</Switch>
		</div>
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