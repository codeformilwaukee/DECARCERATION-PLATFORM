import React from 'react';

import { Accordion, AccordionSummary, AccordionDetails,
  Checkbox, FormControlLabel } from '@material-ui/core';
import Address from '../Common/Address';

class Service extends React.Component {
  constructor(props) {
    super(props);

    console.log("props:", props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    const handleCheck = this.props.handleCheck(this.props.data.id);
    handleCheck(event);
  }
  
  render() {
    return (
      <Accordion
        className="service detail"
        expanded={this.props.expanded === this.props.data.id}
        onChange={this.props.handleExpand(this.props.data.id)}>
        <AccordionSummary className="title" style={{
          display: "flex",
        }}>
          <div style={{
            display: "inline-block",
            flex: "4",
            height: "42px",
            lineHeight: "42px",
          }}>{this.props.data.Label}</div>
          <FormControlLabel
            control={<Checkbox name="favorite" onClick={this.handleClick} />}
            label="Favorite"
            style={{
              flex: "1",
              height: "42px",
            }}
            />
        </AccordionSummary>
        <AccordionDetails style={{flexDirection: "column"}}>
          <Address data={this.props.data} />
          {this.props.data.Phone && <div className="phone">Phone: {this.props.data.Phone}</div>}
          {this.props.data.Email && <div className="email">Email: {this.props.data.Email}</div>}
          {this.props.data.Website && <div className="website">Website: {this.props.data.Website}</div>}
          {this.props.data.Description && <div className="description">{this.props.data.Description}</div>}
          {this.props.data['Program and Services'] && <div className="service-list">
            <ul>
              <li key={this.props.data['Program and Services']}>{this.props.data['Program and Services']}</li>
            </ul>
          </div>}
        </AccordionDetails>
      </Accordion>
    );
  }
}

export default Service;