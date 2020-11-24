import React from 'react';

import { Accordion, AccordionSummary, AccordionDetails,
  Checkbox, FormControlLabel, Divider } from '@material-ui/core';
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
          backgroundColor: "#F2F2F2" // 9BD5E8 // 69B9D4
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
        <AccordionDetails style={{flexDirection: "column", backgroundColor: "#F2F2F2"}}>
          <Address data={this.props.data} />
          {this.props.data.Phone && <div className="phone"><span role="img" aria-label="telephone">📞</span> <a href={"tel:"+this.props.data.Phone}>{this.props.data.Phone}</a></div>}
          {this.props.data.Email && <div className="email"><span role="img" aria-label="envelope">✉️</span> <a href={"mailto:"+this.props.data.Email}>{this.props.data.Email}</a></div>}
          {this.props.data.Website && <div className="website"><span role="img" aria-label="button with i for information">ℹ️</span> <a href={"https://"+this.props.data.Website} target="_blank" rel="noopener noreferrer">{this.props.data.Website}</a></div>}
          {(this.props.data.Phone || this.props.data.Email || this.props.data.Website || this.props.data.Address) && this.props.data.Description && <Divider style={{margin: 10}}/>}
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