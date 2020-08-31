import React, { useState, useEffect } from "react";

import { Box, Container } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react"
import { API, graphqlOperation } from 'aws-amplify'

import Service from "./Service";
import { myServices } from "../../constants/services"

const ServicesPage = (props) => {
  const [expanded, setExpanded] = useState(1);
  const [segments, setSegments] = useState([]);

  // TODO load list of services from data
  //const [services, setServices] = useState(myServices);
  const [services] = useState(myServices);
  const [selectedServices, setSelectedServices] = useState([]);

  //functions
  const handleCheck = (service) => (event) => {
    event.stopPropagation();
    if (event.target.checked) {
      if (!selectedServices.includes(service)) {
        setSelectedServices(prevSelected => ([...prevSelected, service]));
      }
    } else {
      const idx = selectedServices.indexOf(service);
      if (idx > -1) {
        setSelectedServices((prevSelected) => {
          const newSelected = [...prevSelected];
          newSelected.splice(idx, 1);
          return newSelected;
        });
      }
    }
    // TODO event.target.checked contains state of checkbox with id of service param
    // service param will be "service0", "service1", etc based on position in list
  };

  const handleExpand = (service) => (event, isExpanded) => {
    setExpanded(isExpanded ? service : false);
  };

  const handleSegments = (event, newSegments) => {
    setSegments(newSegments);
    // TODO filter services by segment
  };

  useEffect(() => { }, [expanded, selectedServices]);

  return (
    <Container
      className="services main"
      style={{
        display: "flex",
        marginTop: "200px",
      }}
    >
      <Box
        className="left sidebar"
        style={{
          flex: "1",
          paddingRight: "5%",
        }}
      >
        <Box className="segments">
          <ToggleButtonGroup
            onChange={handleSegments}
            value={segments}
            exclusive={true}
          >
            <ToggleButton value="food">Food</ToggleButton>
            <ToggleButton value="health">Health</ToggleButton>
            <ToggleButton value="jobs">Jobs</ToggleButton>
            <ToggleButton value="housing">Housing</ToggleButton>
            <ToggleButton value="reentry">Reentry</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        {services.map((service, i) => {
          return (
            <Service
              key={i}
              expanded={expanded}
              handleCheck={() => handleCheck(service.id)}
              handleExpand={() => handleExpand(service.id)}
              data={service}
            />
          );
        })}
      </Box>
      <Box
        className="map"
        style={{
          flex: "2",
          border: "5px",
        }}
      >
        <Map
          google={props.google}
          zoom={10}
          xs={12}
          item
          initialCenter={{ lat: 43.057806, lng: -88.1075128 }}
          style={{
            width: "50%",
            height: "70%",
          }}
        >
          {
            selectedServices.map(serviceId => {
              const currService = myServices.filter(service => service.id === serviceId)[0];
              return (
                <Marker
                  title={currService.title}
                  position={{ lat: currService.lat, lng: currService.long }}
                  key={serviceId}
                />
              );
            })
          }
        </Map>
      </Box>
    </Container>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(ServicesPage);
