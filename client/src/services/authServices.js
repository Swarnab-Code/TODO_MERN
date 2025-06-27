import axios from 'axios';

const SERVER_URL = `${process.env.REACT_APP_SERVER_API}/api`;

const registerUser = (data) => {
	return axios.post(`${SERVER_URL}/register`, data);
};

const loginUser = (data) => {
	return axios.post(`${SERVER_URL}/login`, data);
};

const isAuthenticated = () => {
	return localStorage.getItem('toDoAppUser') ? true : false;
};

export { registerUser, loginUser, isAuthenticated };
