import React from 'react';
import '../Footer/Footer.css';

import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';

const Footer = () => (
    <div className='Footer'>
        <div>Social Links TBD</div>
        <div>Newsletter Sign Up TBD</div>
        <div className="linksContainer">
            <PrivacyPolicy />
            <TermsAndConditions />
        </div>
    </div>
)

export default Footer;