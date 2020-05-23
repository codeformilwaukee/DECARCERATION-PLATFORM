import React, {useState, useEffect} from 'react';

import { Box, Checkbox, FormControlLabel } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

const ServicesPage = () => {

  //initialstate
  /*
  const myServices = [
      {
      title: 'major hacks 1',
    },
    {
      title: 'major hacks 2',
    },
    {
      title: 'major hacks 3',
    }
  ];
  */

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
  //const [services, setServices] = useState(myServices);
  //const [currService, setCurrService] = useState(initialCurrService);  
  const [currService] = useState(initialCurrService);  
  
  //functions
  useEffect(()=>{
  },[])

  
  return (
    <div style={{
      position: 'absolute', 
      left: '50%', 
      top: '50%',
      transform: 'translate(-50%, -50%)',
      marginTop: "200px"}}>
      <Box class="services">
        <Box class="left sidebar">
          <Box class="segments">
            <ToggleButtonGroup>
              <ToggleButton>Food</ToggleButton>
              <ToggleButton>Health</ToggleButton>
              <ToggleButton>Jobs</ToggleButton>
              <ToggleButton>Housing</ToggleButton>
              <ToggleButton>Reentry</ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box class="service detail">
            <Box class="title">
              <div>{currService.title}</div>
              <FormControlLabel control={<Checkbox name="favorite" />} label="Favorite" />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
);
}

export default ServicesPage;
