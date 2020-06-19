import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

/**
 * The PrivacyPolicy component provides a link to the Privacy Policy Page.
 */
const PrivacyPolicy = () => (
    <Link to={ROUTES.PRIVACY_POLICY}>
        Privacy Policy
    </Link>
);

export default PrivacyPolicy;
