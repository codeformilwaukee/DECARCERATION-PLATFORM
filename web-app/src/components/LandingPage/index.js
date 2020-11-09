/** Landing Page for Website */
import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "../../index.css";
import "./LandingPage.css";

const LandingPage = () => (
  <div className="main landing">
    <div className="welcome">
      <h2>Welcome</h2>
      <span>Wisconsin Decarceration Platform</span>
    </div>
    <div className="icons">
      <ul>
        <li>
          <img src="images/organised.png" alt="People protesting icon" />
          <br />
          <span>&middot;&nbsp;Get Involved&nbsp;&middot;</span>
        </li>
        <li>
          <Link to={ROUTES.SERVICES}>
            <img src="images/help.png" alt="Helpful hand icon" />
          </Link>
          <br />
          <span>&middot;&nbsp;Get Help&nbsp;&middot;</span>
        </li>
        <li>
          <img src="images/informed.png" alt="Open book icon" />
          <br />
          <span>&middot;&nbsp;Get Informed&nbsp;&middot;</span>
        </li>
      </ul>
    </div>
  </div>
);

export default LandingPage;
