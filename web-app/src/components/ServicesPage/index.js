import React, {useState, useEffect} from 'react';

const ServicesPage = () => {

  //initialstate
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
  const [services, setServices] = useState(myServices);
  const [currService, setCurrService] = useState(initialCurrService);  
  
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
      <h1>Services</h1>
    </div>
);
}

export default ServicesPage;
