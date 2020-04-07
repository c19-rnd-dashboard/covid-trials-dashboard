import React from 'react';
import './Loading.css';
import { useDebugValue } from 'react';
import { components } from 'react-select';

const Loading = () => {
	return <div className="loadingWrapper">Loading...</div>;
};

export default Loading;

// Example usage:

// Set state in Parent
// const [isLoading, setIsLoading] = useState(true);

// isLoading ? <Loading /> : <Content />
