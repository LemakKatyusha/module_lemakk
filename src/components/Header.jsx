import React from 'react';
import '../styles/header.css';
import PropTypes from 'prop-types';

function Header({ firstName, lastName }) {
	return (
		<header className="header">
			<h1>
				{firstName} {lastName}
			</h1>
		</header>
	);
}

Header.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
};
export default Header;
