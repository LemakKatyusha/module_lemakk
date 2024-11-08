import React from 'react';
import PropTypes from 'prop-types';

function Page1({ city }) {
	return (
		<div>
			<h2>Місто:</h2>
			<p>{city}</p>
		</div>
	);
}
Page1.propTypes = {
	city: PropTypes.string.isRequired,
};
export default Page1;
