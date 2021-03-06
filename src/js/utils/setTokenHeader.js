import axios from 'axios';

export default function setTokenHeader(token) {
	if (token) {
		axios.defaults.headers.common['x-access-token'] = token;
	} else {
		delete axios.defaults.headers.common['x-access-token'];
	}
};
