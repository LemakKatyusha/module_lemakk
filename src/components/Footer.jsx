import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ group }) => {
	return (
		<footer>
			<h1> {group}</h1>
		</footer>
	);
};
Footer.propTypes = {
	group: PropTypes.string.isRequired,
};
export default Footer;
