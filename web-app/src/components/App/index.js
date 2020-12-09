import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "../LandingPage";
import SignInPage from "../SignInPage";
import Navigation from "../Navigation";
import SignUpPage from "../SignUpPage";
import Account from "../Account";
import Footer from "../Footer";
import CalendarPage from "../CalendarPage";
import ServicesPage from "../ServicesPage";
import PrivacyPolicyPage from "../PrivacyPolicyPage";
import TermsAndConditionsPage from "../TermsAndConditionsPage";
import AboutPage from "../AboutPage";

import * as ROUTES from "../../constants/routes";

const App = (props) => (
  <Router>
    <div className="main-container">
      <Navigation />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />

      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />

      <Route exact path={ROUTES.ACCOUNT} component={Account} />
      <Route exact path={ROUTES.CALENDAR} component={CalendarPage} />
      <Route exact path={ROUTES.SERVICES} component={() => <ServicesPage {...props} />} />

      <Route exact path={ROUTES.PRIVACY_POLICY} component={PrivacyPolicyPage} />
      <Route
        exact
        path={ROUTES.TERMS_AND_CONDITIONS}
        component={TermsAndConditionsPage}
      />
      
      <Route exact path={ROUTES.ABOUT} component={AboutPage} />

      <Footer />
    </div>
  </Router>
);

export default App;
