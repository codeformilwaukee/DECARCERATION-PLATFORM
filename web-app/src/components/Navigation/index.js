import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, withRouter } from "react-router-dom";
import "./navigation.css";
import "../../index.css";
import * as LINKS from "../../constants/navlinks";

class Navigation extends Component {
  // Control appearance of menu on phone-size screens
  constructor(props) {
    super(props);
    this.state = {
      toggle: 0,
    };
  }

  render() {
    let path = this.props.location.pathname;

    // If there are specific page links use those, else use defaults
    var links =
      Object.keys(LINKS.PAGE_LINKS).indexOf(path) === -1
        ? LINKS.DEFAULTS
        : LINKS.PAGE_LINKS[path];

    return (
      <div className="nav">
        <MenuIcon
          onClick={() => this.setState({ toggle: 1 - this.state.toggle })}
        />
        <ul
          className={this.state.toggle ? "show" : ""}
          onMouseLeave={() => this.setState({ toggle: 0 })}
        >
          {links.map((link) => (
            <li key={link[0]}>
              {link[0] !== path && <Link to={link[0]}>{link[1]}</Link>}

              {link[0] === path && <span>{link[1]}</span>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(Navigation);
