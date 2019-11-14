import React from 'react';

import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from '@material-ui/core';

var sampleAPIObject = {
  providers: [
    {
      name: "Provider 1",
      description: "We are provider #1 the best provider there ever was. We are provider #1 the best provider there ever was. We are provider #1 the best provider there ever was. We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.We are provider #1 the best provider there ever was.",
      logoURL: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
    },
    {
      name: "Provider 2",
      description: "We are provider #2 the second best provider there ever was.",
      logoURL: "https://www.breakingnews.ie/remote/image.assets.pressassociation.io/v2/image/production/5e7d8d78bee68faaea7463bc796814f8Y29udGVudHNlYXJjaCwxNTcxMjI2MDMw/2.47038087.jpg?crop=0,0,5360,3015&ext=.jpg&width=600&s=bn-957508"
    },
    {
      name: "Provider 3",
      description: "Description of provider 3",
      logoURL: "https://cdn.vox-cdn.com/thumbor/gO87PI8Haq68ncYTYTWnKVI9YH8=/0x0:600x350/1200x675/filters:focal(252x127:348x223)/cdn.vox-cdn.com/uploads/chorus_image/image/63388451/A_Consensus_sm.0.jpg"
    },
    {
      name: "Provider 4",
      description: "Description of provider 4",
      logoURL: ""
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

      marginTop: '50px',
      paddingBottom: '45px'
    }}>
      Check out these great service providers!
    </Typography>
    <Box overflow="scroll" width = "90vw" height = "65vh" marginBottom = "50px" marginLeft = "Auto" marginRight = "Auto">
      <Box minWidth = "1000px" overflowX="Scroll">
        <div>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left"><b>Logo</b></TableCell>
                <TableCell align="left"><b>Provider Name</b></TableCell>
                <TableCell align="left"><b>Description</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleAPIObject.providers.map(provider => (
                <TableRow key={provider.name} overflow = "scroll">
                  <TableCell align="left" width = "15%">
                    { provider.logoURL !== "" ? (
                      <img src={provider.logoURL}
                        stretched = "false"
                        style={{ width: '100%' }}/>)

                        :

                        (<p>No Logo</p>)
                    }
                  </TableCell>
                  <TableCell component="th" scope="row" width = "10%" overflow = "auto">
                    {provider.name}
                  </TableCell>

                  <TableCell align="left" width = "75%">{provider.description}</TableCell>
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