import React from 'react';

import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails,
  Checkbox, FormControlLabel } from '@material-ui/core';

import Address from '../Common/Address';

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
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
        <ExpansionPanelSummary className="title">
          <div>{this.data.title}</div>
          <FormControlLabel
            control={<Checkbox name="favorite" onClick={this.handleClick} />}
            label="Favorite"
            />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Address address={this.data.address}
                   unit={this.data.unit}
                   city={this.data.city}
                   state={this.data.state}
                   zip={this.data.zip}
                   />
          {this.data.phone && <div className="phone">Phone: {this.data.phone}</div>}
          {this.data.email && <div className="email">Email: {this.data.email}</div>}
          {this.data.website && <div className="website">Website: {this.data.website}</div>}
          {this.data.description && <div className="description">{this.data.description}</div>}
          {this.data.services && <ul className="service-list">
            {this.data.services.map((service, i) =>
              <li key={i}>{service}</li>
            )}
          </ul>}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default Service;