import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <div>
            <Navigation />

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
            
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />

            <Route exact path={ROUTES.ACCOUNT} component={Account} />
        </div>
    </Router>
)

export default App;