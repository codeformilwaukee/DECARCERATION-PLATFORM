import React from 'react';

import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from '@material-ui/core';

function createData(name, desc, link) {
  return { name, desc, link };
}

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
    <Box display="flex" justifyContent="center">
      <Box width="85%">
        <Table aria-label="simple table">
          <TableBody>
            {sampleAPIObject.providers.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>

                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">{row.logoURL}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  </div>
);

export default ServiceProviderListPage;