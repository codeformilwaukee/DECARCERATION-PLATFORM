import React from 'react';

import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails,
  Checkbox, FormControlLabel } from '@material-ui/core';

import Address from '../Common/Address';

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.data.id;
    this.data = props.data;
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    const handleCheck = this.props.handleCheck(this.id);
    handleCheck(event);
  }
  
  render() {
    return (
      <ExpansionPanel
        className="service detail"
        expanded={this.props.expanded === this.id}
        onChange={this.props.handleExpand(this.id)}>
        <ExpansionPanelSummary className="title" style={{
          display: "flex",
        }}>
          <div style={{
            display: "inline-block",
            flex: "4",
            height: "42px",
            lineHeight: "42px",
          }}>{this.data.Label}</div>
          <FormControlLabel
            control={<Checkbox name="favorite" onClick={this.handleClick} />}
            label="Favorite"
            style={{
              flex: "1",
              height: "42px",
            }}
            />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{flexDirection: "column"}}>
          <Address data={this.data} />
          {this.data.Phone && <div className="phone">Phone: {this.data.Phone}</div>}
          {this.data.Email && <div className="email">Email: {this.data.Email}</div>}
          {this.data.Website && <div className="website">Website: {this.data.Website}</div>}
          {this.data.Description && <div className="description">{this.data.Description}</div>}
          {this.data['Program and Services'] && <div className="service-list">
            <ul>
              {this.data['Program and Services'].map((service, i) =>
                <li key={i}>{service}</li>
              )}
            </ul>
          </div>}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default Service;