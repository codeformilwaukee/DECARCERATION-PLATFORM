import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import '../../index.css';
import './Footer.css';

const Footer = () => (
    <div className='footer'>
        <div>Social Links TBD</div>
        <div>Newsletter Sign Up TBD</div>
        <div className="linksContainer">
            <Link to={ROUTES.PRIVACY_POLICY}>
                Privacy Policy
            </Link>
            <Link to={ROUTES.TERMS_AND_CONDITIONS}>
                Terms and Conditions
            </Link>
            <a href="https://211wisconsin.communityos.org/guided-search">
                211 Madison Basic Needs Search
            </a>
            <a href="https://www.mkehometostay.org/">
                Home to Stay
            </a>
        </div>
    </div>
)

export default Footer;