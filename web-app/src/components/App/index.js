import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from '../LandingPage';
import SignInPage from '../SignInPage'
import Navigation from '../Navigation';
import HomePage from '../HomePage';
import SignUpPage from '../SignUpPage';
import Account from '../Account';
import Footer from '../Footer';
import CalendarPage from '../CalendarPage';
import ServicesPage from '../ServicesPage';

import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <div>
            <Navigation />

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />

            <Route exact path={ROUTES.HOME_PAGE} component={HomePage} />
            <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />

            <Route exact path={ROUTES.ACCOUNT} component={Account} />
            <Route exact path={ROUTES.CALENDAR} component={CalendarPage} />
            <Route exact path={ROUTES.SERVICES} component={ServicesPage} />
            <Footer />
        </div>
    </Router>
);

export default App;