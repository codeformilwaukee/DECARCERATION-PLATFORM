import React from 'react';
import { Container, Typography } from '@material-ui/core';

const AboutPage = () => {
    return (
        <Container style={{textAlign: 'center'}}>
            <Typography variant="h3" component="h3" gutterBottom>VISION</Typography>
            <Typography gutterBottom>A Wisconsin with connected resources to create effective alternatives to and within the criminal justice system to promote healthy and peaceful communities.</Typography>
            <Typography variant="h3" component="h3" gutterBottom>MISSION</Typography>
            <Typography gutterBottom>The mission of the Wisconsin Decarceration Platform is to foster collective action for positive change in the lives of those impacted by the justice system. We are a self-organizing anti-mass incarceration community, providing a digital safe place for service providers, advocacy organizations, and affected individuals to connect with each-other and those in need of post-conviction services. We strive for equity by promoting a culture of learning, agency, and human dignity to encourage collaboration and transformation.</Typography>
            <Typography variant="h3" component="h3" gutterBottom>ORGANIZATIONS INVOLVED</Typography>
            <Typography gutterBottom>The WDP was conceptualized in 2018 and has been in development for the past two years by a collaborative group of community members, philanthropists, activists, and academics from MSOE, UWM, Marquette University, Wisconsin Justice Initiative, Project RETURN, WISDOM, EXPO, the Milwaukee Turners’ Confronting Mass Incarceration project, Community Advocates, and many more Wisconsin organizations. </Typography>
            <br/>
            <Typography variant="h5"component="h5" gutterBottom>The Team</Typography>
            <Typography gutterBottom style={{textAlign:'center'}}>
            David Liners, <a target="_blank" rel="noopener noreferrer" href="https://wisdomwisconsin.org"><b>WISDOM</b></a>
            <br/>Gretchen Schuldt, Wisconsin Justice Initiative (<a target="_blank" rel="noopener noreferrer" href="https://www.wjiinc.org"><b>WJI</b></a>)
            <br/>Jeremy McClain, <a target="_blank" rel="noopener noreferrer" href="https://uwm.edu/icfw/community-engagement-systems-change/"><b>University of Wisconsin-Milwaukee</b></a>
            <br/>Julilly Kohler, <a target="_blank" rel="noopener noreferrer" href="https://www.milwaukeeturners.org/cmi"><b>Milwaukee Turners Confronting Mass Incarceration Committee</b></a>
            <br/>Marisola Xhelili Ciaccio, <a target="_blank" rel="noopener noreferrer" href="https://www.marquette.edu"><b>Marquette University</b></a>
            <br/>Michael Carriere, <a target="_blank" rel="noopener noreferrer" href="https://www.msoe.edu"><b>Milwaukee School of Engineering</b></a> (<a href="mailto:carriere@msoe.edu"><b>carriere@msoe.edu</b></a>)
            <br/>Milton Bond, <a target="_blank" rel="noopener noreferrer" href="https://www.matc.edu"><b>Milwaukee Area Technical College</b></a>
            <br/>Natraj Shanker, <a target="_blank" rel="noopener noreferrer" href="http://milwaukeerotary.com"><b>Milwaukee Rotary</b></a>
            <br/>Paul Rinaldi, <a target="_blank" rel="noopener noreferrer" href="https://www.msoe.edu"><b>Milwaukee School of Engineering</b></a>
            <br/>Robert S. Smith, <a target="_blank" rel="noopener noreferrer" href="https://www.marquette.edu"><b>Marquette University</b></a>
            <br/>Sara Onitsuka, <a target="_blank" rel="noopener noreferrer" href="https://uwm.edu/icfw/community-engagement-systems-change/"><b>University of Wisconsin-Milwaukee</b></a>
            <br/>Shannon Ross, <a target="_blank" rel="noopener noreferrer" href="http://thecommunitynow.us/about-us/"><b>The Community</b></a>
            <br/>Sylvester Jackson, <a target="_blank" rel="noopener noreferrer" href="https://wisdomwisconsin.org/expo-ex-prisoners-organizing/"><b>EXPO</b></a>
            <br/>Timothy Ehlinger, <a target="_blank" rel="noopener noreferrer" href="https://uwm.edu/icfw/community-engagement-systems-change/"><b>University of Wisconsin-Milwaukee</b></a>)
            <br/>Wendel Hruska, <a target="_blank" rel="noopener noreferrer" href="https://www.projectreturnmilwaukee.org"><b>Project Return</b></a>
            </Typography>
        </Container>
    )
};

export default AboutPage;
