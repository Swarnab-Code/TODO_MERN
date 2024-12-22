import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import landing from '../../assets/landing.jpg';
import styles from './Landing.module.css';
import { isAuthenticated } from '../../services/authServices';

function Landing() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const user = isAuthenticated();
		setIsLoggedIn(user);
	}, []);

	return (
		<div>
			<Navbar active={'home'} />
			<div className={styles.landing__wrapper}>
				<div className={styles.landing__text}>
					<h1>
						Schedule Your Daily Tasks With{' '}
						<span className='primaryText'>ToDo!</span>
					</h1>
					{!isLoggedIn && (
						<div className='btnWrapper'>
							<Link to='/register' className='primaryBtn'>
								Register
							</Link>
							<Link to='/login' className='secondaryBtn'>
								Login
							</Link>
						</div>
					)}
				</div>

				<div className={styles.landing__img}>
					<img src={landing} alt='landing' />
				</div>
			</div>
		</div>
	);
}

export default Landing;
