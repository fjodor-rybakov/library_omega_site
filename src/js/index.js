import React from 'react';
import { render } from 'react-dom';
import Library from './Library';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

//render(<Library name="Library Omega"/>, $('#root')[0]);

ReactDOM.render(
	<HashRouter>
		<div>
			 <Route path="/1" render={()=><Library name="Library Omega"/>}/>
		</div>
	</HashRouter>,
	$('#root')[0]
);