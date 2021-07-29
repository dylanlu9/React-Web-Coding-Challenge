import "../styles/globals.css";
import PropTypes from "prop-types";
import React from "react";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

MyApp.propTypes = {
	Component: PropTypes.elementType,
	pageProps: PropTypes.object
};

export default MyApp;
