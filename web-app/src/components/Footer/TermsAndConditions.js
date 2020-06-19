import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

/**
 * The TermsAndConditions component provides a link to the Terms and Conditions Page.
 */
const TermsAndConditions = () => (
    <Link to={ROUTES.TERMS_AND_CONDITIONS}>
        Terms and Conditions
    </Link>
);

export default TermsAndConditions;
