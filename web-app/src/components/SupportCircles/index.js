import React from 'react';

import { Container, Typography } from '@material-ui/core';

const SupportCirclePage = () => {
    return (
        <Container>
          <Typography variant="h3" component="h3" gutterBottom>Circles of Support</Typography>
          <Typography gutterBottom>Join a circle that meets your schedule.</Typography>
          <Typography variant="h5" component="h4" gutterBottom>Visit <a href="https://www.facebook.com/COSmilwaukee/">https://www.facebook.com/COSmilwaukee/</a></Typography>
        </Container>
    );
};

export default SupportCirclePage;