import React, {useState, useEffect} from 'react';

import { Box, Container } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import Service from './Service';

const ServicesPage = () => {

  //initialstate
  const myServices = [
      {
      title: 'Provider 1',
    },
    {
      title: 'Provider 2',
    },
    {
      title: 'Provider 3',
    }
  ];

  //const [services, setServices] = useState(myServices);
  const [services] = useState(myServices);
  
  //functions
  useEffect(()=>{
  },[])

  
  return (
    <Container className="services" style={{marginTop: "200px"}}>
      <Box className="left sidebar">
        <Box className="segments">
          <ToggleButtonGroup>
            <ToggleButton value="food">Food</ToggleButton>
            <ToggleButton value="health">Health</ToggleButton>
            <ToggleButton value="jobs">Jobs</ToggleButton>
            <ToggleButton value="housing">Housing</ToggleButton>
            <ToggleButton value="reentry">Reentry</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        {services.map((service, i) => {
          return (<Service key={i} title={service.title} />)
        })}
      </Box>
    </Container>
  );
}

export default ServicesPage;
