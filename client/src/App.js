import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ToDoList from './pages/ToDo/ToDoList';
import RouteGuard from './components/RouteGuard';
import './App.css';
import 'antd/dist/reset.css';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Landing />} />
			<Route
				path='/login'
				element={
					<RouteGuard redirectTo='/'>
						<Login />
					</RouteGuard>
				}
			/>
			<Route
				path='/register'
				element={
					<RouteGuard redirectTo='/'>
						<Register />
					</RouteGuard>
				}
			/>
			<Route
				path='/to-do-list'
				element={
					// <RouteGuard>
						<ToDoList />
					// </RouteGuard>
				}
			/>
		</Routes>
	);
}

export default App;
