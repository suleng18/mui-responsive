import { Delete } from '@mui/icons-material';
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import React, { useContext } from 'react';
import CustomerContext from '../context/CustomerContext';
import CustomerModal from './CustomerModal';

const CustomerCard = (props) => {
  const { customer } = props;
  const { deleteCustomer } = useContext(CustomerContext);

  function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Card>
      <Avatar {...stringAvatar(customer.name)} />
      <CardHeader
        title={customer?.name}
        action={
          <IconButton onClick={() => deleteCustomer(customer?.id)}>
            <Delete />
          </IconButton>
        }
      />
      <CardContent>
        <Typography paragraph align="justify">
          {customer.details}
        </Typography>
        <CustomerModal customer={customer}></CustomerModal>
      </CardContent>
    </Card>
  );
};

export default CustomerCard;
