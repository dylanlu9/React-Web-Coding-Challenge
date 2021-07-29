import "../styles/globals.css";
import PropTypes, { ReactComponentLike } from "prop-types";
import React from "react";

interface MyAppArgs {
	Component: ReactComponentLike | undefined;
	pageProps: unknown;
}

const MyApp: React.FC<MyAppArgs> = ({ Component, pageProps }): JSX.Element => <Component {...pageProps} />;

MyApp.propTypes = {
	Component: PropTypes.elementType,
	pageProps: PropTypes.object
};

export default MyApp;
