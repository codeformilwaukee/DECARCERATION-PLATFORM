/** Landing Page for Website */
import React from 'react';
import '../../index.css'
import './LandingPage.css'

const LandingPage = () => (
    <div class="main landing">
        <div class="welcome">
            <h2>Welcome</h2>
            <span>Wisconsin Decarceration Platform</span>
        </div>
        <div class="icons">
            <ul>
                <li>
                    <img src="images/organised.png" />
                    <br />
                    <span>&middot;&nbsp;Get Organised&nbsp;&middot;</span>
                </li>
                <li>
                    <img src="images/help.png" />
                    <br />
                    <span>&middot;&nbsp;Get Help&nbsp;&middot;</span>
                </li>
                <li>
                    <img src="images/informed.png" />
                    <br />
                    <span>&middot;&nbsp;Get Informed&nbsp;&middot;</span>
                </li>
            </ul>
        </div>
        <div id="message">
            <span>
                Everyone has a role to play in decarceration
            </span>
        </div>
    </div>

)

export default LandingPage;