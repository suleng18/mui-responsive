import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: 'none',
          sm: 'block',
        },
      }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={300}>
          Friends Online
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" />
          <Avatar alt="Travis Howard" src="https://source.unsplash.com/random" />
          <Avatar alt="Cindy Baker" src="https://source.unsplash.com/random" />
          <Avatar alt="Agnes Walker" src="https://source.unsplash.com/random" />
          <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random" />
          <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random" />
          <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random" />
          <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={300} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://source.unsplash.com/random" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://source.unsplash.com/random" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://source.unsplash.com/random" alt="" />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={300} mt={2}>
          Latest Conversations
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
