import React, { useState, useEffect } from "react";

import { Box, Container } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { API, graphqlOperation } from "aws-amplify";
import { listServiceProviders } from "../../graphql/queries";

import Service from "./Service";
import { myServices } from "../../constants/services"

const ServicesPage = (props) => {
  const [windowWidth, setWindowWidth] = useState(1000);
  const [expanded, setExpanded] = useState(1);
  const [segments, setSegments] = useState([]);

  const [services, setServices] = useState([]);
  // const [services, setServices] = useState(myServices);
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const serviceProviderData = await API.graphql(
        graphqlOperation(listServiceProviders)
      );
      console.log("received", serviceProviderData);
      const serviceProviders =
        serviceProviderData.data.listServiceProviders.items;
      console.log("services:", serviceProviders);
      setServices(serviceProviders);
    } catch (err) {
      alert("error fetching service providers");
      console.log(err);
    }
  };

  const handleCheck = (service) => (event) => {
    event.stopPropagation();
    if (event.target.checked) {
      if (!selectedServices.includes(service)) {
        setSelectedServices((prevSelected) => [...prevSelected, service]);
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
    console.log("checked", service, setSelectedServices);
  };

  const handleExpand = (service) => (event, isExpanded) => {
    setExpanded(isExpanded ? service : false);
  };

  const handleSegments = (event, newSegments) => {
    setSegments(newSegments);
    // TODO filter services by segment

    setServices(myServices.filter((service) => {
      let found = service['Program and Services'].forEach((program) => program.toLowerCase().includes(newSegments.toLowerCase()))
      return (
        found ||
        service.Description.toLowerCase().includes(newSegments.toLowerCase())
      );
    }))

    console.log("handleSegments", event, newSegments);
  };

  useEffect(() => { }, [expanded, selectedServices]);

  //Activates resize listener to update grid size
  window.addEventListener('resize', (e) => {
    setWindowWidth(window.innerWidth);
  });


  return (
    <Container
      className="services main"
      style={{
        display: "flex",
        flexDirection: (windowWidth < 650) ? "Column" : "row",
        marginTop: "20px",
        marginBottom: "200px",
        height: (windowWidth < 650) ? "120vh" : "60vh",
      }}
    >
      <Box
        className="left sidebar"
        style={{
          flex: "1",
          paddingRight: "5%",
          marginBottom: "20px",
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
          containerStyle={{
            position: "relative",
            display: "flex",
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {
            selectedServices.map(serviceId => {
              console.log(serviceId);
              const currService = services.filter(service => service.id === serviceId)[0];
              return (
                <Marker
                  title={currService.Label}
                  position={{ lat: currService.lat, lng: currService.long }}
                  key={serviceId}
                />
              );
            })}
        </Map>
      </Box>
    </Container>
  );
};

export default GoogleApiWrapper({
  apiKey: REACT_APP_GOOGLE_MAPS_API_KEY, // process.env.
})(ServicesPage);
