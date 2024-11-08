import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

function App() {
	const user = {
		firstName: 'Катерина',
		lastName: 'Лемак',
		city: 'Хуст',
		hobby: 'хобі - сама не знаю(',
		group: 'ІСТ',
	};

	return (
		<Router>
			<Header firstName={user.firstName} lastName={user.lastName} />
			<nav>
				<Link to="/">Page 1</Link>
				<Link to="/page2">Page 2</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Page1 city={user.city} />} />
				<Route path="/page2" element={<Page2 hobby={user.hobby} />} />
			</Routes>
			<Footer group={user.group} />
		</Router>
	);
}

export default App;
