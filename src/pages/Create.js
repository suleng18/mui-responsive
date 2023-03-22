import { Send } from '@mui/icons-material';
import {
  Button,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Rating,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const Create = () => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [nameError, setNameError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [gender, setGender] = useState('female');
  const [rating, setRating] = useState(5);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (name && details && gender && rating) {
      console.log(name, details, gender, rating);
    }

    if (name === '') setNameError(true);
    if (details === '') setDetailsError(true);
  };

  return (
    <Container>
      <Typography variant="h3" align="center">
        Create a new customer
      </Typography>

      <form onSubmit={handleSubmitForm} noValidate autoComplete="off">
        <Box pb={3}>
          <TextField
            label="Name"
            variant="standard"
            fullWidth
            required
            onChange={(e) => setName(e.target.value)}
            error={nameError}
          />
          <TextField
            label="Details"
            variant="standard"
            fullWidth
            multiline
            rows={2}
            onChange={(e) => setDetails(e.target.value)}
            error={detailsError}
          />
          <RadioGroup row value={gender} onChange={(e) => setGender(e.target.value)}>
            <FormControlLabel value="male" control={<Radio />} label="Male"></FormControlLabel>
            <FormControlLabel value="female" control={<Radio />} label="Female"></FormControlLabel>
            <FormControlLabel value="others" control={<Radio />} label="Others"></FormControlLabel>
          </RadioGroup>

          <Rating value={rating} onChange={(e) => setRating(~~e.target.value)} />
        </Box>
        <Button type="submit" variant="contained" size="large" startIcon={<Send />}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
