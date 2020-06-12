import React from 'react';
import './HomePage.css'
import { Typography } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';

const HomePage = () => (
    <div className="external-links">
      <Typography style = {{
          color: 'black',
          fontSize: '1.5vw',
          marginTop: '20px'}}>
          External Links
      </Typography>
      <List>
        <ListItem>
          <a href="https://211wisconsin.communityos.org/guided-search">
            <Typography style = {{
                color: 'black',
                fontSize: '1vw',
                textDecoration: 'underline',
                marginTop: '20px'}}>
                211 Madison Basic Needs Search
            </Typography>
          </a>
        </ListItem>
        <ListItem>
          <a href="https://www.mkehometostay.org/">
            <Typography style = {{
                color: 'black',
                fontSize: '1vw',
                textDecoration: 'underline'}}>
                Home to Stay
            </Typography>
          </a>
        </ListItem>
      </List>
    </div>
);

export default HomePage;