import React from 'react';
import { Container, Typography } from '@material-ui/core';

const AboutPage = () => {
    return (
        <Container>
            <Typography variant="h3" component="h3" gutterBottom>VISION</Typography>
            <Typography gutterBottom>A Wisconsin with connected resources to create effective alternatives to and within the criminal justice system to promote healthy and peaceful communities.</Typography>
            <Typography variant="h3" component="h3" gutterBottom>MISSION</Typography>
            <Typography gutterBottom>The mission of the Wisconsin Decarceration Platform is to foster collective action for positive change in the lives of those impacted by the justice system. We are a self-organizing anti-mass incarceration community, providing a digital safe place for service providers, advocacy organizations, and affected individuals to connect with each-other and those in need of post-conviction services. We strive for equity by promoting a culture of learning, agency, and human dignity to encourage collaboration and transformation.</Typography>
            <Typography variant="h3" component="h3" gutterBottom>ORGANIZATIONS INVOLVED</Typography>
            <Typography gutterBottom>The WDP was conceptualized in 2018 and has been in development for the past two years by a collaborative group of community members, philanthropists, activists, and academics from MSOE, UWM, Marquette University, Wisconsin Justice Initiative, Project RETURN, WISDOM, EXPO, the Milwaukee Turners’ Confronting Mass Incarceration project, Community Advocates, and many more Wisconsin organizations. </Typography>
            <br/>
            <Typography variant="h5"component="h5" gutterBottom>The Team</Typography>
            <Typography gutterBottom>
                Conor Williams, Community Advocates 
                <br/>Gretchen Schuldt, Wisconsin Justice Initiative
                <br/>Julilly Kohler, Milwaukee Turners Confronting Mass Incarceration Committee
                <br/>Paul Rinaldi, Milwaukee School of Engineering
                <br/>Michael Carriere, Milwaukee School of Engineering
                <br/>Wendel Hruska, Project Return
                <br/>Robert S. Smith, Marquette University
                <br/>Marisola Xhelili Ciaccio, Marquette University
                <br/>Timothy Ehlinger, University of Wisconsin-Milwaukee  
                <br/>Natraj Shanker, Rotary
                <br/>Sylvester Jackson, EXPO
                <br/>Milton Bond, Milwaukee Area Technical College
                <br/>David Liners, WISDOM
                <br/>Shannon Ross, The Community & University of Wisconsin-Milwaukee  
                <br/>Sara Onitsuka, University of Wisconsin-Milwaukee  
                <br/>Jeremy McClain, University of Wisconsin-Milwaukee  
            </Typography>
        </Container>
    )
};

export default AboutPage;
