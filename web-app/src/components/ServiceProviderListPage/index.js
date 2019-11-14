import React from 'react';

import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from '@material-ui/core';

var sampleAPIObject = {
  providers: [
    {
      name: "Provider 1",
      description: "We are provider #1 the best provider there ever was. We are provider #1 the best provider there ever was. We are provider #1 the best provider there ever was. We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.",
      logoURL: "www.google.com"
    },
    {
      name: "Provider 2",
      description: "We are provider #2 the second best provider there ever was.",
      logoURL: "www.bing.com"
    },
    {
      name: "Provider 3",
      description: "Description of provider 3",
      logoURL: "www.google.com"
    },
    {
      name: "Provider 4",
      description: "Description of provider 4",
      logoURL: "www.bing.com"
    },
    {
      name: "Provider 5",
      description: "Description of provider 5",
      logoURL: "www.google.com"
    },
    {
      name: "Provider 6",
      description: "Description of provider 6",
      logoURL: "www.bing.com"
    },
    {
      name: "Provider 7",
      description: "We are provider #1 the best provider there ever was. We are provider #1 the best provider there ever was. We are provider #1 the best provider there ever was. We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.",
      logoURL: "www.google.com"
    },
    {
      name: "Provider 8",
      description: "We are provider #2 the second best provider there ever was.",
      logoURL: "www.bing.com"
    },
    {
      name: "Provider 9",
      description: "We are provider #1 the best provider there ever was. We are provider #1 the best provider there ever was. We are provider #1 the best provider there ever was. We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.",
      logoURL: "www.google.com"
    },
    {
      name: "Provider 10",
      description: "We are provider #2 the second best provider there ever was.",
      logoURL: "www.bing.com"
    },
    {
      name: "Provider 11",
      description: "We are provider #1 the best provider there ever was. We are provider #1 the best provider there ever was. We are provider #1 the best provider there ever was. We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.",
      logoURL: "www.google.com"
    },
    {
      name: "Provider 12",
      description: "We are provider #2 the second best provider there ever was.",
      logoURL: "www.bing.com"
    }
  ]
}

const ServiceProviderListPage = () => (
  <div>
    <Typography style={{
      color: 'black',
      textAlign: 'center',
      fontSize: '40px',

      marginTop: '30px',
      paddingBottom: '45px'
    }}>
      Check out these great service providers!
    </Typography>
    <Box overflow="scroll" width = "90vw" height = "65vh" marginLeft = "Auto" marginRight = "Auto">
      <Box minWidth = "1000px" overflowX="Scroll">
        <div>
          <Table aria-label="simple table">
            <TableBody>
              {sampleAPIObject.providers.map(provider => (
                <TableRow key={provider.name} overflow = "scroll">
                  <TableCell component="th" scope="row" width = "10%" overflow = "auto">
                    {provider.name}
                  </TableCell>

                  <TableCell align="left" width = "75%">{provider.description}</TableCell>
                  <TableCell align="left" width = "15%">{provider.logoURL}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Box>
    </Box>
  </div>
);

export default ServiceProviderListPage;