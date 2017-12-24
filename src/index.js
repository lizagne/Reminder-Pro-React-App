import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux'; //importing the Provider, as we have to initialise the store. This will pass down it's store to the whole app. Then wrap it below:
import { createStore } from 'redux'; 

import reducer from './reducers';

const store = createStore(reducer); //have to declare the store as the function createStore();

ReactDOM.render(
	<Provider store={ store }> 
		<App />
	</Provider>, 

	document.getElementById('root') //this has to come in as the second argument
)