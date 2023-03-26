import { Inbox } from '@mui/icons-material';
import {
  Box,
  Container,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import CustomerCard from '../components/CustomerCard';
import CustomerContext from '../context/CustomerContext';
import CssBaseline from '@mui/material/CssBaseline';

const Home = () => {
  const { customers } = useContext(CustomerContext);

  return (
    <Container>
      <CssBaseline />
      <Typography variant="h3" gutterBottom align="center">
        Su Leng Manager
      </Typography>

      <Box sx={{ display: 'flex' }}>
        <Box>
          <Drawer variant="permanent" anchor="left">
            <List>
              <ListItem component="a" href="/create">
                <ListItemIcon>
                  <Inbox />
                </ListItemIcon>
                <ListItemText primary="Create new customer"></ListItemText>
              </ListItem>
            </List>
          </Drawer>
        </Box>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container p={5} spacing={3}>
            {customers &&
              customers.map((customer) => (
                <Grid item xs={4} key={customer.id}>
                  <CustomerCard customer={customer} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
