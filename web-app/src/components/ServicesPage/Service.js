import React from 'react';

import { Box, Checkbox, FormControlLabel } from '@material-ui/core';

const Service = (props) => {

  /*
  const initialCurrService = {
    title: "",
    address: "",
    unit: "",
    city: "",
    state: "",
    zip: "",
    lat: 0.0,
    lng: 0.0,
    phone: "",
    email: "",
    website: "",
    description: "",
    services: [],
  }
  */
  
  return (
    <Box className="service detail">
      <Box className="title">
        <div>{props.title}</div>
        <FormControlLabel control={<Checkbox name="favorite" />} label="Favorite" />
      </Box>
      <div>Address: {props.address}</div>
    </Box>
  );
}

export default Service;