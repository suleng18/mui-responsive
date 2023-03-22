import { Container, Grid, makeStyles, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/customers');
      const responseJSON = await response.json();

      setCustomers(responseJSON);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center">
        Su Leng Manager
      </Typography>
      <Grid container p={5} spacing={5}>
        {customers &&
          customers.map((customer) => (
            <Grid item xs={4} key={customer.id}>
              <Paper sx={{ height: 300 }}>
                <Typography variant="h5" align="center" gutterBottom>
                  {customer?.name}
                </Typography>
                <Typography variant="h6" align="center">
                  {customer?.details}
                </Typography>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Home;
