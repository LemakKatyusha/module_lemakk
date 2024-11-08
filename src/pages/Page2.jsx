import React from 'react';
import PropTypes from 'prop-types';

function Page2({ hobby }) {
	return (
		<div>
			<h2>Хобі:</h2>
			<p>{hobby}</p>
		</div>
	);
}
Page2.propTypes = {
	hobby: PropTypes.string.isRequired,
};
export default Page2;
