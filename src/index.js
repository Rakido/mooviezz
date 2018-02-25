import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages

import App from './App';
import Categories from './pages/categories';
import About from './pages/about';
import InGame from './pages/ingame';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';





ReactDOM.render((
	<BrowserRouter>
	<Switch>
		 <Route path exact='/' component={App} />
		 <Route path='/categories' component={Categories} />
		 <Route path='/about' component={About} />
		 <Route path='/playing' component={InGame} />
	</Switch>
	</BrowserRouter>
	), document.getElementById('root'));

