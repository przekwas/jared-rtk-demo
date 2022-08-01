//@ts-nocheck
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './features/auth/auth-slice';

import Chirper from './features/chirps/Chirper';

const App = (props: AppProps) => {
	const dispatch = useDispatch();
	const { loggedIn } = useSelector(state => state.auth);
	const chirps = useSelector(state => state.chirps.list);

	const test = () => {
		console.log(logout());
		dispatch(logout());
	}

	return (
		<main className="container my-5">
			{chirps.map(chirp => (
				<div>
					{chirp.name}: {chirp.msg}
				</div>
			))}
			<h1 className="text-primary text-center">{loggedIn ? 'Logged In' : 'Logged Out'}</h1>
			<button onClick={() => dispatch(login())}>Login</button>
			<button onClick={test}>Logout</button>
			<Chirper />
		</main>
	);
};

interface AppProps {}

export default App;