import React, { useState } from 'react';
import { NotificationContainer } from 'react-notifications';

// Components
import Header from '../page-parts/header';
import Body from '../page-parts/body';
import NavBar from '../page-parts/header/nav';
import LoginPage from '../pages/user/loginpage';
import AccountPage from '../pages/account';
import TutorMatchPage from '../pages/tutormatch';

// Styles
import './index.scss';

function LandingPage(props) {

	const [logged_in, setLoggedIn] = useState(false);
	const [form, setForm] = useState("");

	return (
		<>
			<Header
				logged_in={logged_in}
				login={setLoggedIn}
			>
				<NavBar
					logged_in={logged_in}
					display_form={setForm} />
			</Header>
			<Body />

			{
				// Pages below
			}
			<LoginPage
				display={form === 'login'}
				display_form={setForm}
				login={setLoggedIn}
			/>
			<AccountPage
				display={form === 'account'}
				display_form={setForm}
			/>
			<TutorMatchPage
				display={form === 'tutormatch'}
				display_form={setForm}
			/>
			<NotificationContainer />
		</>
	)
}

export default LandingPage;